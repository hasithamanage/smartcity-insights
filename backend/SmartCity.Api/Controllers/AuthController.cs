using Microsoft.AspNetCore.Mvc;
using SmartCity.Application.DTOs;
using SmartCity.Application.Interfaces;

namespace SmartCity.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<AuthResponse>> Login([FromBody] LoginRequest request)
        {
            var response = await _authService.AuthenticateAsync(request);

            if (response == null)
            {
                // Return the exact same shape as Middleware: { "error": "message" }
                return Unauthorized(new { error = "Invalid username or password" });
            }

            return Ok(response);
        }
    }
}