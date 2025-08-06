# Java-React Full Stack Web Application

## Overview
This project implements a modern web application using Java (Spring Boot) for the backend and React for the frontend. The stack includes a RESTful API service with a single-page application frontend that handles user authentication, data management, and real-time features.

## Technology Stack

### Backend (Java)
- **Framework** - Spring Boot 3.1.5
- **Database** - PostgreSQL with Hibernate ORM
- **Security** - Spring Security with JWT authentication
- **API** - RESTful endpoints with JSON payloads
- **Build** - Maven

### Frontend (React)
- **Framework** - React 18 with functional components and hooks
- **State Management** - Redux Toolkit with RTK Query
- **Routing** - React Router 6
- **UI Components** - Material UI with custom theme
- **Build** - Vite with TypeScript

## Key Features

1. **User Authentication**
   - JWT-based login/logout
   - Role-based authorization
   - Password reset functionality

2. **Data Management**
   - CRUD operations for core entities
   - Pagination and sorting
   - Complex queries with filtering

3. **Real-time Features**
   - WebSocket notifications
   - Live updates via Server-Sent Events
   - Activity tracking

4. **Advanced Features**
   - File upload/download
   - Data export to Excel/PDF
   - Scheduled tasks and reports

## Development Environment Setup

### Prerequisites
- Java 17 JDK
- Node.js 18+
- PostgreSQL 14+
- Docker (optional)

### Backend Setup
1. Configure database in application.properties
2. Run:
