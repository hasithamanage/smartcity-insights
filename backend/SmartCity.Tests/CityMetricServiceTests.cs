using Moq;
using SmartCity.Application.DTOs;
using SmartCity.Application.Interfaces;
using SmartCity.Application.Services;
using SmartCity.Domain.Entities;
using SmartCity.Domain.Enums;

namespace SmartCity.Tests
{
    public class CityMetricServiceTests
    {
        private readonly Mock<ICityMetricRepository> _repositoryMock;
        private readonly CityMetricService _service;

        public CityMetricServiceTests()
        {
            // "Mock" the repository so don't need a real database to run tests
            _repositoryMock = new Mock<ICityMetricRepository>();
            _service = new CityMetricService(_repositoryMock.Object);
        }

        [Fact]
        public async Task AddAsync_ShouldThrowException_WhenLocationIsTooShort()
        {
            // Arrange
            var request = new CreateCityMetricRequest
            {
                Location = "Ab", // Too short (min 3)
                Type = MetricType.Traffic,
                Value = 50
            };

            // Act & Assert
            var exception = await Assert.ThrowsAsync<ArgumentException>(() =>
                _service.AddAsync(request));

            Assert.Equal("Location must be at least 3 characters long.", exception.Message);
        }

        [Theory]
        [InlineData(-1)]
        [InlineData(1001)]
        public async Task AddAsync_ShouldThrowException_WhenValueIsOutOfRange(double invalidValue)
        {
            // Arrange
            var request = new CreateCityMetricRequest
            {
                Location = "Valid Location",
                Type = MetricType.Traffic,
                Value = invalidValue
            };

            // Act & Assert
            await Assert.ThrowsAsync<ArgumentException>(() => _service.AddAsync(request));
        }

        [Fact]
        public async Task AddAsync_ShouldReturnResponse_WhenRequestIsValid()
        {
            // Arrange
            var request = new CreateCityMetricRequest
            {
                Location = "Jyväskylä",
                Type = MetricType.Traffic,
                Value = 100
            };

            // Act
            var result = await _service.AddAsync(request);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(request.Location, result.Location);
            Assert.Equal(request.Value, result.Value);

            // Verify that the repository's AddAsync was actually called once
            _repositoryMock.Verify(r => r.AddAsync(It.IsAny<CityMetric>()), Times.Once);
        }
    }
}