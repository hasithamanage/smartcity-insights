using SmartCity.Simulator;
using SmartCity.Simulator.Configuration;
using SmartCity.Simulator.Services.Authentication;
using SmartCity.Simulator.Services.Ingestion;
using SmartCity.Simulator.Services.Simulation;
using SmartCity.Simulator.Services.Simulation.Modules;
using Microsoft.Extensions.Http.Resilience;
using Polly;

var builder = Host.CreateApplicationBuilder(args);

// 1. Configuration (Options Pattern)
builder.Services.Configure<SimulatorSettings>(
    builder.Configuration.GetSection("SimulatorSettings"));

// 2. Authentication Infrastructure
builder.Services.AddHttpClient<IAuthenticationService, AuthenticationService>(client =>
{
    var settings = builder.Configuration.GetSection("SimulatorSettings").Get<SimulatorSettings>();
    client.BaseAddress = new Uri(settings?.ApiBaseUrl ?? "https://localhost:7018");
})
.AddStandardResilienceHandler();

// 3. Ingestion Infrastructure with Resilience
builder.Services.AddHttpClient<IMetricIngestionService, MetricIngestionService>(client =>
{
    var settings = builder.Configuration.GetSection("SimulatorSettings").Get<SimulatorSettings>();
    client.BaseAddress = new Uri(settings?.ApiBaseUrl ?? "https://localhost:7018");
})
.AddStandardResilienceHandler(options =>
{
    // Configure standard retry, circuit breaker, and timeout
    options.Retry.MaxRetryAttempts = 3;
    options.Retry.Delay = TimeSpan.FromSeconds(2);
    options.Retry.BackoffType = DelayBackoffType.Exponential; // 2s, 4s, 8s...
});

// 4. Pluggable Simulation Modules
builder.Services.AddSingleton<ISimulatorModule, TrafficSimulationModule>();
builder.Services.AddSingleton<ISimulatorModule, EnergySimulationModule>();
builder.Services.AddSingleton<ISimulatorModule, AirQualitySimulationModule>();

// 5. Core Engine & Worker
builder.Services.AddSingleton<ISimulationEngine, SimulationEngine>();
builder.Services.AddHostedService<Worker>();

var host = builder.Build();
host.Run();