<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Pokemon Browser Project Instructions

This is a React TypeScript project for a Pokemon browser application built with:

- **Vite** for build tooling
- **React Query (@tanstack/react-query)** for API data fetching and caching
- **React Router** for navigation
- **Ant Design** for UI components
- **Tailwind CSS** for styling with custom Pikachu-themed colors
- **TypeScript** for type safety

## Project Structure

- `src/components/` - Reusable UI components
- `src/pages/` - Page components for different routes
- `src/hooks/` - Custom React hooks, especially React Query hooks
- `src/services/` - API service functions
- `src/types/` - TypeScript type definitions

## Key Features

- Two Pokemon list views: pagination and infinite scroll
- Pokemon detail pages with comprehensive information
- Responsive design with mobile-first approach
- Loading skeletons and error handling
- Pikachu-themed color scheme (yellows, reds, blacks)

## Styling Guidelines

- Use Tailwind CSS classes with custom Pikachu theme colors
- Primary colors: `pikachu-yellow`, `pikachu-red`, `electric`, `energy`
- Responsive design with mobile-first breakpoints
- Ant Design components with custom theming

## React Query Usage

- All API calls should use React Query hooks from `src/hooks/usePokemon.ts`
- Implement proper error handling and loading states
- Use prefetching for better UX (e.g., on hover)

## Pokemon API

- Base URL: https://pokeapi.co/api/v2
- Main endpoints: `/pokemon` (list) and `/pokemon/{id}` (details)
- Handle pagination and infinite loading properly
