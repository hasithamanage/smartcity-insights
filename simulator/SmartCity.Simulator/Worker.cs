using SmartCity.Simulator.Services.Simulation;

namespace SmartCity.Simulator
{
    public class Worker : BackgroundService
    {
        private readonly ILogger<Worker> _logger;
        private readonly ISimulationEngine _engine;

        public Worker(ILogger<Worker> logger, ISimulationEngine engine)
        {
            _logger = logger;
            _engine = engine;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("Smart City Simulator Service starting at: {time}", DateTimeOffset.Now);

            try
            {
                // The engine manages the parallel execution of all pluggable modules
                await _engine.RunAllAsync(stoppingToken);
            }
            catch (OperationCanceledException)
            {
                _logger.LogWarning("Simulator service is shutting down gracefully.");
            }
            catch (Exception ex)
            {
                _logger.LogCritical(ex, "A fatal error occurred in the simulation orchestrator.");
                // if want restart the service or alert an on-call engineer here
            }
        }
    }
}