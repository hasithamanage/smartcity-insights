using Microsoft.AspNetCore.Mvc;
using SmartCity.Application.DTOs;
using SmartCity.Application.Services;

namespace SmartCity.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CityMetricsController : ControllerBase
    {
        private readonly ICityMetricService _service;

        public CityMetricsController(ICityMetricService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CityMetricResponse>>> Get()
        {
            var metrics = await _service.GetAllAsync();
            return Ok(metrics);
        }

        [HttpPost]
        public async Task<ActionResult<CityMetricResponse>> Post([FromBody] CreateCityMetricRequest dto)
        {
            
            // 400 Bad Request automatically based on DTO attributes
            var result = await _service.AddAsync(dto);
            return CreatedAtAction(nameof(Get), new { id = result.Id }, result);
        }

    }
}
