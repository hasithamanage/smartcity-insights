using Microsoft.EntityFrameworkCore;
using SmartCity.Domain.Entities;

namespace SmartCity.Infrastructure.Data
{
    public class SmartCityDbContext : DbContext
    {
        public SmartCityDbContext(DbContextOptions<SmartCityDbContext> options)
            : base(options)
        {
        }

        public DbSet<CityMetric> CityMetrics => Set<CityMetric>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CityMetric>().HasData(
                new CityMetric
                {
                    Id = Guid.NewGuid(),
                    Type = Domain.Enums.MetricType.Traffic,
                    Value = 72,
                    Location = "Jyväskylä Center",
                    Timestamp = DateTime.UtcNow
                },
                new CityMetric
                {
                    Id = Guid.NewGuid(),
                    Type = Domain.Enums.MetricType.AirQuality,
                    Value = 41,
                    Location = "Lutakko",
                    Timestamp = DateTime.UtcNow
                }
            );
        }


    }
}
