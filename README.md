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
\`\`\`bash
git clone <your-repo-url>
cd popx-mobile-app
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Design Implementation

This application implements a pixel-perfect recreation of the PopX mobile app design with:

- Clean, modern UI matching the original design
- Purple color scheme (#7C3AED)
- Responsive layout that works on all screen sizes
- Mobile-first approach with centered interface
- Smooth form interactions and validation

## Technology Stack

- **Next.js 14**: React framework with App Router
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
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── WelcomeScreen.tsx
│   ├── LoginScreen.tsx
│   ├── RegisterScreen.tsx
│   └── AccountSettings.tsx
└── public/
    └── images/
\`\`\`

## License

MIT License
