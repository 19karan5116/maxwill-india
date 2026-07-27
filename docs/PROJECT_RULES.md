# MAXWILL INDIA - Project Engineering Rules

## Overview

These are the permanent engineering standards for this project. They are non-negotiable and must be followed in every commit.

## 1. Information Sourcing

### ✅ DO

- Source all information from Brand Guidelines PDF
- Source all product information from Product Catalogue PDF
- Use official documentation for dependency versions
- Leave TODO placeholders for unavailable information

### ❌ DON'T

- Invent product names or specifications
- Invent brand colors or typography
- Guess package versions (always use official docs)
- Create fake certifications, awards, or testimonials
- Invent technologies or partnerships

## 2. Architecture

### ✅ DO

- Separate: Presentation Layer → Business Logic → Data Layer → Utilities
- Create service interfaces for all data operations
- Use dependency injection for swappable implementations
- Design for Bubble CMS integration (service pattern)
- Never import data directly in components
- All data flows through services

### ❌ DON'T

- Mix concerns (business logic in components)
- Hardcode data in components
- Create one-off data fetching patterns
- Couple UI to backend directly
- Skip service abstractions

## 3. Components

### ✅ DO

- Create reusable, composable components
- Keep components small and focused
- Accept all data through props
- Make components fully accessible (WCAG AA)
- Make components fully responsive (mobile-first)
- Type all props completely (no `any`)
- Use Tailwind CSS only (no inline styles)
- Co-locate related styles and logic

### ❌ DON'T

- Create duplicate components
- Mix business logic with UI logic
- Use inline styles
- Create untyped components
- Skip accessibility features
- Hardcode values
- Create monolithic components

## 4. Design System

### ✅ DO

- Use design tokens from `tailwind.config.ts`
- Use semantic class names (`bg-maxwill-primary`)
- Use Tailwind spacing scale (no magic numbers)
- Use Tailwind color scale (no hex values)
- Use Tailwind shadow system
- Use Framer Motion presets only
- Support `prefers-reduced-motion`

### ❌ DON'T

- Hardcode colors
- Hardcode spacing
- Hardcode shadows
- Use arbitrary Tailwind values
- Write raw CSS
- Use `style={}` attributes
- Write random animation code

## 5. TypeScript

### ✅ DO

- Use strict mode everywhere
- Type all functions, props, and returns
- Export types explicitly
- Use interfaces for contracts
- Use discriminated unions for complex types
- Use const assertions for literals
- Use readonly where appropriate

### ❌ DON'T

- Use `any` type (ever)
- Use implicit `any`
- Skip prop typing
- Use generic types loosely
- Type as `object` instead of proper types
- Leave TypeScript warnings
- Use `// @ts-ignore`

## 6. Code Quality

### ✅ DO

- Follow ESLint rules (zero warnings)
- Format with Prettier before commits
- Run type-check before commits
- Use meaningful variable names
- Write self-documenting code
- Keep functions pure
- Keep components side-effect free

### ❌ DON'T

- Commit with ESLint warnings
- Use console.log in production code
- Use cryptic variable names
- Create long functions
- Create functions with side effects
- Skip formatting
- Ignore TypeScript warnings

## 7. Naming Conventions

### React Components

```typescript
// PascalCase
Button.tsx
ProductCard.tsx
HeroSection.tsx
Navigation.tsx
```

### Pages/Routes

```typescript
// lowercase with hyphens
app/page.tsx
app/products/page.tsx
app/about/page.tsx
```

### Types/Interfaces

```typescript
// PascalCase, descriptive
Product.ts
ProductService.ts
PageMetadata.ts
AnimationPreset.ts
```

### Functions/Variables

```typescript
// camelCase
getProducts()
formatPrice()
useResponsive()
cnMerge()
```

### CSS Classes

```typescript
// kebab-case
.container-responsive
.glass
.gradient-text
.transition-smooth
```

## 8. Imports & Exports

### ✅ DO

```typescript
// Use path aliases
import Button from '@/components/ui/Button';
import { getProducts } from '@/services/ProductService';
import type { Product } from '@/types/Product';

// Explicit exports
export default Button;
export type { ButtonProps };
```

### ❌ DON'T

```typescript
// Relative imports
import Button from '../../../components/Button';

// Barrel exports for large modules
export * from './everything';

// Unused imports
import { unused } from '@/lib';
```

## 9. File Organization

### Folder Structure

```
app/                  # Next.js pages and routes
components/           # React components only
  ├── ui/            # Atomic reusable
  ├── layout/        # Page layout
  ├── home/          # Home-specific
  ├── products/      # Product-specific
  ├── shared/        # Higher-level shared
  └── animations/    # Framer Motion wrappers
lib/                 # Pure utilities
utils/               # App utilities
hooks/               # Custom React hooks
types/               # TypeScript types
constants/           # Constants
services/            # Business logic
data/                # Static data
public/              # Static assets
docs/                # Documentation
styles/              # Global CSS
```

### Files

- ✅ One component per file
- ✅ Type definitions in same file
- ✅ Import order: React → External → Internal → Types
- ✅ Exports at bottom

## 10. Testing & Verification

Before every commit:

```bash
npm run type-check    # TypeScript check
npm run lint          # ESLint check
npm run format        # Prettier format
```

Before merge:

```bash
npm run build         # Full build
```

## 11. Performance

### ✅ DO

- Use `next/image` for all images
- Use `dynamic()` for heavy components
- Use Server Components when possible
- Optimize fonts
- Lazy load animations
- Code-split routes

### ❌ DON'T

- Use `<img>` tags
- Load all components upfront
- Fetch data in client components
- Block on large JavaScript
- Ignore Lighthouse scores

## 12. Accessibility

### ✅ DO

- Use semantic HTML
- Include ARIA labels
- Ensure keyboard navigation
- Ensure visible focus states
- Ensure color contrast
- Support screen readers
- Support `prefers-reduced-motion`
- Test with accessibility tools

### ❌ DON'T

- Use `<div role="button">`
- Skip ARIA labels
- Use color alone for meaning
- Hide focus states
- Use inaccessible patterns

## 13. SEO

### ✅ DO

- Include metadata on all pages
- Use semantic HTML
- Include structured data
- Include Open Graph tags
- Include Twitter cards
- Set canonical URLs
- Create sitemap.xml
- Create robots.txt

### ❌ DON'T

- Skip metadata
- Use non-semantic HTML
- Hide content from search
- Create duplicate content

## 14. Documentation

### ✅ DO

- Document complex logic
- Include README in each major folder
- Explain architectural decisions
- Include inline comments for non-obvious code
- Keep documentation up-to-date

### ❌ DON'T

- Create obvious comments
- Over-document simple code
- Leave TODO comments without context
- Skip updating docs on changes

## 15. Commits

### ✅ DO

```
PHASE 1 GROUP 2: Global Styles & CSS Foundation

Created:
- styles/globals.css
- styles/animations.css
- Environment variable examples

Details:
- Global typography setup
- Accessibility foundation
- Animation utilities
```

### ❌ DON'T

```
fixed stuff
updated files
WIP
```

## 16. Code Review Checklist

Before submitting for review:

- [ ] TypeScript passes (`npm run type-check`)
- [ ] ESLint passes (`npm run lint`)
- [ ] Code formatted (`npm run format`)
- [ ] No console.log in production code
- [ ] All props typed
- [ ] No inline styles
- [ ] Components are reusable
- [ ] Accessibility checked
- [ ] Responsive design verified
- [ ] Performance acceptable
- [ ] Documentation updated

## 17. Deployment

### Pre-Deployment

```bash
npm run build          # Verify build succeeds
npm run type-check     # Verify types
npm run lint           # Verify linting
```

### Environment Variables

- ✅ Use `.env.local` for development
- ✅ Use Netlify environment for production
- ✅ Never commit secrets
- ✅ Never use secrets in client code

## 18. Future Integration: Bubble CMS

When integrating Bubble:

1. Create `BubbleProductService` implementing `IProductService`
2. Update service factory to use Bubble
3. Components stay unchanged
4. Tests should pass without modification

## 19. Scalability Checklist

As the project grows:

- [ ] Services are replaceable
- [ ] Components are composable
- [ ] No coupling to specific backend
- [ ] Data layer is abstracted
- [ ] Routes scale to 100+ pages
- [ ] Code organization scales
- [ ] Performance targets maintained

## 20. When in Doubt

- Think like Vercel/Stripe/Apple engineers
- Choose maintainability over speed
- Choose clarity over cleverness
- Choose reusability over one-offs
- Choose accessibility over aesthetics alone
- Choose performance over features

---

**These rules are non-negotiable. Every commit must follow them.**
