namespace SmartCity.Simulator.Models.Payloads
{
    public record SensorReadingPayload
    {
        public int Type { get; init; } // Maps to MetricType Enum
        public double Value { get; init; }
        public string Location { get; init; } = string.Empty;
        public DateTime Timestamp { get; init; } = DateTime.UtcNow;

        // Metadata for analytics (Scale-ready)
        public string DeviceId { get; init; } = string.Empty;
    }
}