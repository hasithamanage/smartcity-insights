using SmartCity.Application.DTOs;
using SmartCity.Domain.Entities;

namespace SmartCity.Application.Services
{
    public interface ICityMetricService
    {
        Task<IEnumerable<CityMetric>> GetAllAsync();
        Task AddAsync(CityMetricDto dto);
    }
}
