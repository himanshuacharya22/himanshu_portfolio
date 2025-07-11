# Professional Resume Website

## Overview

This is a modern, professional resume website for Himanshu Acharya, a Computer Applications graduate specializing in backend development and GenAI technologies. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a sleek dark theme with glassmorphism effects and interactive animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom dark theme and glassmorphism effects
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and interactive elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints with structured routing
- **Validation**: Zod for request/response validation
- **Development**: Hot reloading with Vite integration in development mode

### Design System
- **Theme**: Dark theme with custom CSS variables
- **Colors**: Navy/charcoal primary with electric blue and cyan accents
- **Typography**: Inter font family for modern, clean appearance
- **Components**: Modular component architecture with glassmorphism cards
- **Responsive**: Mobile-first responsive design

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scroll spy functionality
2. **Hero Section**: Animated introduction with typewriter effects
3. **About**: Personal summary with animated statistics cards
4. **Experience**: Professional work history with project highlights
5. **Education**: Academic background with achievements
6. **Projects**: Filterable portfolio with category-based filtering
7. **Research**: Published research papers and publications
8. **Skills**: Interactive skill bars with proficiency levels
9. **Certifications**: Professional certifications display
10. **Awards**: Recognition and achievements showcase
11. **Contact**: Interactive contact form with validation

### Backend Routes
- **POST /api/contact**: Contact form submission endpoint with validation
- **Static serving**: Vite-integrated static file serving in development

### Custom UI Components
- **GlassmorphismCard**: Reusable card component with glass effect
- **ProjectCard**: Portfolio project display with interactive elements
- **SkillBar**: Animated progress bars for technical skills
- **Navigation**: Responsive navigation with mobile menu

## Data Flow

### Frontend Data Flow
1. User interactions trigger component state updates
2. Form submissions use React Hook Form with Zod validation
3. API calls managed through TanStack React Query
4. Animations controlled by Framer Motion with scroll-based triggers
5. Responsive design adapts based on viewport size

### Backend Data Flow
1. Express middleware handles request logging and error handling
2. Route handlers validate input using Zod schemas
3. Contact form submissions are processed and logged
4. Static assets served through Vite in development, direct serving in production

### Component Communication
- Parent-child component communication through props
- Form state managed through React Hook Form
- Global state minimal, focused on UI interactions
- Custom hooks for scroll spy and mobile detection

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Database connectivity (PostgreSQL)
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **wouter**: Lightweight routing
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives (30+ components)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React application to `dist/public`
2. **Backend**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Development Workflow
- **Dev Server**: `npm run dev` starts development server with hot reloading
- **Type Checking**: `npm run check` validates TypeScript across all modules
- **Database**: Drizzle Kit handles schema management and migrations

### Production Deployment
- **Build**: `npm run build` creates optimized production bundle
- **Start**: `npm start` runs production server
- **Environment**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### GitHub Pages Deployment
- **Entry Point**: `index.html` in root directory for GitHub Pages compatibility
- **Build Script**: `build-static.js` creates static build optimized for GitHub Pages
- **GitHub Actions**: `.github/workflows/deploy.yml` automates deployment on push to main branch
- **Static Files**: Built files output to `dist/public` directory
- **SPA Support**: 404.html file enables client-side routing for single-page application

### Database Schema
- **Users Table**: Basic user management with username/password
- **PostgreSQL**: Production database with connection pooling support
- **Migrations**: Version-controlled schema changes through Drizzle

The application is designed as a comprehensive portfolio website showcasing technical expertise, with a focus on modern web technologies and professional presentation. The modular architecture allows for easy maintenance and feature additions while maintaining performance and user experience.