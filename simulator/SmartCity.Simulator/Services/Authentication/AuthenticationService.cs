using System.Net.Http.Json;
using Microsoft.Extensions.Options;
using SmartCity.Simulator.Configuration;
using SmartCity.Simulator.Models.Payloads;

namespace SmartCity.Simulator.Services.Authentication
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly HttpClient _httpClient;
        private readonly SimulatorSettings _settings;
        private string? _cachedToken;
        private DateTime _tokenExpiry = DateTime.MinValue;

        public AuthenticationService(HttpClient httpClient, IOptions<SimulatorSettings> settings)
        {
            _httpClient = httpClient;
            _settings = settings.Value;
        }

        public async Task<string> GetAccessTokenAsync(CancellationToken ct)
        {
            // If have a token and it hasn't expired yet, reuse it
            if (!string.IsNullOrEmpty(_cachedToken) && _tokenExpiry > DateTime.UtcNow.AddMinutes(1))
            {
                return _cachedToken;
            }

            // Map local settings properties to the names the API expects
            var loginRequest = new
            {
                Username = _settings.AdminUsername,
                Password = _settings.AdminPassword
            };

            // Log the URL to ensure it's hitting the right spot

            var response = await _httpClient.PostAsJsonAsync("api/Auth/login", loginRequest, ct);

            if (!response.IsSuccessStatusCode)
            {
                // Add this to local debugging to see why it failed
                var errorContent = await response.Content.ReadAsStringAsync(ct);
                throw new HttpRequestException($"Authentication failed with status: {response.StatusCode}. Content: {errorContent}");
            }

            var authData = await response.Content.ReadFromJsonAsync<AuthTokenResponse>(cancellationToken: ct);

            if (authData == null)
            {
                throw new InvalidOperationException("Auth response was empty.");
            }

            _cachedToken = authData.Token;
            _tokenExpiry = authData.Expires;

            return _cachedToken;
        }
    }
}