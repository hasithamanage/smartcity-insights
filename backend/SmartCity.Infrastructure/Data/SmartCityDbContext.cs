using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
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

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // This suppresses the "Pending Model Changes" warning caused by EF 10's strictness
            optionsBuilder.ConfigureWarnings(w => w.Ignore(RelationalEventId.PendingModelChangesWarning));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Automatically applies all configurations in this assembly
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(SmartCityDbContext).Assembly);
        }
    }
}