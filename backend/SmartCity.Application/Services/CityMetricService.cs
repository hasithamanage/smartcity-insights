using SmartCity.Application.DTOs;
using SmartCity.Application.Interfaces;
using SmartCity.Domain.Entities;

namespace SmartCity.Application.Services
{
    public class CityMetricService : ICityMetricService
    {
        private readonly ICityMetricRepository _repository;

        public CityMetricService(ICityMetricRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<CityMetric>> GetAllAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task AddAsync(CityMetricDto dto)
        {
            if (string.IsNullOrWhiteSpace(dto.Location) || dto.Location.Length < 3)
                throw new ArgumentException("Location must be at least 3 characters long.");

            if (dto.Value < 0 || dto.Value > 1000)
                throw new ArgumentException("Metric value must be between 0 and 1000.");

            var metric = new CityMetric
            {
                Id = Guid.NewGuid(),
                Type = dto.Type,
                Value = dto.Value,
                Location = dto.Location,
                Timestamp = DateTime.UtcNow
            };

            await _repository.AddAsync(metric);
        }

    }
}
