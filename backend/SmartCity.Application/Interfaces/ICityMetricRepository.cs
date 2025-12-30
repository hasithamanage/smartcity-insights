using SmartCity.Domain.Entities;

namespace SmartCity.Application.Interfaces
{
    public interface ICityMetricRepository
    {
        Task<IEnumerable<CityMetric>> GetAllAsync();
        Task AddAsync(CityMetric metric);
    }
}
