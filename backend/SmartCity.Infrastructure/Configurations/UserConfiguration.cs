using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SmartCity.Domain.Entities;

namespace SmartCity.Infrastructure.Data.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasData(new User
            {
                
                Id = Guid.Parse("f2a8b3bc-4fa8-4799-9dcb-935990e6f2a8"),
                Username = "admin",
                PasswordHash = BCrypt.Net.BCrypt.HashPassword("P@ssword123"),
                Role = "Admin"
            });
        }
    }
}