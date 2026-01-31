# Jyväskylä SmartCity Insights

A cloud-ready fullstack application for monitoring and analyzing city data including traffic, energy consumption and environmental metrics.

## 📋 The state of the city at a glance

Jyväskylä SmartCity Insights, which displays the current state of the city and its most critical processes at a glance. It is based on the three key elements for any smart city: energy transition, living environment and transport. The platform provides real-time monitoring and analytics for critical city infrastructure and environmental parameters.

## ✔️ Features

- **Real-time Traffic Monitoring**:  Track vehicle flow, congestion levels and optimize traffic management
- **Energy Management**: Monitor energy consumption across city infrastructure
- **Environmental Tracking**: Track air quality, noise levels and other environmental metrics
- **Cloud-Ready Architecture**: Built for deployment on modern cloud platforms
- **Responsive Dashboard**:  Full-featured web interface for data visualization
- **API-Driven Design**: RESTful APIs for seamless data integration

## ⚙️ Technology Stack

The project is built with a modern fullstack architecture:  

| Category | Technologies | Focus |
|:---|:---|:---|
| **Frontend** | `Vite`, `React 18`, `TypeScript` | **Domain Driven Architecture**, Custom Hooks, Context API, SaaS UI/UX |
| **Backend** | `.NET 8`, `ASP.NET Core Web API` | **Clean Architecture**, Global Middleware, DTO-driven Contracts |
| **Simulator** | `.NET 9 Worker Service`, `Polly` | **IoT Ingestion Simulation**, Resilience Policies, Parallel Orchestration |
| **Data & Persistence** | `SQL Server`, `EF Core` | Repository Pattern, Code-First Migrations, Database Seeding |
| **Security & Quality** | `Data Annotations`, `Middleware` | Request Validation, Error Handling, Secure API Surface |
| **Environment** | `Docker`, `Azure` | Containerization & Cloud-native development |

## ▶️ Getting Started

### Prerequisites

- .NET 8.0 SDK (Required for Backend and Simulator)
- Node.js 20+ (Recommended for React 19/Vite)
- Docker (optional for containerized deployment)
- Git

### Installation 

1. **Clone the repository**
   ```bash
   git clone https://github.com/hasithamanage/smartcity-insights.git
   cd smartcity-insights
   ```

2. **Backend Infrastructure:** The backend provides the API and identity management.
   ```bash
   cd backend/SmartCity.API
   dotnet restore
   dotnet run
   # API will be available at https://localhost:7018
   ```

3. **Frontend Dashboard:** Built with React and Vite. Ensure you have your `.env` file configured with `VITE_API_BASE_URL=https://localhost:7018`.

   ```bash
   cd frontend/smartcity-dashboard
   npm install
   npm run dev
   # App will be available at http://localhost:5174
   ```

4. **IoT Simulator (Optional):** To generate live city metrics, run the background worker.

   ```bash
   cd backend/SmartCity.Simulator
   dotnet run
   ```

## 📦 Project Structure

```
smartcity-insights/
├── backend/                   # .NET 8 Clean Architecture Solution
│   ├── SmartCity.API/         # Controllers & Middleware
│   ├── SmartCity.Application/ # Service Interfaces & Business Logic
│   ├── SmartCity.Domain/      # Shared Entities & MetricType Enums
│   └── SmartCity.Infrastructure/ # Data Persistence (EF Core)
├── frontend/                  # React (Vite) + TypeScript
│   ├── src/api/               # Axios clients & Ingestion Services
│   ├── src/context/           # Auth & State Management
│   └── src/navigation/        # AppRouter & Auth Gates
├── simulator/                 # .NET 9 Worker Service (IoT Stimulator)
│   ├── Modules/               # Sensor logic (Traffic, Air, Energy)
│   └── Services/              # Resilience-hardened Ingestion
├── docker/                    # Multi-container orchestration
└── README.md     
```

## 🔧 Configuration

Update the configuration files as needed for your environment:

- Backend:  `appsettings.json`
- Frontend: `.env` file

## ☁️ Deployment

### Docker Deployment

Currently, the frontend dashboard is containerized. The backend and simulator are run locally for development.

```bash
docker build -t smartcity-frontend .  
```

### Cloud Deployment

The **smartcity-insights** ecosystem is architected for a "Cloud Native" approach, utilizing containerization for environment parity.

**Current Readiness:**
- **Dockerized:** Multi-stage Dockerfiles for both Frontend and Backend.
- **Stateless:** The API and Simulator utilize external configuration (Environment Variables), making them compatible with orchestrators.

**Deployment Targets:**
- **Azure:** Optimized for Web App for Containers & Azure SQL.
- **AWS:** Compatible with ECS/Fargate for serverless container execution.
- **On-Prem/Hybrid:** Kubernetes-ready using Helm charts (Future).

## 📊 Data Sources

The application monitors:  
- **Traffic Data**: Vehicle counts, average speeds, congestion indices
- **Energy Metrics**: Power consumption, grid status, renewable energy sources
- **Environmental Data**: Air quality index (AQI), temperature, humidity, noise levels

## 🔒 Security

- Input validation on all endpoints
- Secure API authentication (to be configured)
- HTTPS enforcement in production
- Data encryption at rest and in transit

## 📝 API Documentation

The **smartcity-insights** backend exposes a fully interactive OpenAPI/Swagger UI. This allows you to test the `CityMetrics` and `Auth` endpoints directly from the browser.

```
http://localhost:7018/swagger
```

## ⚠️ Known Issues

This project is currently under active development. Please refer to the [Issues](https://github.com/hasithamanage/smartcity-insights/issues) section for known bugs and planned features.

## </> Contributing

Welcome contributions!  Please follow these steps:

### 1. Find or Create an Issue
Before starting any work, please ensure there is an open **Issue** describing the feature or bug. This prevents duplicate work and ensures architectural alignment.

### 2. Standard Workflow
1. **Fork** the repository.
2. **Create a branch** using a naming convention:
   - `feature/issue-number-short-description`
   - `fix/issue-number-bug-name`
3. **Commit** using [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat: add real-time traffic sensor logic`
   - `fix: resolve auth token expiry race condition`
4. **Push** to your fork and open a **Pull Request**.

### 3. Pull Request Requirements
- Reference the issue number in the description (e.g: `Fixes #12`).
- Ensure all TypeScript and .NET projects build without errors.
- Follow the established project structure (Logic in Hooks/Services, UI in Components).


## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details. 


## ➡️ Roadmap

- [ ] Real-time data streaming integration
- [ ] Advanced analytics and ML predictions
- [ ] Mobile application
- [ ] Multi-language support
- [ ] Enhanced visualization dashboards

---

**Last Updated**: January 2026