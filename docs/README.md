# MAXWILL INDIA Documentation

## Project Documentation Hub

This folder contains all project documentation and architectural decisions.

## Documents

### [ARCHITECTURE.md](./ARCHITECTURE.md)
**Read this first.** Explains the overall system architecture, data flow, and design patterns.

Key topics:
- Architectural layers
- Service pattern for Bubble integration
- Data flow
- File naming conventions
- Scalability patterns

### [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
**Design reference.** All design tokens, colors, typography, spacing, components.

Key topics:
- Color palette (brand colors)
- Typography system
- Spacing scale
- Shadow system
- Animation presets
- Responsive breakpoints
- Component patterns

### [PROJECT_RULES.md](./PROJECT_RULES.md)
**Engineering standards.** Permanent project rules that apply to every commit.

Key topics:
- Information sourcing
- Architecture rules
- Component standards
- TypeScript rules
- Code quality
- Naming conventions
- Testing & verification

## Quick References

### Getting Started
1. Read [ARCHITECTURE.md](./ARCHITECTURE.md) - Understand the system
2. Read [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Learn the design tokens
3. Read [PROJECT_RULES.md](./PROJECT_RULES.md) - Follow the standards

### Before Coding
- Verify component follows architecture
- Check design tokens in DESIGN_SYSTEM.md
- Ensure code follows PROJECT_RULES.md

### Before Committing
- Type check: `npm run type-check`
- Lint: `npm run lint`
- Format: `npm run format`
- Build: `npm run build`

## Project Structure

```
project/
├── docs/                   # This folder
│   ├── ARCHITECTURE.md    # System design
│   ├── DESIGN_SYSTEM.md   # Design tokens
│   ├── PROJECT_RULES.md   # Engineering standards
│   └── README.md          # This file
├── app/                    # Next.js pages
├── components/            # React components
├── services/              # Business logic
├── types/                 # TypeScript types
├── constants/             # Constants
├── styles/                # Global CSS
├── public/                # Static assets
└── ...
```

## Architecture Overview

```
Presentation Layer (components/) 
        ↓
Business Layer (services/)
        ↓
Data Layer (data/, external APIs)
        ↓
Utilities (lib/, utils/, hooks/)
```

## Key Principles

1. **Clean Architecture** - Strict separation of concerns
2. **Design System First** - All values are tokens
3. **Reusable Components** - No duplicated code
4. **Typed TypeScript** - No `any` type
5. **Service Pattern** - Ready for Bubble integration
6. **Accessibility** - WCAG AA minimum
7. **Performance** - Lighthouse 98+
8. **Production Quality** - Vercel/Stripe standard

## FAQ

### How do I add a new component?
See [ARCHITECTURE.md](./ARCHITECTURE.md) - Presentation Layer section.

### Where do colors come from?
See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Color Palette section.

### How do I fetch data?
See [ARCHITECTURE.md](./ARCHITECTURE.md) - Business Logic Layer section.

### What if I need a new color?
Check Brand Guidelines PDF first. If not found, update DESIGN_SYSTEM.md and tailwind.config.ts together.

### How do I integrate Bubble?
See [ARCHITECTURE.md](./ARCHITECTURE.md) - Data Layer Strategy section.

### What's the product data structure?
See [ARCHITECTURE.md](./ARCHITECTURE.md) - Services section and `/services/ProductService.ts`.

## Maintenance

These docs must be updated when:
- Architecture changes
- New design tokens added
- New rules established
- Major patterns introduced

## Contact

For questions about architecture or standards, refer to these docs or contact the team.

---

**Last Updated:** July 27, 2026
**Status:** Phase 1 Foundation
