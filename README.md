# Full-Stack Cloud-Hosted Smart Sanitation Monitoring & Management System

An IoT-enabled full-stack Smart Sanitation Monitoring & Management System designed for centralized monitoring and management of public sanitation facilities.

The system integrates ESP32-based sensor nodes, LoRa communication, Node.js, MongoDB, cloud-ready services, and a React-based web dashboard to monitor environmental conditions, water usage, occupancy, and overall facility status.

---

## 📌 Project Overview

Public sanitation facilities require continuous monitoring to ensure cleanliness, water availability, proper facility usage, and a healthy environment.

This project provides a centralized smart monitoring platform that collects data from multiple sensors deployed at sanitation facilities and presents the information through a web-based dashboard.

The system is designed to support multi-block monitoring and help authorities identify issues that may require maintenance, cleaning, or further inspection.

---

## 🎯 Problem Statement

Traditional sanitation facility monitoring often requires manual inspection, making it difficult to continuously track:

- Harmful gas levels and air quality
- Water availability and consumption
- Water tank levels
- Facility usage and occupancy
- Sensor connectivity and system health
- Sanitation conditions across multiple locations

This project aims to provide a centralized IoT-based monitoring system to improve visibility and support efficient sanitation management.

---

## 🚀 Key Features

- Real-time sanitation facility monitoring
- Multi-block and zone-wise monitoring
- Gas and air quality monitoring using MQ137
- Water flow and consumption monitoring using YF-S401
- Water level monitoring using an Ultrasonic sensor
- Human presence and facility usage monitoring using a PIR sensor
- ESP32-based IoT sensor nodes
- LoRa-based long-range communication
- Full-stack web dashboard
- Sensor connectivity and health status monitoring
- Alerts for abnormal conditions
- Reports and analytics
- Public and staff-based system access
- Sensor datasheet integration

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS

### Backend

- Node.js
- Express.js

### Database

- MongoDB

### Hardware & IoT

- ESP32
- LoRa Communication
- MQ137 Gas Sensor
- YF-S401 Water Flow Sensor
- Ultrasonic Water Level Sensor
- PIR Motion Sensor

---

## 📡 Sensors Used

| Sensor | Purpose |
|--------|---------|
| MQ137 Gas Sensor | Monitors harmful gas levels and air quality |
| YF-S401 Water Flow Sensor | Measures water flow and consumption |
| Ultrasonic Sensor | Monitors water level in the tank |
| PIR Motion Sensor | Detects human presence and facility usage |

---

## 🏗️ System Architecture

```text
┌──────────────────────────────┐
│        SENSOR LAYER          │
│                              │
│  MQ137 Gas Sensor            │
│  YF-S401 Water Flow Sensor   │
│  Ultrasonic Sensor           │
│  PIR Motion Sensor           │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       ESP32 SENSOR NODE      │
│                              │
│     Sensor Data Collection   │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│      LoRa COMMUNICATION      │
│                              │
│   Long Range Data Transfer   │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│        BACKEND SERVER        │
│                              │
│       Node.js + Express      │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       MongoDB DATABASE       │
│                              │
│ Sensor Data • Alerts • Zones │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│      REACT WEB DASHBOARD     │
│                              │
│ Monitoring • Reports         │
│ Analytics • Management       │
└──────────────────────────────┘
```

---

## 🧩 System Modules

### Public Portal

The public portal provides access to:

- Project information
- About the system
- Technologies and sensors used
- Sensor datasheets
- Selected public monitoring information

### Staff Monitoring Portal

Authorized staff can access detailed monitoring and management features, including:

- Live monitoring
- Block and zone information
- Detailed sensor data
- Sensor connectivity status
- Alerts
- Reports
- Analytics
- Maintenance information

---

## 📊 Dashboard Capabilities

The monitoring dashboard provides:

- Real-time block-wise monitoring
- Sensor connectivity status
- Gas and air quality monitoring
- Water level monitoring
- Water flow monitoring
- PIR-based facility usage monitoring
- Zone-wise sanitation status
- Alerts for abnormal conditions
- Historical reports and analytics

---

## 📂 Project Structure

```text
smart-sanitation-monitoring-system/
│
├── frontend/
│   ├── public/
│   │   └── Datasheets/
│   │
│   └── src/
│       ├── components/
│       ├── pages/
│       └── data/
│
├── backend/
│   └── src/
│       ├── controllers/
│       ├── routes/
│       └── services/
│
└── README.md
```

---

## 🔌 Backend Services

The backend is responsible for:

- Receiving and processing sensor data
- Providing real-time sensor data to the monitoring dashboard
- Managing sanitation blocks and zones
- Monitoring sensor connectivity and system status
- Supporting alerts and maintenance-related information
- Communicating with the MongoDB database

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/omkar2776/smart-sanitization-monitoring-system.git
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### 3. Backend Setup

```bash
cd backend
npm install
npm start
```

---

## 🎯 Key Use Cases

- Remote monitoring of public sanitation facilities
- Detection of harmful gas conditions
- Monitoring water availability and consumption
- Tracking facility usage
- Identifying abnormal sensor conditions
- Supporting efficient sanitation management
- Providing centralized monitoring for municipal authorities

---

## 🔮 Future Enhancements

- Secure authentication and role-based access control
- MQTT-based real-time communication
- Automated email and SMS alerts
- Predictive cleaning recommendations
- Machine learning-based sanitation analysis
- Mobile application for staff monitoring
- Integration with additional sanitation facilities

---

## 🖥️ Screenshots

Dashboard screenshots and system interface images will be added here.

---

## 👨‍💻 Author

**Omkar Jagadale**  
Electronics Engineering Student  
MIT Academy of Engineering (MITAOE), Alandi, Pune

---

## 🚧 Project Status

Currently under active development.

The system currently includes IoT sensor integration, LoRa-based communication, backend services, MongoDB integration, and a React-based monitoring dashboard. Deployment and additional access-control features are currently being implemented.

---

## 📄 License

This project is developed for academic and educational purposes.

---

⭐ If you find this project useful, consider giving the repository a star.
