using SmartCity.Application.DTOs;

namespace SmartCity.Application.Services
{
    public interface ICityMetricService
    {
        // Return the Response DTO
        Task<IEnumerable<CityMetricResponse>> GetAllAsync();
        // Accept the Request DTO
        Task<CityMetricResponse> AddAsync(CreateCityMetricRequest dto);
    }
}
