using SmartCity.Domain.Enums;

namespace SmartCity.Application.DTOs
{
    public class CityMetricDto
    {
        public MetricType Type { get; set; }
        public double Value { get; set; }
        public string Location { get; set; } = string.Empty;
    }
}
