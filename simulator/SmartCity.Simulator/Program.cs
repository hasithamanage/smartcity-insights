using SmartCity.Simulator;
using SmartCity.Simulator.Configuration;
using SmartCity.Simulator.Services.Authentication;
using SmartCity.Simulator.Services.Ingestion;
using SmartCity.Simulator.Services.Simulation;
using SmartCity.Simulator.Services.Simulation.Modules;

var builder = Host.CreateApplicationBuilder(args);

// 1. Configuration (Options Pattern)
builder.Services.Configure<SimulatorSettings>(
    builder.Configuration.GetSection("SimulatorSettings"));

// 2. Authentication Infrastructure
// Register as a Typed Client to handle BaseAddress and Lifecycle properly
builder.Services.AddHttpClient<IAuthenticationService, AuthenticationService>(client =>
{
    var settings = builder.Configuration.GetSection("SimulatorSettings").Get<SimulatorSettings>();
    client.BaseAddress = new Uri(settings?.ApiBaseUrl ?? "https://localhost:7018");
});

// 3. Ingestion Infrastructure
builder.Services.AddHttpClient<IMetricIngestionService, MetricIngestionService>(client =>
{
    var settings = builder.Configuration.GetSection("SimulatorSettings").Get<SimulatorSettings>();
    client.BaseAddress = new Uri(settings?.ApiBaseUrl ?? "https://localhost:7018");
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