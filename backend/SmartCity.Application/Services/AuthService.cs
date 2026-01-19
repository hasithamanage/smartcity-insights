using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SmartCity.Application.DTOs;
using SmartCity.Application.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SmartCity.Application.Services
{
    public class AuthService : IAuthService
    {
        private readonly IConfiguration _config;
        private readonly IUserRepository _userRepository;

        public AuthService(IConfiguration config, IUserRepository userRepository)
        {
            _config = config;
            _userRepository = userRepository;
        }

        public async Task<AuthResponse?> AuthenticateAsync(LoginRequest request)
        {
            // 1. Find user via Repository 
            var user = await _userRepository.GetByUsernameAsync(request.Username);

            // 2. Verify password hash
            if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash))
                return null;

            // 3. Generate JWT
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, user.Role),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var expires = DateTime.UtcNow.AddHours(2);

            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims: claims,
                expires: expires,
                signingCredentials: credentials);

            return new AuthResponse(
                new JwtSecurityTokenHandler().WriteToken(token),
                user.Username,
                expires);
        }


    }
}