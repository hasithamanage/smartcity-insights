namespace SmartCity.Simulator.Configuration
{
    public class SimulatorSettings
    {
        public string ApiBaseUrl { get; set; } = string.Empty;
        public string AdminUsername { get; set; } = string.Empty;
        public string AdminPassword { get; set; } = string.Empty;
        public int DataIntervalSeconds { get; set; } = 5;
    }
}