# SmartCity Insights

A cloud-ready fullstack application for monitoring and analyzing city data including traffic, energy consumption and environmental metrics.

## 📋 Overview

SmartCity Insights is a modern, scalable solution designed to help city administrators and urban planners make data-driven decisions. The platform provides real-time monitoring and analytics for critical city infrastructure and environmental parameters.

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
| **Frontend** | `Vite`, `React 18`, `TypeScript` | **Modular Component Architecture**, Custom Hooks, State Management |
| **Backend** | `.NET 8`, `ASP.NET Core Web API` | **Clean Architecture**, Global Middleware, DTO-driven Contracts |
| **Data & Persistence** | `SQL Server`, `EF Core` | Repository Pattern, Code-First Migrations, Database Seeding |
| **Security & Quality** | `Data Annotations`, `Middleware` | Request Validation, Error Handling, Secure API Surface |
| **Environment** | `Docker`, `Azure` | Containerization & Cloud-native development |

## ▶️ Getting Started

### Prerequisites

- .NET 6.0 or higher
- Node.js 16+
- Docker (optional, for containerized deployment)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hasithamanage/smartcity-insights.git
   cd smartcity-insights
   ```

2. **Backend Setup**
   ```bash
   cd backend
   dotnet restore
   dotnet build
   dotnet run
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm start
   ```

## 📦 Project Structure

```
smartcity-insights/
├── backend/          # C# ASP.NET Core application
├── frontend/         # TypeScript/React application
├── docker/           # Docker configuration
└── README.md        
```

## 🔧 Configuration

Update the configuration files as needed for your environment:

- Backend:  `appsettings.json`
- Frontend: `.env` file

## ☁️ Deployment

### Docker Deployment

```bash
docker build -t smartcity-insights .  
docker run -p 8080:8080 smartcity-insights
```

### Cloud Deployment

This application is optimized for deployment on:  
- Azure App Service
- AWS Elastic Container Service (ECS)
- Google Cloud Run
- Kubernetes clusters

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

API endpoints are documented in the backend.  Access the Swagger/OpenAPI documentation at: 
```
http://localhost:5000/swagger
```

## ⚠️ Known Issues

This project is currently under active development. Please refer to the [Issues](https://github.com/hasithamanage/smartcity-insights/issues) section for known bugs and planned features.

## </> Contributing

Welcome contributions!  Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

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