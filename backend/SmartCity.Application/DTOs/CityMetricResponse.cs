using SmartCity.Domain.Enums;

namespace SmartCity.Application.DTOs
{
    public class CityMetricResponse
    {
        public Guid Id { get; set; }
        public MetricType Type { get; set; }
        public double Value { get; set; }
        public DateTime Timestamp { get; set; }
        public string Location { get; set; } = string.Empty;
    }
}