using Microsoft.EntityFrameworkCore;
using SmartCity.Domain.Entities;
using SmartCity.Infrastructure.Data.Configurations; 

namespace SmartCity.Infrastructure.Data
{
    public class SmartCityDbContext : DbContext
    {
        public SmartCityDbContext(DbContextOptions<SmartCityDbContext> options)
            : base(options) { }

        public DbSet<CityMetric> CityMetrics => Set<CityMetric>();
        public DbSet<User> Users => Set<User>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Automatically applies all configurations in this assembly
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(SmartCityDbContext).Assembly);
        }
    }
}