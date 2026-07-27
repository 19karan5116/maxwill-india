# MAXWILL INDIA - Official Website

> Premium Pickleball Equipment | Performance Engineering | Community Driven

## Project Overview

This is the production-grade official website for MAXWILL INDIA, a premium sports equipment brand specializing in professional-grade pickleball paddles and accessories.

**Brand Promise:** Engineered for command.

## Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + PostCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Netlify
- **Package Manager:** npm
- **Node Version:** ≥18.18.0

## Quick Start

### Prerequisites

- Node.js 18.18.0 or newer
- npm 9.0.0 or newer

### Installation

```bash
# Clone repository
git clone https://github.com/19karan5116/maxwill-india.git
cd maxwill-india

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run type-check   # Check TypeScript types
npm run clean        # Clean build artifacts
```

## Project Structure

```
maxwill-india/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── not-found.tsx        # 404 page
│   └── (routes)/            # Route groups
├── components/              # React components
│   ├── ui/                  # Atomic UI components
│   ├── layout/              # Layout components
│   ├── home/                # Home page components
│   ├── products/            # Product-related components
│   ├── shared/              # Shared components
│   └── animations/          # Framer Motion wrappers
├── lib/                     # Utility functions
├── hooks/                   # Custom React hooks
├── types/                   # TypeScript type definitions
├── constants/               # Constants and configuration
├── styles/                  # Global CSS
├── utils/                   # Helper functions
├── services/                # Data service layer
├── data/                    # Static data and fixtures
├── public/                  # Static assets
│   ├── images/
│   ├── products/
│   ├── icons/
│   ├── videos/
│   └── brand/
├── docs/                    # Project documentation
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── next.config.js          # Next.js configuration
├── postcss.config.js       # PostCSS configuration
├── .eslintrc.json          # ESLint configuration
├── .prettierrc              # Prettier configuration
├── package.json             # Dependencies
└── README.md               # This file
```

## Architecture Principles

### 1. Clean Architecture

The project strictly separates concerns:

- **Presentation Layer:** React components (`components/`)
- **Business Logic:** Service layer (`services/`)
- **Data Layer:** Static data and external APIs (`data/`, external services)
- **Utilities:** Helpers and shared functions (`lib/`, `utils/`)

### 2. Component Design

All components follow these principles:

- ✅ Reusable and composable
- ✅ Accessible (WCAG AA minimum)
- ✅ Responsive (mobile-first)
- ✅ Fully typed (no `any`)
- ✅ No inline styles (Tailwind only)
- ✅ Self-contained (no prop drilling)

### 3. Design System

All design values come from centralized tokens:

- **Colors:** `tailwind.config.ts` (MAXWILL brand colors from Brand Guidelines)
- **Typography:** Montserrat (display) and Open Sans (body)
- **Spacing:** Tailwind scale (large premium whitespace)
- **Shadows:** Soft and minimal (brand consistent)
- **Animations:** Framer Motion presets (no random animations)

### 4. Data Layer Strategy

The project is designed for eventual Bubble CMS integration:

- **No hardcoded data in components**
- **All data flows through services** (`services/`)
- **Service interfaces abstract the backend**
- **Local implementation:** `LocalProductService` (reads from `data/products.ts`)
- **Future implementation:** `BubbleProductService` (reads from Bubble API)
- **UI components never change** when switching backends

### 5. Performance Targets (Lighthouse)

- Performance: 98+
- Accessibility: 100
- SEO: 100
- Best Practices: 100

## Brand Colors

From Brand Guidelines:

- **Primary Red:** `#A02B2B`
- **Professional Black:** `#231F20`
- **Pure White:** `#FFFFFF`

Usage:
- Primary red for buttons, links, highlights
- Black for text and dark sections
- White dominates the design

## Development Workflow

### Before Committing

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Format
npm run format
```

### File Naming Conventions

- **Components:** PascalCase (`ProductCard.tsx`)
- **Pages:** lowercase with hyphens (`product-details.tsx`)
- **Files:** camelCase (`useResponsive.ts`)
- **Types:** PascalCase (`Product.ts`, `ProductService.ts`)

### Import Aliases

Use path aliases for cleaner imports:

```typescript
// Instead of:
import Button from '../../../components/ui/Button';

// Use:
import Button from '@/components/ui/Button';
```

## Design System Documentation

- **Colors:** See `tailwind.config.ts` and Brand Guidelines
- **Typography:** Montserrat (headings), Open Sans (body)
- **Spacing:** Use Tailwind scale (no magic numbers)
- **Animations:** Use Framer Motion presets in `components/animations`

## SEO & Metadata

All pages include:

- ✅ Title and description
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ Canonical URLs
- ✅ Structured data (where relevant)
- ✅ Robot directives

## Accessibility

All pages meet WCAG AA standards:

- ✅ Semantic HTML
- ✅ Keyboard navigation
- ✅ Visible focus states
- ✅ ARIA labels where needed
- ✅ Color contrast compliance
- ✅ Screen reader support
- ✅ `prefers-reduced-motion` support

## Environment Variables

See `.env.local.example` for available options. Copy to `.env.local` to customize.

## Contributing

This is a private project. For contributions, follow these guidelines:

1. Create a feature branch (`git checkout -b feature/name`)
2. Follow the project architecture and standards
3. Ensure TypeScript and ESLint checks pass
4. Commit with clear messages
5. Push and create a pull request

## Code Quality

This project enforces:

- ✅ Strict TypeScript (no `any`)
- ✅ ESLint compliance (no warnings)
- ✅ Prettier formatting
- ✅ No console.log in production
- ✅ Reusable components only
- ✅ Clean architecture principles

## Deployment

Deploy to Netlify:

```bash
npm run build
```

Netlify will automatically:
- Run the build command
- Deploy static files and serverless functions
- Optimize images
- Enable CDN caching

## Performance Tips

1. **Use Server Components** where data fetching is needed
2. **Lazy load components** with `dynamic()` imports
3. **Optimize images** with `next/image`
4. **Code splitting** is automatic in Next.js
5. **Fonts** are optimized via Google Fonts API

## Future Phases

- [ ] Phase 2: Layout components and design system
- [ ] Phase 3: Home page sections
- [ ] Phase 4: Product catalog and pages
- [ ] Phase 5: Bubble integration
- [ ] Phase 6: Admin dashboard
- [ ] Phase 7: Search and filtering
- [ ] Phase 8: Internationalization (i18n)

## License

Private. All rights reserved by MAXWILL INDIA.

## Support

For issues or questions, contact the development team.

---

**Last Updated:** July 27, 2026
**Version:** 1.0.0
**Status:** Foundation Phase
