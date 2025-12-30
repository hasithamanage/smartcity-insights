using Microsoft.EntityFrameworkCore;
using SmartCity.Application.Interfaces;
using SmartCity.Domain.Entities;
using SmartCity.Infrastructure.Data;

namespace SmartCity.Infrastructure.Repositories
{
    public class CityMetricRepository : ICityMetricRepository
    {
        private readonly SmartCityDbContext _context;

        public CityMetricRepository(SmartCityDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<CityMetric>> GetAllAsync()
        {
            return await _context.CityMetrics.ToListAsync();
        }

        public async Task AddAsync(CityMetric metric)
        {
            _context.CityMetrics.Add(metric);
            await _context.SaveChangesAsync();
        }
    }
}
