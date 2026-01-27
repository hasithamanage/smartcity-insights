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
            // Step 1: Secure the pipe
            var token = await _authService.GetAccessTokenAsync(ct);
            _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);

            // Step 2: Push the data
            // Target existing CityMetrics endpoint
            var response = await _httpClient.PostAsJsonAsync("api/CityMetrics", payload, ct);

            if (!response.IsSuccessStatusCode)
            {
                var error = await response.Content.ReadAsStringAsync(ct);
                throw new HttpRequestException($"Ingestion failed: {response.StatusCode}. Details: {error}");
            }
        }
    }
}