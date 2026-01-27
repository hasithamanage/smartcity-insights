using SmartCity.Simulator.Models.Payloads;

namespace SmartCity.Simulator.Services.Authentication
{
    public interface IAuthenticationService
    {
        Task<string> GetAccessTokenAsync(CancellationToken ct);
    }
}