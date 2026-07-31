# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About This Project

Stickings Builder is a Progressive Web App for drummers and percussionists to practice sticking combinations. It's a React/TypeScript application with musical notation rendering and metronome functionality.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (TypeScript compilation + Vite build)
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview

# Generate PWA assets (icons, splash screens)
npm run generate-pwa-assets
```

## Architecture Overview

### Core Technologies
- **React 18** with TypeScript and Vite build system
- **Material-UI** for UI components and styling
- **VexFlow.js** for rendering musical notation on HTML5 Canvas
- **Tone.js** for metronome and audio playback
- **Firebase** for authentication and Firestore database
- **React Router v6** for routing
- **PWA** capabilities with offline functionality

### Directory Structure
```
src/
├── components/          # Reusable UI components
├── pages/              # Route-based page components  
├── hooks/              # Custom React hooks for business logic
├── context/authContext/ # Firebase authentication context
├── firebase/           # Firebase configuration
├── lib/utils/          # Utility functions (staff, metronome, random)
├── router/             # Routing configuration
└── assets/             # Audio files for drum samples
```

### Key Architecture Patterns

**Component Organization**: Pages handle routing concerns, components are reusable UI elements, custom hooks contain business logic.

**State Management**: Uses Context API for global auth state (`AuthUserProvider`) and custom hooks for feature-specific state.

**Routing Structure**:
- `/` → redirects to `/menu/eighth-notes`
- `/menu/` has three modes: `eighth-notes`, `triplet-notes`, `random-stickings`
- `/user-account/` for saved stickings management
- Uses Outlet context to pass data between nested routes

**Music Notation**: VexFlow renders notation on Canvas elements, integrated through `useDrawNotes` hook. Staff rendering utilities in `lib/utils/staffUtils/`.

**Audio System**: Tone.js metronome with custom drum samples, managed via `useMetronome` and `useSamples` hooks.

## Key Files and Entry Points

- `src/main.tsx` - Application entry point with React Router setup
- `src/App.tsx` - Main app component with routing configuration  
- `src/router/` - Route definitions and navigation structure
- `src/context/authContext/` - Firebase authentication provider
- `src/hooks/useMetronome.ts` - Core metronome functionality
- `src/hooks/useDrawNotes.ts` - VexFlow staff rendering logic

## Firebase Integration

Uses environment variables for Firebase config. Authentication supports Google sign-in and email/password. Firestore stores user's saved sticking patterns.

## PWA Features

Configured with Vite PWA plugin for offline functionality, installable on mobile devices. Deployed to Netlify with SPA routing support (`_redirects` file).