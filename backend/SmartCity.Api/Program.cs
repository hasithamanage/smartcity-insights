using Microsoft.EntityFrameworkCore;
using SmartCity.Api.Middleware;
using SmartCity.Application.Interfaces;
using SmartCity.Application.Services;
using SmartCity.Infrastructure.Data;
using SmartCity.Infrastructure.Repositories;

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

app.UseAuthorization();

app.MapControllers();

app.Run();