# Personal Website - yaseenmohamed.me

## Overview

A minimalist personal landing page featuring an elegant "coming soon..." message with interactive, physics-based animations. The project emphasizes clean design principles inspired by Apple's aesthetic, with playful hover interactions and smooth transitions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing
- Single-page application architecture with minimal routing (primarily the home page)

**Styling System**
- **Tailwind CSS** with custom configuration for design tokens
- **shadcn/ui** component library (New York style variant) for consistent UI components
- Custom CSS variables system for theming with light mode as primary
- Design system follows 8/16/24 spacing units for consistent layout

**Animation & Interaction**
- **Framer Motion** for physics-based animations and micro-interactions
- Spring physics configuration (tension: 300, friction: 10) for bouncy letter animations
- Individual letter hover states with glow effects and vertical translations
- Staggered entrance animations with 0.03s delay between letters

**Component Architecture**
- Functional components with React hooks
- Reusable UI components from shadcn/ui in `client/src/components/ui/`
- Custom components: `BouncyText` (interactive letter animations), `AnimatedBackground` (gradient blobs)
- Path aliases configured via TypeScript for clean imports (@/, @shared/, @assets/)

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript
- Development and production environments separated via NODE_ENV
- Custom Vite middleware integration for development with HMR support
- Static file serving for production builds

**Session & State Management**
- In-memory storage implementation via `MemStorage` class
- Interface-based storage design (IStorage) allowing future database integration
- User model with UUID-based identification

**API Design**
- RESTful API structure with `/api` prefix convention
- JSON request/response handling with automatic parsing
- Request logging middleware with performance metrics
- Error handling with status code-based responses

### Data Layer

**Database Schema**
- **Drizzle ORM** configured for PostgreSQL dialect
- Schema defined in `shared/schema.ts` for code sharing between client and server
- User table with UUID primary keys, username, and password fields
- Migration system configured to output to `./migrations` directory
- **Neon Database** serverless PostgreSQL as the database provider

**Validation**
- **Zod** schema validation integrated with Drizzle via `drizzle-zod`
- Type-safe insert schemas derived from database schema
- Shared validation between frontend and backend

### External Dependencies

**Third-Party UI Libraries**
- **Radix UI** primitives for accessible, unstyled component foundation (dialogs, popovers, dropdowns, etc.)
- **Lucide React** for consistent iconography
- **cmdk** for command palette functionality
- **embla-carousel-react** for carousel/slider components
- **react-day-picker** for calendar/date selection
- **recharts** for data visualization
- **vaul** for drawer components

**Database & ORM**
- **@neondatabase/serverless** - Serverless PostgreSQL driver for Neon
- **Drizzle ORM** (v0.39.1) - Type-safe ORM with PostgreSQL support
- **drizzle-kit** - Migration and schema management tooling

**State Management**
- **@tanstack/react-query** (v5.60.5) for server state management and data fetching
- **React Hook Form** with **@hookform/resolvers** for form state and validation

**Development Tools**
- **Replit-specific plugins**: vite-plugin-runtime-error-modal, vite-plugin-cartographer, vite-plugin-dev-banner
- **esbuild** for production server bundling
- **tsx** for TypeScript execution in development
- **PostCSS** with Autoprefixer for CSS processing

**Session Management**
- **express-session** (implied via connect-pg-simple dependency)
- **connect-pg-simple** for PostgreSQL-backed session storage

**Utilities**
- **clsx** and **tailwind-merge** (via custom `cn` utility) for conditional class name composition
- **class-variance-authority** for component variant styling
- **date-fns** for date manipulation and formatting
- **nanoid** for generating unique IDs