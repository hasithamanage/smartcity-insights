using Microsoft.EntityFrameworkCore;
using SmartCity.Application.Interfaces;
using SmartCity.Application.Services;
using SmartCity.Infrastructure.Data;
using SmartCity.Infrastructure.Repositories;


var builder = WebApplication.CreateBuilder(args);



// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<SmartCityDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<ICityMetricRepository, CityMetricRepository>();

builder.Services.AddScoped<ICityMetricService, CityMetricService>();

// 1. Configure Backend CORS by add the policy

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

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// 2. Apply the policy

app.UseCors();

// Use custom error handler

app.UseMiddleware<SmartCity.Api.Middleware.ExceptionMiddleware>();

app.UseAuthorization();

app.MapControllers();

app.Run();
