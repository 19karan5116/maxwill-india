# MAXWILL INDIA - System Architecture

## Overview

This document describes the high-level architecture of the MAXWILL INDIA website, designed for:

- 🎯 Production-grade code quality
- 🏗️ Clean separation of concerns
- 📈 Scalability (future Bubble CMS integration)
- ♿ Accessibility (WCAG AA)
- ⚡ Performance (Lighthouse 98+)
- 🎨 Design system consistency

## Architectural Layers

### 1. Presentation Layer (`/components`)

**Responsibility:** React UI components only. No business logic, no data fetching.

**Structure:**
```
components/
├── ui/              # Atomic reusable components (Button, Card, Badge, etc.)
├── layout/          # Page layout components (Header, Footer, Navigation)
├── home/            # Home page specific components
├── products/        # Product-related components
├── shared/          # Higher-level shared components
└── animations/      # Framer Motion wrappers and animation presets
```

**Rules:**
- ✅ Components accept props only
- ✅ No useState/useContext for domain logic (only UI state)
- ✅ All data comes through props
- ✅ 100% typed (no `any`)
- ✅ Fully accessible
- ✅ Fully responsive
- ✅ Tailwind CSS only (no inline styles)

**Examples:**
- `Button.tsx` - Reusable button component
- `Card.tsx` - Generic card container
- `ProductGrid.tsx` - Displays products passed as props

### 2. Business Logic Layer (`/services`)

**Responsibility:** Data fetching, transformation, and business rules.

**Structure:**
```
services/
├── ProductService.ts      # Interface for product operations
├── LocalProductService.ts # Implementation (reads local JSON)
└── BubbleProductService.ts # Future implementation (Bubble API)
```

**Architecture Pattern:**

```typescript
// Service Interface
interface IProductService {
  getAll(): Promise<Product[]>;
  getById(id: string): Promise<Product>;
  getByCategory(category: string): Promise<Product[]>;
}

// Local Implementation (Phase 1)
class LocalProductService implements IProductService {
  async getAll() { /* reads from data/products.ts */ }
}

// Bubble Implementation (Future)
class BubbleProductService implements IProductService {
  async getAll() { /* reads from Bubble API */ }
}
```

**Key Principle:** Services are injectable and replaceable. When we connect Bubble, only the service implementation changes. Components stay the same.

**Usage in Components:**

```typescript
// ✅ CORRECT - Component gets data from service
export default async function HomePage() {
  const service = new LocalProductService();
  const products = await service.getAll();
  return <ProductGrid products={products} />;
}

// ❌ WRONG - Direct data import in component
import { PRODUCTS } from '@/data/products';
export default function HomePage() {
  return <ProductGrid products={PRODUCTS} />;
}
```

### 3. Data Layer (`/data`)

**Responsibility:** Static data sources.

**Structure:**
```
data/
├── products.ts         # Product data (TODO: from catalogue)
├── categories.ts       # Product categories
└── constants.ts        # Static content
```

**Rules:**
- ✅ Data is consumed ONLY through services
- ✅ Components never import from `/data`
- ✅ All product data includes TODO comments for catalogue info
- ✅ Structured TypeScript types (not plain JSON)

### 4. Utilities Layer (`/lib`, `/utils`, `/hooks`)

**Responsibility:** Reusable functions and React hooks.

**Structure:**
```
lib/               # Pure utilities (no React)
├── cn.ts         # Tailwind class merging (clsx + tailwind-merge)
├── constants.ts  # Application constants
└── helpers.ts    # General helpers

utils/            # Application-specific utilities
├── formatters.ts # Format functions
└── validators.ts # Validation functions

hooks/            # Custom React hooks
├── useResponsive.ts  # Breakpoint detection
├── useSEO.ts         # SEO metadata
└── useAnimation.ts   # Animation helpers
```

## Data Flow

### Current Flow (Phase 1)

```
App Router (page.tsx)
  ↓
Fetch data via Service
  ↓
Pass data to Components
  ↓
Components render (no fetching)
```

### Future Flow (Bubble)

```
App Router (page.tsx)
  ↓
Fetch data via Service (same interface, different implementation)
  ↓
BubbleProductService.getAll() → Bubble API
  ↓
Pass data to Components
  ↓
Components render (unchanged)
```

**The UI never changes. Only the service implementation changes.**

## Design System

### Colors

All colors defined in `tailwind.config.ts`:

```typescript
colors: {
  maxwill: {
    primary: '#A02B2B',    // Brand red
    secondary: '#231F20',  // Professional black
    light: '#FFFFFF',      // Pure white
  }
}
```

**No magic colors. No hardcoded hex values in components.**

### Typography

```typescript
fontFamily: {
  sans: ['Open Sans', 'sans-serif'],      // Body text
  display: ['Montserrat', 'sans-serif'],  // Headings
}
```

**All components use `font-sans` or `font-display` classes.**

### Spacing

Tailwind scale (no custom values):

```
4 = 1rem
6 = 1.5rem
8 = 2rem
12 = 3rem
16 = 4rem
```

**Use Tailwind spacing utilities only.**

### Shadows

Soft, premium shadows:

```typescript
boxShadow: {
  premium: '0 20px 40px -10px rgba(0, 0, 0, 0.15)',
  'premium-lg': '0 40px 80px -20px rgba(0, 0, 0, 0.2)',
}
```

### Animations

Framer Motion presets in `components/animations/`:

```typescript
// ✅ CORRECT - Use animation wrapper
import { FadeIn } from '@/components/animations';

export default function Hero() {
  return <FadeIn><h1>Title</h1></FadeIn>;
}

// ❌ WRONG - Random animation code
export default function Hero() {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Title
    </motion.h1>
  );
}
```

## File Naming Conventions

### Components

```typescript
// PascalCase for React components
Button.tsx
ProductCard.tsx
HeroSection.tsx
```

### Pages

```typescript
// lowercase with hyphens
app/page.tsx
app/products/page.tsx
app/products/[id]/page.tsx
```

### Types

```typescript
// PascalCase, descriptive names
types/Product.ts
types/ProductService.ts
types/PageMetadata.ts
```

### Utilities

```typescript
// camelCase
lib/cn.ts
utils/formatters.ts
hooks/useResponsive.ts
```

## Performance Optimization

### Image Optimization

- Use `next/image` for all images
- Automatic WebP conversion
- Lazy loading by default
- Responsive srcset generation

### Code Splitting

- Automatic in Next.js App Router
- Use `dynamic()` for large components

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  () => import('@/components/Heavy'),
  { loading: () => <Skeleton /> }
);
```

### Font Optimization

- Google Fonts API (Montserrat, Open Sans)
- Preload in root layout
- Font subsetting

## Scalability Patterns

### Future Features

This architecture supports:

- **Search:** QueryService interface + implementations
- **Filters:** FilterService interface + implementations
- **Wishlist:** WishlistService (local storage → Backend)
- **Blog:** BlogService interface + implementations
- **Auth:** AuthService interface + implementations
- **Internationalization:** i18n middleware + locale service
- **Admin Dashboard:** Separate admin routes + admin-only services

**All follow the same service interface pattern.**

### Adding a New Feature

1. Define service interface in `/services`
2. Create local implementation (if needed)
3. Create React components that use the service
4. Later, replace implementation with production version

**Example: Adding a Blog**

```typescript
// 1. Define interface
interface IBlogService {
  getAll(): Promise<BlogPost[]>;
  getById(id: string): Promise<BlogPost>;
  getByCategory(category: string): Promise<BlogPost[]>;
}

// 2. Create local implementation
class LocalBlogService implements IBlogService {
  async getAll() { return BLOG_POSTS; }
}

// 3. Use in components
export default async function BlogPage() {
  const service = new LocalBlogService();
  const posts = await service.getAll();
  return <BlogGrid posts={posts} />;
}

// 4. Later, swap implementation
class BubbleBlogService implements IBlogService {
  async getAll() { /* Bubble API call */ }
}
```

## Testing Strategy

**Phase 1:** Manual verification
**Phase 2+:** Unit tests for services, component tests for UI

## Deployment

- **Hosting:** Netlify
- **Build:** `npm run build`
- **Static generation:** All pages pre-built
- **Image optimization:** Automatic
- **CDN:** Netlify global CDN

## TypeScript Strict Mode

- ✅ All files must be valid TypeScript
- ✅ No `any` type
- ✅ All props fully typed
- ✅ All function returns typed
- ✅ ESLint enforcement

## Accessibility (WCAG AA)

- ✅ Semantic HTML everywhere
- ✅ Keyboard navigation
- ✅ Visible focus states
- ✅ ARIA labels where needed
- ✅ Color contrast 4.5:1 minimum
- ✅ `prefers-reduced-motion` support

## SEO

- ✅ Server-rendered pages
- ✅ Metadata in root layout
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ Structured data (Schema.org)
- ✅ Canonical URLs
- ✅ Sitemap.xml
- ✅ robots.txt

## Monitoring & Logging

**Phase 1:** Console for development only
**Phase 2+:** Sentry for error tracking, Vercel analytics

---

**This architecture is designed to scale with MAXWILL INDIA's growth.**
