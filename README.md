# Combina Dashboard

A modern, responsive dashboard built with React + Vite, TypeScript, Tailwind CSS, and React Query.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Query** - Data fetching and state management
- **Recharts** - Chart library for data visualization
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/            # Reusable UI components (Button, Card)
│   ├── Header.tsx     # Top navigation header
│   ├── NotificationCards.tsx
│   ├── NeedsApproval.tsx
│   ├── PayoutsCard.tsx
│   ├── PartnerFunnel.tsx
│   ├── SummaryCards.tsx
│   ├── ProgramGrowth.tsx
│   ├── InboxSidebar.tsx
│   ├── LoadingState.tsx
│   └── ErrorState.tsx
├── data/              # Mock data
│   └── mockData.ts
├── hooks/             # Custom React hooks
│   └── useDashboardData.ts
├── lib/               # Utility functions
│   └── utils.ts
├── types/             # TypeScript type definitions
│   └── index.ts
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Loading states with React Query
- ✅ Error handling with retry functionality
- ✅ Mock data with simulated API delays
- ✅ Modern UI with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Component-based architecture

## Dashboard Sections

1. **Header** - Navigation, search, and user profile
2. **Notification Cards** - Recent updates and quick links
3. **Needs Approval** - Pending approval requests
4. **Payouts Card** - Quarterly payout visualization with bar chart
5. **Partner Funnel** - Sales funnel with growth metrics
6. **Summary Cards** - Key metrics (Outreached, Onboarded, Awaiting Deliverables)
7. **Program Growth** - Partner acquisition breakdown
8. **Inbox Sidebar** - Recent messages and chat interface

## Notes

- All data is mocked and includes simulated loading delays (1 second)
- No backend integration required
- Colors, spacing, and fonts are approximated from the provided screenshots
- The dashboard is fully responsive and works on all screen sizes

