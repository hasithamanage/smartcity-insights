using SmartCity.Simulator.Models.Payloads;

namespace SmartCity.Simulator.Services.Simulation
{
    public interface ISimulatorModule
    {
        // Allows the orchestrator to check if this sensor is active (e.g., via config)
        bool IsEnabled { get; }

        // How often this specific sensor ticks (e.g., Traffic every 5s, Energy every 60s)
        TimeSpan Interval { get; }

        // The logic to generate the next data packet
        Task<SensorReadingPayload> GenerateAsync(CancellationToken ct);
    }
}