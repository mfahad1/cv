# Muhammad Fahad Azhar - Portfolio Website

## Overview

This is a personal portfolio website for Muhammad Fahad Azhar, a Senior Full-Stack & AI Engineer with 8+ years of experience. The application is built as a single-page React application showcasing professional experience, skills, projects, and contact information. The site features a modern, responsive design with dark/light theme support and smooth scrolling navigation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional UI components
- **State Management**: React Query (TanStack Query) for server state management and local React state for UI interactions
- **Theme System**: Custom theme provider supporting dark/light modes with CSS variables
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Architecture Pattern**: RESTful API design with route-based organization
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be easily swapped for database persistence
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development Setup**: Hot reload and development middleware integration

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe query building
- **Schema Management**: Centralized schema definitions in shared directory for type consistency
- **Migration System**: Drizzle Kit for database schema migrations and management
- **Current Implementation**: In-memory storage for development with database schema ready for production

### Authentication and Authorization
- **Current State**: Basic user schema defined with username/password fields
- **Future Ready**: Structured for session management and authentication middleware implementation
- **Security**: Password hashing and session storage patterns prepared

### UI Component System
- **Design System**: shadcn/ui components with Radix UI primitives
- **Theming**: CSS custom properties for consistent color schemes and dark mode support
- **Typography**: Inter font family for modern, professional appearance
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Accessibility**: Radix UI components provide built-in accessibility features

### Development Workflow
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared code
- **Code Organization**: Monorepo structure with shared types and utilities
- **Asset Management**: Vite-based asset pipeline with optimized bundling
- **Development Tools**: Hot module replacement, error overlays, and development logging

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database service for production data storage
- **Connection Management**: Environment-based database URL configuration

### UI and Styling Libraries
- **Radix UI**: Headless component primitives for accessible, customizable UI components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling and responsive design
- **Lucide React**: Modern icon library for consistent iconography
- **class-variance-authority**: Utility for creating component variants with conditional styling

### Development and Build Tools
- **Vite**: Modern build tool with fast HMR and optimized production builds
- **ESBuild**: Fast bundler for server-side code compilation
- **PostCSS**: CSS processing for Tailwind compilation and autoprefixing

### React Ecosystem
- **React Hook Form**: Form handling with validation and performance optimization
- **React Query**: Server state management and caching
- **Wouter**: Lightweight routing solution for single-page application navigation

### Utility Libraries
- **date-fns**: Date manipulation and formatting utilities
- **clsx**: Conditional className utility for dynamic styling
- **nanoid**: Unique ID generation for components and data

### Fonts and External Resources
- **Google Fonts**: Inter font family for professional typography
- **Replit Integration**: Development environment integration for seamless cloud development