using SmartCity.Simulator.Models.Payloads;

namespace SmartCity.Simulator.Services.Ingestion
{
    public interface IMetricIngestionService
    {
        Task SendMetricAsync(SensorReadingPayload payload, CancellationToken ct);
    }
}