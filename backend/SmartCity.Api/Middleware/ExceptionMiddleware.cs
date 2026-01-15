using System.Net;
using System.Text.Json;
using SmartCity.Application.DTOs;

namespace SmartCity.Api.Middleware
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IHostEnvironment _env;
        private readonly ILogger<ExceptionMiddleware> _logger;

        public ExceptionMiddleware(RequestDelegate next, IHostEnvironment env, ILogger<ExceptionMiddleware> logger)
        {
            _next = next;
            _env = env;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                // Critical for production monitoring
                _logger.LogError(ex, "Unhandled Exception: {Message}", ex.Message);
                await HandleExceptionAsync(context, ex);
            }
        }

        private async Task HandleExceptionAsync(HttpContext context, Exception ex)
        {
            context.Response.ContentType = "application/json";

            // Default to 500 Internal Server Error
            var statusCode = (int)HttpStatusCode.InternalServerError;

            // Handle specific business or validation exceptions
            if (ex is ArgumentException)
            {
                statusCode = (int)HttpStatusCode.BadRequest;
            }
            // Later add other specific exceptions here (UnauthorizedAccessException)

            context.Response.StatusCode = statusCode;

            var response = new ErrorResponse
            {
                StatusCode = statusCode,
                Message = _env.IsDevelopment() ? ex.Message : "An unexpected error occurred on the server.",
                Details = _env.IsDevelopment() ? ex.ToString() : null
            };

            var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };
            var json = JsonSerializer.Serialize(response, options);

            await context.Response.WriteAsync(json);
        }
    }
}