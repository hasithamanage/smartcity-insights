using SmartCity.Domain.Enums;
using SmartCity.Simulator.Models.Payloads;

namespace SmartCity.Simulator.Services.Simulation.Modules
{
    public class AirQualitySimulationModule : ISimulatorModule
    {
        private readonly Random _rng = new();

        // In a real SaaS, this could be toggled via Feature Flags or Config
        public bool IsEnabled => true;

        // Less frequently than traffic
        public TimeSpan Interval => TimeSpan.FromSeconds(30);

        public Task<SensorReadingPayload> GenerateAsync(CancellationToken ct)
        {
            // Simulating AQI (Air Quality Index) values
            // 0-50 is Good, 51-100 is Moderate
            double simulatedAqi = _rng.Next(20, 85);

            return Task.FromResult(new SensorReadingPayload
            {
                Type = (int)MetricType.AirQuality,
                Value = simulatedAqi,
                Location = "Lutakko - Harbour District",
                DeviceId = "AQI-HEL-LUK-04",
                Timestamp = DateTime.UtcNow
            });
        }

    }
}
