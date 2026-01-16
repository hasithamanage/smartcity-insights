using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartCity.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class RefactorSeedToConfiguration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "CityMetrics",
                keyColumn: "Id",
                keyValue: new Guid("0be4b48b-b3bc-4fa8-8799-6dcb935990e5"),
                column: "Timestamp",
                value: new DateTime(2025, 12, 28, 17, 27, 59, 0, DateTimeKind.Utc));

            migrationBuilder.UpdateData(
                table: "CityMetrics",
                keyColumn: "Id",
                keyValue: new Guid("9646e955-d25b-4684-bff1-e029e179e03a"),
                column: "Timestamp",
                value: new DateTime(2025, 12, 28, 17, 27, 59, 0, DateTimeKind.Utc));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "CityMetrics",
                keyColumn: "Id",
                keyValue: new Guid("0be4b48b-b3bc-4fa8-8799-6dcb935990e5"),
                column: "Timestamp",
                value: new DateTime(2025, 12, 28, 17, 27, 59, 683, DateTimeKind.Utc).AddTicks(3731));

            migrationBuilder.UpdateData(
                table: "CityMetrics",
                keyColumn: "Id",
                keyValue: new Guid("9646e955-d25b-4684-bff1-e029e179e03a"),
                column: "Timestamp",
                value: new DateTime(2025, 12, 28, 17, 27, 59, 683, DateTimeKind.Utc).AddTicks(3734));
        }
    }
}
