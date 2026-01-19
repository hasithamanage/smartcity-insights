using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using SmartCity.Api.Middleware;
using SmartCity.Application.Interfaces;
using SmartCity.Application.Services;
using SmartCity.Infrastructure.Data;
using SmartCity.Infrastructure.Repositories;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// --- 1. Services Configuration ---
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<SmartCityDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Dependency Injection
builder.Services.AddScoped<ICityMetricRepository, CityMetricRepository>();
builder.Services.AddScoped<ICityMetricService, CityMetricService>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IAuthService, AuthService>();

// CORS Policy Configuration
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:5174") // React Port
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Setup Authentication

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!))
        };
    });

var app = builder.Build();

// --- 2. Request Pipeline (Middleware) ---

// Always first: Catch errors from every middleware below it
app.UseMiddleware<ExceptionMiddleware>();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Early CORS handling
app.UseCors();

app.UseAuthentication(); // Use Authentication

app.UseAuthorization();

app.MapControllers();

app.Run();