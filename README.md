# 🌟 Pokédex - Pokemon Browser Application

A modern, responsive Pokemon browser built with React, TypeScript, and cutting-edge web technologies. Features two distinct browsing experiences, multiple Pokemon-themed color schemes, and comprehensive Pokemon information display.

## 🚀 Features

### 📋 Dual Browsing Modes

- **Pagination View**: Classic page-by-page navigation with numbered page controls
- **Infinite Scroll View**: Endless browsing with "Load More" button functionality
- **Easy View Switching**: Toggle between modes with dedicated navigation component

### 🎨 Multi-Theme System

- **Pikachu Theme**: Classic yellow/red electric colors (default)
- **Charizard Theme**: Fiery orange/red flame colors
- **Mewtwo Theme**: Mystical purple/indigo psychic colors
- **Theme Persistence**: Your theme choice is saved locally
- **Complete UI Integration**: All components adapt to theme changes

### 🎯 Enhanced User Experience

- **Fully responsive** design (mobile-first approach)
- **Smooth animations** and hover effects with scaling
- **Loading skeletons** for better perceived performance
- **Comprehensive error handling** with retry functionality
- **Pokemon prefetching** on card hover for instant detail loading
- **404 error page** with helpful navigation options

### 📱 Detailed Pokemon Information

- **High-quality official artwork** with fallback sprites
- **Pokemon types** with authentic color-coded badges
- **Physical attributes** with icons (base experience)
- **Multiple sprite variations** (normal, shiny, front view)
- **Quick facts section** with comprehensive stats
- **Themed detail pages** that adapt to current color scheme

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS 3.4.14 + Ant Design 5.26.7
- **State Management**: React Query 5.83.1 (TanStack Query)
- **Routing**: React Router 6.26.2
- **API**: PokéAPI (https://pokeapi.co)
- **Development**: ESLint + TypeScript for code quality

## 📦 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── PokemonCard.tsx     # Individual Pokemon display card
│   ├── Layout.tsx          # Main app layout with header/footer
│   ├── ViewSwitcher.tsx    # Navigation between list views
│   ├── ThemeSelector.tsx   # Theme selection dropdown
│   ├── SkeletonLoader.tsx  # Loading skeleton components
│   └── ErrorDisplay.tsx    # Error handling component
├── pages/                  # Route page components
│   ├── HomePage.tsx        # Landing page with view selection
│   ├── PaginationView.tsx  # Paginated Pokemon list view
│   ├── InfiniteScrollView.tsx # Infinite scroll view
│   ├── PokemonDetailPage.tsx # Individual Pokemon details
│   └── NotFoundPage.tsx    # 404 error page
├── hooks/                  # Custom React hooks
│   ├── usePokemon.ts       # React Query hooks for Pokemon API
│   └── useTheme.ts         # Theme context hook
├── contexts/               # React context providers
│   ├── ThemeContext.tsx    # Theme provider component
│   └── context.ts          # Theme context definition
├── services/               # API service functions
│   └── pokemonApi.ts       # Pokemon API calls and utilities
├── types/                  # TypeScript type definitions
│   ├── pokemon.ts          # Pokemon-related interfaces
│   └── theme.ts            # Theme-related interfaces
└── App.tsx                 # Main app with routing and providers
```

## 🎨 Theme System

The application features a comprehensive theme system with three distinct Pokemon-inspired themes:

### Available Themes

- **⚡ Pikachu Theme**: Electric yellow/red colors (`#FFCB05`, `#FF1744`)
- **🔥 Charizard Theme**: Fiery orange/red colors (`#FF6B35`, `#FFD700`)
- **🧠 Mewtwo Theme**: Psychic purple/indigo colors (`#9C4DCC`, `#E1BEE7`)

### Theme Features

```typescript
interface ThemeColors {
  primary: string; // Main brand color
  primaryLight: string; // Lighter variant
  primaryDark: string; // Darker variant
  secondary: string; // Accent color
  accent: string; // Secondary accent
  background: string; // Gradient background
  text: string; // Primary text color
}
```

### Theme Integration

- **Header & Navigation**: Dynamic colors and gradients
- **Pokemon Cards**: Themed borders and backgrounds
- **Buttons & Controls**: Consistent color schemes
- **Typography**: Adaptive text colors for readability
- **Backgrounds**: Custom gradients per theme

## ⚡ React Query Integration

React Query provides powerful data fetching, caching, and synchronization:

### Key Features

- **Automatic caching** with 5-minute stale time
- **Background refetching** to keep data fresh
- **Optimistic updates** for better UX
- **Prefetching** on Pokemon card hover for instant navigation
- **Error boundaries** with retry functionality
- **Infinite queries** for seamless load-more functionality

### Hook Examples

```typescript
// Fetching Pokemon list with pagination
const { data, isLoading, error } = usePokemonList(currentPage, 20);

// Infinite loading with automatic pagination
const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
  usePokemonInfiniteList(20);

// Individual Pokemon details with caching
const { data: pokemon } = usePokemonDetails(pokemonId);

// Prefetching for better performance
const prefetchPokemonDetails = usePrefetchPokemonDetails();
```

### Performance Benefits

- **Reduced API calls** through intelligent caching
- **Better performance** with background updates
- **Improved UX** with loading states and prefetching
- **Offline support** with stale-while-revalidate strategy

## 🚀 Getting Started

### Prerequisites

- **Node.js 18.14.0+** (Note: Newer versions may require package updates)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd pokemon-project

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint code analysis
```

### Development Notes

- The project uses **Vite 5.4.19** 
- **React Router 6.26.2**
- **ES module configuration** for modern JavaScript features

## 🌐 API Integration

### PokéAPI Integration

- **Base URL**: `https://pokeapi.co/api/v2`
- **Endpoints Used**:
  - `/pokemon` - Pokemon list with pagination
  - `/pokemon/{id}` - Individual Pokemon details
- **Data Fetching**: React Query with 5-minute cache
- **Error Handling**: Comprehensive retry and fallback mechanisms

### Image Sources

- **Primary**: Official artwork from PokéAPI
- **Fallback**: Front default sprites
- **Additional**: Shiny variants and alternative views

## 📱 Responsive Design

The application features mobile-first responsive design:

- **Mobile** (xs: <576px): Single column layout
- **Tablet** (sm: 576-768px): 2 column grid
- **Desktop** (md: 768-992px): 3-4 column grid
- **Large** (lg: 992-1200px): 4-5 column grid
- **Extra Large** (xl: >1200px): 5+ column grid

### Design Principles

- **Mobile-first approach** for optimal performance
- **Touch-friendly** buttons and interactions
- **Readable typography** across all screen sizes
- **Adaptive navigation** with responsive menu

## 🎯 Performance Optimizations

- **Image lazy loading** for Pokemon sprites and artwork
- **React Query caching** to minimize API requests
- **Code splitting** with dynamic imports
- **Prefetching** on hover for instant navigation
- **Code splitting** with React Router
- **Optimized bundle size** with Vite
- **Efficient re-rendering** with React Query
- **Prefetching** for smooth navigation

## 🐛 Error Handling

- **Skeleton loading states** for better perceived performance
- **Bundle optimization** with Vite's tree-shaking
- **Background refetching** to keep data fresh

## 🛠️ Error Handling

Comprehensive error handling throughout the application:

- **Network errors** with retry functionality
- **404 errors** for missing Pokemon or invalid routes
- **Loading states** with skeleton components
- **Fallback UI** for unexpected errors
- **User-friendly error messages** with action buttons

## 🌐 Deployment

The project is configured for easy deployment on modern platforms:

### Recommended Platforms

- **Vercel** (recommended for React apps)
- **Netlify**
- **Cloudflare Pages**
- **GitHub Pages**

### Build Configuration

```bash
# Build command
npm run build

# Output directory
dist/
```

## 🔧 Customization & Extension

### Adding New Themes

Create new theme in `src/types/theme.ts`:

```typescript
{
  id: 'new-theme',
  name: 'New Theme',
  pokemon: 'Theme Description',
  colors: {
    primary: '#YOUR_PRIMARY_COLOR',
    primaryLight: '#LIGHTER_VARIANT',
    primaryDark: '#DARKER_VARIANT',
    // ... other colors
  }
}
```

### Extending Pokemon Data

The type system supports additional Pokemon properties:

```typescript
// Add new fields to Pokemon interface
interface Pokemon {
  // existing fields...
  customField?: string;
}
```

### Custom Components

All components use the theme context and can be easily extended:

```typescript
const { currentTheme } = useTheme();
// Use currentTheme.colors for styling
```

## 📊 Project Stats

- **Components**: 8 reusable components
- **Pages**: 5 route pages including 404
- **Hooks**: 2 custom hooks for API and theming
- **Themes**: 3 complete Pokemon-inspired themes
- **API Integration**: Full PokéAPI integration with caching
- **TypeScript Coverage**: 100% typed codebase

## 📄 License

This project is open source and available under the **MIT License**.

## 🙏 Acknowledgments

- **[PokéAPI](https://pokeapi.co)** for providing comprehensive Pokemon data
- **[Ant Design](https://ant.design)** for the robust component library
- **[Tailwind CSS](https://tailwindcss.com)** for utility-first styling approach
- **[TanStack Query](https://tanstack.com/query)** for powerful data fetching
- **[Vite](https://vitejs.dev)** for lightning-fast development experience

---

**Built with ❤️ for Pokemon trainers worldwide!** 🎉⚡🔥🧠

_Gotta catch 'em all!_ 🎯
