namespace SmartCity.Application.DTOs
{
    public record LoginRequest(string Username, string Password);

    public record AuthResponse(string Token, string Username, DateTime Expires);
}