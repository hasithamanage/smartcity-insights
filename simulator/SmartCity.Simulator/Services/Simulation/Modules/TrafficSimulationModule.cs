using SmartCity.Domain.Enums;
using SmartCity.Simulator.Models.Payloads;

namespace SmartCity.Simulator.Services.Simulation.Modules
{
    public class TrafficSimulationModule : ISimulatorModule
    {
        private readonly Random _rng = new();
        public bool IsEnabled => true;
        public TimeSpan Interval => TimeSpan.FromSeconds(5); // High frequency

        public Task<SensorReadingPayload> GenerateAsync(CancellationToken ct)
        {
            return Task.FromResult(new SensorReadingPayload
            {
                Type = (int)MetricType.Traffic,
                Value = _rng.Next(10, 120), // Simulated vehicle count
                Location = "Jyväskylä - Vapaudenkatu",
                DeviceId = "TRF-JJKL-001"
            });
        }
    }
}