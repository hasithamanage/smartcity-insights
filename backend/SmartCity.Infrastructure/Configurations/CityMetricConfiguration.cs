using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SmartCity.Domain.Entities;
using SmartCity.Domain.Enums;

namespace SmartCity.Infrastructure.Data.Configurations
{
    public class CityMetricConfiguration : IEntityTypeConfiguration<CityMetric>
    {
        public void Configure(EntityTypeBuilder<CityMetric> builder)
        {
            // Set fixed GUIDs so migrations stay stable
            builder.HasData(
                new CityMetric
                {
                    Id = new Guid("0be4b48b-b3bc-4fa8-8799-6dcb935990e5"),
                    Type = MetricType.Traffic,
                    Value = 72,
                    Location = "Jyväskylä Center",
                    Timestamp = new DateTime(2025, 12, 28, 17, 27, 59, DateTimeKind.Utc)
                },
                new CityMetric
                {
                    Id = new Guid("9646e955-d25b-4684-bff1-e029e179e03a"),
                    Type = MetricType.AirQuality,
                    Value = 41,
                    Location = "Lutakko",
                    Timestamp = new DateTime(2025, 12, 28, 17, 27, 59, DateTimeKind.Utc)
                }
            );
        }
    }
}