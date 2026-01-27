namespace SmartCity.Simulator.Services.Simulation
{
    public interface ISimulationEngine
    {
        Task RunAllAsync(CancellationToken ct);
    }
}