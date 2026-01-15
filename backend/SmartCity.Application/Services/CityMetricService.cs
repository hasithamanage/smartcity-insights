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

        public async Task<IEnumerable<CityMetricResponse>> GetAllAsync()
        {
            var entities = await _repository.GetAllAsync();

            // Map Entity -> Response DTO
            return entities.Select(m => new CityMetricResponse
            {
                Id = m.Id,
                Type = m.Type,
                Value = m.Value,
                Location = m.Location,
                Timestamp = m.Timestamp
            });
        }

        public async Task<CityMetricResponse> AddAsync(CreateCityMetricRequest dto)
        {

            // These are Safety Guards - the API layer should have caught these
            if (dto == null) throw new ArgumentNullException(nameof(dto));


            var metric = new CityMetric
            {
                Id = Guid.NewGuid(),
                Type = dto.Type,
                Value = dto.Value,
                Location = dto.Location,
                Timestamp = DateTime.UtcNow
            };

            await _repository.AddAsync(metric);

            // Return the Response DTO
            return new CityMetricResponse
            {
                Id = metric.Id,
                Type = metric.Type,
                Value = metric.Value,
                Location = metric.Location,
                Timestamp = metric.Timestamp
            };
        }

    }
}
