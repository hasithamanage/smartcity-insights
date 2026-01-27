using System.Net.Http.Headers;
using System.Net.Http.Json;
using SmartCity.Simulator.Models.Payloads;
using SmartCity.Simulator.Services.Authentication;

namespace SmartCity.Simulator.Services.Ingestion
{
    public class MetricIngestionService : IMetricIngestionService
    {
        private readonly HttpClient _httpClient;
        private readonly IAuthenticationService _authService;

        public MetricIngestionService(HttpClient httpClient, IAuthenticationService authService)
        {
            _httpClient = httpClient;
            _authService = authService;
        }

        public async Task SendMetricAsync(SensorReadingPayload payload, CancellationToken ct)
        {
            // 1. Fetch token
            var token = await _authService.GetAccessTokenAsync(ct);

            // 2. Create a request-specific message (Thread-safe)
            using var request = new HttpRequestMessage(HttpMethod.Post, "api/CityMetrics")
            {
                Content = JsonContent.Create(payload),
                Headers =
            {
                Authorization = new AuthenticationHeaderValue("Bearer", token)
            }
            };

            // 3. Send via the shared client
            var response = await _httpClient.SendAsync(request, ct);

            if (!response.IsSuccessStatusCode)
            {
                var error = await response.Content.ReadAsStringAsync(ct);
                throw new HttpRequestException($"Ingestion failed: {response.StatusCode}. Details: {error}");
            }
        }
    }
}