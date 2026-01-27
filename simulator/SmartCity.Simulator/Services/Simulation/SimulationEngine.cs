using SmartCity.Simulator.Services.Ingestion;

namespace SmartCity.Simulator.Services.Simulation;

public class SimulationEngine : ISimulationEngine
{
    private readonly IEnumerable<ISimulatorModule> _modules;
    private readonly IMetricIngestionService _ingestionService;
    private readonly ILogger<SimulationEngine> _logger;

    public SimulationEngine(
        IEnumerable<ISimulatorModule> modules,
        IMetricIngestionService ingestionService,
        ILogger<SimulationEngine> logger)
    {
        _modules = modules.Where(m => m.IsEnabled);
        _ingestionService = ingestionService;
        _logger = logger;
    }

    public async Task RunAllAsync(CancellationToken ct)
    {
        _logger.LogInformation("Orchestrating {Count} active simulation modules.", _modules.Count());

        var tasks = _modules.Select(module => Task.Run(() => RunModuleLoop(module, ct), ct));
        await Task.WhenAll(tasks);
    }

    private async Task RunModuleLoop(ISimulatorModule module, CancellationToken ct)
    {
        _logger.LogInformation("Starting simulation module: {ModuleType}", module.GetType().Name);

        while (!ct.IsCancellationRequested)
        {
            try
            {
                var payload = await module.GenerateAsync(ct);
                await _ingestionService.SendMetricAsync(payload, ct);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error in module {Module}", module.GetType().Name);
            }

            await Task.Delay(module.Interval, ct);
        }
    }
}