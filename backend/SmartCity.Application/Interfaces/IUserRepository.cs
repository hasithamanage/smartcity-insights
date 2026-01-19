using SmartCity.Domain.Entities;

namespace SmartCity.Application.Interfaces
{
    public interface IUserRepository
    {
        Task<User?> GetByUsernameAsync(string username);
        // Add CreateAsync later when build Register page
    }
}