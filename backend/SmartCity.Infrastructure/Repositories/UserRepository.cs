using Microsoft.EntityFrameworkCore;
using SmartCity.Application.Interfaces;
using SmartCity.Domain.Entities;
using SmartCity.Infrastructure.Data;

namespace SmartCity.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly SmartCityDbContext _context;

        public UserRepository(SmartCityDbContext context)
        {
            _context = context;
        }

        public async Task<User?> GetByUsernameAsync(string username)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Username == username);
        }
    }
}