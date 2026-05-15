# CoRide - AI-Powered Transit Companion

A production-quality React mobile application prototype for urban transit commuters and drivers in Davao City.

## Features

### Home Screen
- **Welcome Section**: Personalized greeting with live status indicator
- **Your CoRide Impact**: Analytics showing time saved (12 mins) and route visibility (100%)
- **Smart Search**: AI-powered destination search with voice input capability
- **Search Suggestions**: Quick access chips for popular destinations (Bankerohan, Toril, Roxas, SM City, San Pedro, Matina, Bajada)
- **Live Routes Near You**: Real-time vehicle options with massive ETA displays
  - Traditional Jeepney: Toril Market → San Pedro (8 mins, 4 seats available)
  - Modern Bus: DIBS Route 1 (15 mins, plenty of space)

### Routes Screen
- **Interactive Filter Chips**: Filter by vehicle type (All, Jeep, Bus)
- **Route Cards**: Display all available routes with ETAs, traffic conditions, and reliability metrics
- **Live Data**: Animated status indicators (AI Live Predict, GPS Synced, Route Optimized)
- **Real-time Updates**: Smooth transitions and hover effects

### Insights Screen
- **Key Metrics**: Daily commuters (800K+), AI prediction accuracy (92%)
- **Peak Congestion Analysis**: Time-based heatmap visualization
- **Fastest Routes**: Route recommendations with wait time reductions
- **Demand Forecasting**: AI predictions for commuter flow
- **Driver Insights**: Hotspot zones and estimated earnings increase (+22%)

### Wallet Screen
- **Virtual Transit Card**: Premium gradient card design with balance display
- **Quick Actions**: QR code scanning, fare payment, top-up, rewards
- **Transaction History**: Recent fares and cashback transactions
- **Web3 Ready**: Future-ready tokenized payment system

## Design System

### Color Palette
- **Primary Blue**: `bg-blue-600` - Main brand color
- **Deep Tech Blue**: `text-blue-900` - Text and accents
- **Accent Cyan**: `text-cyan-500` - Secondary highlights
- **Success Green**: `text-emerald-500` - Positive indicators
- **Warning Orange**: `text-orange-400` - Caution states
- **Background**: `bg-slate-50` - Clean white base

### Visual Effects
- **Glassmorphism**: Frosted glass cards with backdrop blur
- **Floating Blobs**: Subtle animated gradient backgrounds
- **Smooth Animations**: Framer Motion transitions throughout
- **Hover States**: Interactive feedback on all interactive elements

### Typography
- **Headers**: Large bold fonts (text-2xl to text-4xl, font-black)
- **ETAs**: Massive typography (text-7xl) for critical data
- **Body**: Clear hierarchy with semantic font sizing

## Technical Stack

- **React 19.2.0**: Latest React with server component support
- **Next.js 16**: App Router for file-based routing
- **Tailwind CSS 4.1**: Utility-first styling
- **Framer Motion**: Advanced animations and transitions
- **Lucide React**: Premium icon library
- **TypeScript**: Full type safety

## Components

### Core Components
- `AppContainer`: Animated mobile phone frame wrapper with floating blobs
- `CoRideHeader`: Top bar with logo, notifications, and user profile
- `BottomNav`: Glassmorphic navigation with animated active states

### Screen Components
- `HomeScreen`: Welcome + Impact + Search + Live Routes
- `RoutesScreen`: Filterable route list with interactive cards
- `InsightsScreen`: Analytics dashboard with metrics and forecasts
- `WalletScreen`: Virtual card, payments, and transaction history

### Feature Components
- `WelcomeSection`: Personalized greeting with live status
- `ImpactDashboard`: Key metrics with animated icons
- `SearchBar`: AI search with voice input button
- `SearchSuggestions`: Quick-access destination chips
- `RouteCard`: Premium vehicle info with massive ETAs
- `SplashScreen`: Loading screen with animated logo

## Mock Data

Located in `lib/coride-mock-data.ts`:
- Realistic Davao-based routes
- Transit vehicle types (jeepneys, buses)
- Traffic conditions and occupancy levels
- AI confidence metrics (92% accuracy)
- Transaction history
- Driver hotspots

## Animations

All animations powered by Framer Motion:
- **Staggered Children**: Smooth cascade effects on list items
- **Spring Physics**: Bouncy, natural motion
- **Shared Layout**: Synchronized transitions between screens
- **Gesture Feedback**: Hover and tap effects
- **Pulsing Indicators**: Live status badges
- **Floating Elements**: Subtle background blob animations

## Browser Support

- Chrome/Edge (latest)
- Safari (latest)
- Firefox (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized bundle size with code splitting
- Smooth 60fps animations with GPU acceleration
- Lazy loading for screens and components
- Image optimization via Next.js Image component

## Future Enhancements

- Real-time GPS tracking
- Push notifications
- Social features (carpool, referrals)
- Payment integration (tokenized crypto)
- AI recommendation engine improvements
- Accessibility features (WCAG 2.1)
- Progressive Web App (PWA) support

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000/coride` to see the prototype.

## Design Philosophy

"Stop Guessing. Start Going."

CoRide is built to feel like a YC-backed fintech startup with modern UI/UX patterns that prioritize:
- **Clarity**: Critical data (ETAs, occupancy) is always prominent
- **Speed**: Instant feedback and smooth transitions
- **Trust**: Clean, professional design language
- **Accessibility**: High contrast, clear hierarchy
