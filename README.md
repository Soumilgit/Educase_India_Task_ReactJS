# PopX Mobile App

A pixel-perfect React application based on the PopX mobile app design with seamless navigation between screens.

## Features

- **Welcome Screen**: Introduction with Create Account and Login options
- **Login Screen**: Email and password authentication
- **Registration Screen**: Complete signup form with validation
- **Account Settings**: User profile display
- **Responsive Design**: Works perfectly on all devices
- **Smooth Navigation**: Seamless transitions between screens

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
`
git clone <your-repo-url>
cd popx-mobile-app
`

2. Install dependencies:
`
npm install
`

3. Run the development server:
`
npm run dev
`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

`
npm run build
`
`
npm start
`

## Design Implementation

This application implements a pixel-perfect recreation of the PopX mobile app design with:

- Clean, modern UI matching the original design
- Purple color scheme (#7C3AED)
- Responsive layout that works on all screen sizes
- Mobile-first approach with centered interface
- Smooth form interactions and validation

## Technology Stack

- A React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icons

## Deployment

This app can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any hosting service that supports Node.js

For Vercel deployment:
`
npm install -g vercel
`
`vercel`

## Project Structure
```
📦 
├─ .gitignore
├─ README.md
├─ app
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components.json
├─ components
│  ├─ AccountSettings.tsx
│  ├─ LoginScreen.tsx
│  ├─ RegisterScreen.tsx
│  ├─ WelcomeScreen.tsx
│  ├─ theme-provider.tsx
│  └─ ui
│     ├─ accordion.tsx
│     ├─ alert-dialog.tsx
│     ├─ alert.tsx
│     ├─ aspect-ratio.tsx
│     ├─ avatar.tsx
│     ├─ badge.tsx
│     ├─ breadcrumb.tsx
│     ├─ button.tsx
│     ├─ calendar.tsx
│     ├─ card.tsx
│     ├─ carousel.tsx
│     ├─ chart.tsx
│     ├─ checkbox.tsx
│     ├─ collapsible.tsx
│     ├─ command.tsx
│     ├─ context-menu.tsx
│     ├─ dialog.tsx
│     ├─ drawer.tsx
│     ├─ dropdown-menu.tsx
│     ├─ form.tsx
│     ├─ hover-card.tsx
│     ├─ input-otp.tsx
│     ├─ input.tsx
│     ├─ label.tsx
│     ├─ menubar.tsx
│     ├─ navigation-menu.tsx
│     ├─ pagination.tsx
│     ├─ popover.tsx
│     ├─ progress.tsx
│     ├─ radio-group.tsx
│     ├─ resizable.tsx
│     ├─ scroll-area.tsx
│     ├─ select.tsx
│     ├─ separator.tsx
│     ├─ sheet.tsx
│     ├─ sidebar.tsx
│     ├─ skeleton.tsx
│     ├─ slider.tsx
│     ├─ sonner.tsx
│     ├─ switch.tsx
│     ├─ table.tsx
│     ├─ tabs.tsx
│     ├─ textarea.tsx
│     ├─ toast.tsx
│     ├─ toaster.tsx
│     ├─ toggle-group.tsx
│     ├─ toggle.tsx
│     ├─ tooltip.tsx
│     ├─ use-mobile.tsx
│     └─ use-toast.ts
├─ hooks
│  ├─ use-mobile.tsx
│  └─ use-toast.ts
├─ lib
│  └─ utils.ts
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.mjs
├─ public
│  ├─ download.png
│  ├─ images
│  │  ├─ login.png
│  │  ├─ profile.png
│  │  ├─ register.png
│  │  └─ welcome.png
│  ├─ placeholder-logo.png
│  ├─ placeholder-logo.svg
│  ├─ placeholder-user.jpg
│  ├─ placeholder.jpg
│  └─ placeholder.svg
├─ styles
│  └─ globals.css
├─ tailwind.config.ts
└─ tsconfig.json
```

## License

MIT License
