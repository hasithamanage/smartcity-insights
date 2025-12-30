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
        public async Task<IActionResult> Get()
        {
            var metrics = await _service.GetAllAsync();
            return Ok(metrics);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CityMetricDto dto)
        {
            await _service.AddAsync(dto);
            return Ok();
        }
    }
}
