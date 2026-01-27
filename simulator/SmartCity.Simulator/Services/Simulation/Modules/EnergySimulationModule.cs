using SmartCity.Domain.Enums;
using SmartCity.Simulator.Models.Payloads;

namespace SmartCity.Simulator.Services.Simulation.Modules
{ 
    public class EnergySimulationModule : ISimulatorModule
    {
        private readonly Random _rng = new();
        public bool IsEnabled => true;
        public TimeSpan Interval => TimeSpan.FromMinutes(1); // Lower frequency

        public Task<SensorReadingPayload> GenerateAsync(CancellationToken ct)
        {
            return Task.FromResult(new SensorReadingPayload
            {
                Type = (int)MetricType.Energy,
                Value = 450.5 + _rng.NextDouble() * 50, // Simulated kWh
                Location = "Lutakko District",
                DeviceId = "NRG-LUT-99"
            });
        }
    }
}
