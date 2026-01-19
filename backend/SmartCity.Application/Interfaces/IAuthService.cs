using SmartCity.Application.DTOs;

namespace SmartCity.Application.Interfaces
{
    public interface IAuthService
    {
        Task<AuthResponse?> AuthenticateAsync(LoginRequest request);
    }
}