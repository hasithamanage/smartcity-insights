using System.ComponentModel.DataAnnotations;
using SmartCity.Domain.Enums;

namespace SmartCity.Application.DTOs
{
    public class CreateCityMetricRequest
    {
        [Required]
        [EnumDataType(typeof(MetricType))]
        public MetricType Type { get; set; }

        [Range(0, 1000, ErrorMessage = "Value must be between 0 and 1000.")]
        public double Value { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 3, ErrorMessage = "Location must be between 3 and 100 characters.")]
        public string Location { get; set; } = string.Empty;
    }
}