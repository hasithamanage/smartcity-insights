using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SmartCity.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class SeedCityMetrics : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "CityMetrics",
                columns: new[] { "Id", "Location", "Timestamp", "Type", "Value" },
                values: new object[,]
                {
                    { new Guid("0be4b48b-b3bc-4fa8-8799-6dcb935990e5"), "Jyväskylä Center", new DateTime(2025, 12, 28, 17, 27, 59, 683, DateTimeKind.Utc).AddTicks(3731), 1, 72.0 },
                    { new Guid("9646e955-d25b-4684-bff1-e029e179e03a"), "Lutakko", new DateTime(2025, 12, 28, 17, 27, 59, 683, DateTimeKind.Utc).AddTicks(3734), 2, 41.0 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "CityMetrics",
                keyColumn: "Id",
                keyValue: new Guid("0be4b48b-b3bc-4fa8-8799-6dcb935990e5"));

            migrationBuilder.DeleteData(
                table: "CityMetrics",
                keyColumn: "Id",
                keyValue: new Guid("9646e955-d25b-4684-bff1-e029e179e03a"));
        }
    }
}
