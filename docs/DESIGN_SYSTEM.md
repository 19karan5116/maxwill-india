# MAXWILL INDIA - Design System

## Overview

This document defines the design system tokens used throughout the website. All design values are centralized in `tailwind.config.ts` and must never be hardcoded in components.

## Color Palette

### Brand Colors (from Brand Guidelines)

```
Primary Red:        #A02B2B
Professional Black:  #231F20
Pure White:         #FFFFFF
```

### Tailwind Usage

```typescript
// In components:
<button className="bg-maxwill-primary text-white">Click</button>
<div className="bg-maxwill-secondary text-white">Dark</div>
<div className="bg-maxwill-light">Light</div>
```

### Gray Scale

```
maxwill-gray-50:   #F9F9F9   // Lightest
maxwill-gray-100:  #F3F3F3
maxwill-gray-200:  #ECECEC
maxwill-gray-300:  #D1D5DB
maxwill-gray-400:  #9CA3AF
maxwill-gray-500:  #6B7280
maxwill-gray-600:  #4B5563
maxwill-gray-700:  #374151
maxwill-gray-800:  #1F2937
maxwill-gray-900:  #111827   // Darkest
```

### Semantic Colors

```typescript
// Utility colors
text-success    // #10B981 - Success states
text-warning    // #F59E0B - Warning states
text-error      // #EF4444 - Error states
text-info       // #3B82F6 - Information
```

## Typography

### Font Families

```
Display Font:  Montserrat Bold  (headings)
Body Font:     Open Sans Regular (body text)
```

### Type Scale

```
xs:     0.75rem   (12px)   - Extra small
sm:     0.875rem  (14px)   - Small
base:   1rem      (16px)   - Base
lg:     1.125rem  (18px)   - Large
xl:     1.25rem   (20px)   - Extra Large
2xl:    1.5rem    (24px)   - 2X Large
3xl:    1.875rem  (30px)   - 3X Large
4xl:    2.25rem   (36px)   - 4X Large
5xl:    3rem      (48px)   - 5X Large
6xl:    3.75rem   (60px)   - 6X Large
7xl:    4.5rem    (72px)   - 7X Large
8xl:    6rem      (96px)   - 8X Large
```

### Usage

```typescript
// Headings always use display font
<h1 className="font-display text-6xl font-bold">Title</h1>
<h2 className="font-display text-4xl font-bold">Subtitle</h2>
<h3 className="font-display text-2xl font-bold">Heading 3</h3>

// Body always uses sans font
<p className="font-sans text-base leading-relaxed">Body text</p>
```

## Spacing Scale

All spacing uses Tailwind scale. Never use arbitrary values.

```typescript
// Common spacings
4:      1rem    (16px)
6:      1.5rem  (24px)
8:      2rem    (32px)
12:     3rem    (48px)
16:     4rem    (64px)
20:     5rem    (80px)
24:     6rem    (96px)
```

### Padding

```typescript
// Small container
<div className="px-4 py-6">...</div>

// Medium container
<div className="px-6 py-8">...</div>

// Large section
<div className="px-8 py-12">...</div>
```

### Gaps (Flexbox)

```typescript
// Small gap
<div className="flex gap-4">...</div>

// Medium gap
<div className="flex gap-6">...</div>

// Large gap (premium breathing room)
<div className="flex gap-12">...</div>
```

## Border Radius

```
None:   0
Sm:     0.25rem
Base:   0.5rem
Md:     0.75rem
Lg:     1rem
Xl:     1.5rem
2xl:    2rem
3xl:    3rem
Full:   9999px
```

### Usage

```typescript
// Subtle rounding (brand consistent)
<div className="rounded-md">...</div>

// Medium rounding
<div className="rounded-lg">...</div>

// Never overly rounded
// ❌ <div className="rounded-full">...</div> // Only for circles
```

## Shadows

### Standard Shadows

```typescript
shadow-sm      // Subtle
shadow-base    // Standard
shadow-md      // Medium
shadow-lg      // Large
shadow-xl      // Extra large
shadow-2xl     // Huge
shadow-inner   // Inner shadow
```

### Premium Shadows (Brand)

```typescript
shadow-premium      // Soft premium shadow
shadow-premium-lg   // Large premium shadow
```

### Usage

```typescript
// Subtle elevation (premium feel)
<div className="rounded-lg shadow-premium">...</div>

// Card with standard shadow
<div className="rounded-lg shadow-base">...</div>

// Never heavy shadows
// ❌ <div className="shadow-2xl">...</div>
```

## Opacity Scale

```
0:      0%
5:      5%
10:     10%
20:     20%
25:     25%
30:     30%
40:     40%
50:     50%
60:     60%
70:     70%
75:     75%
80:     80%
90:     90%
95:     95%
100:    100%
```

### Usage

```typescript
// Hover effects
<a className="hover:opacity-80">Link</a>

// Disabled states
<button disabled className="opacity-50">Disabled</button>

// Overlay
<div className="bg-black/10 backdrop-blur-md">...</div>
```

## Glass Effects

Allowed for premium feel, but use sparingly.

```typescript
// Frosted glass (light backgrounds)
<div className="glass">
  {/* bg-white/10 backdrop-blur-md border border-white/20 */}
</div>

// Frosted glass (dark backgrounds)
<div className="glass-dark">
  {/* bg-black/10 backdrop-blur-md border border-black/20 */}
</div>
```

## Transitions & Animations

### Duration

```
75ms, 100ms, 150ms, 200ms, 300ms, 500ms, 700ms, 1000ms
```

### Easing

```typescript
ease-in         // Slow start, fast end
ease-out        // Fast start, slow end
ease-in-out     // Slow start and end
```

### Usage

```typescript
// Smooth transitions
<button className="transition-all duration-300 hover:bg-maxwill-primary">
  Hover me
</button>

// Premium transitions
<div className="transition-smooth">...</div>
```

## Responsive Breakpoints

Design mobile-first. Always start with mobile styles.

```typescript
xs:          320px   // Small phones
sm:          375px   // Standard phones
md:          390px   // Medium phones
md-plus:     414px   // Large phones
base:        640px   // Small tablets
tablet:      768px   // Tablets
tablet-lg:   1024px  // Large tablets
desktop:     1280px  // Desktop
desktop-lg:  1440px  // Large desktop
desktop-xl:  1728px  // XL desktop
desktop-2xl: 1920px  // 2K
4k:          2560px  // 4K
```

### Usage

```typescript
// Mobile first
<div className="px-4 tablet:px-6 desktop:px-8">...</div>

// Responsive text
<h1 className="text-2xl tablet:text-4xl desktop:text-6xl">Title</h1>

// Responsive grid
<div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4">
  {/* Items */}
</div>
```

## Component Patterns

### Button Variants

```typescript
// Primary (filled red)
<button className="bg-maxwill-primary text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-all">
  Primary
</button>

// Secondary (outline)
<button className="border-2 border-maxwill-secondary text-maxwill-secondary px-6 py-3 rounded-lg hover:bg-maxwill-gray-100 transition-all">
  Secondary
</button>

// Ghost (minimal)
<button className="text-maxwill-secondary px-6 py-3 rounded-lg hover:bg-maxwill-gray-100 transition-all">
  Ghost
</button>
```

### Card Pattern

```typescript
<div className="rounded-lg bg-white shadow-premium p-6 hover:shadow-premium-lg transition-all">
  <h3 className="font-display text-xl font-bold mb-2">Card Title</h3>
  <p className="font-sans text-maxwill-gray-600">Card description</p>
</div>
```

### Badge Pattern

```typescript
<span className="inline-block px-3 py-1 rounded-full bg-maxwill-primary/10 text-maxwill-primary text-sm font-semibold">
  Badge
</span>
```

## Animation Presets

All animations use Framer Motion wrappers in `components/animations/`.

**Never write raw Framer Motion code in components.**

```typescript
import { FadeIn, SlideIn, ScaleIn } from '@/components/animations';

export default function Component() {
  return (
    <>
      <FadeIn><h1>Fade in</h1></FadeIn>
      <SlideIn><p>Slide in</p></SlideIn>
      <ScaleIn><div>Scale in</div></ScaleIn>
    </>
  );
}
```

## Accessibility

### Color Contrast

- ✅ Text on white: Use colors with WCAG AA contrast
- ✅ Text on colors: Ensure 4.5:1 contrast minimum
- ✅ Never rely on color alone

### Focus States

```typescript
// All interactive elements have visible focus
:focus-visible {
  ring-2 ring-maxwill-primary ring-offset-2
}
```

### Reduced Motion

```typescript
@media (prefers-reduced-motion: reduce) {
  /* All animations disabled */
}
```

## Dark Mode (Future)

Currently not implemented. When needed, use Tailwind's dark mode:

```typescript
<div className="bg-white dark:bg-maxwill-secondary text-maxwill-secondary dark:text-white">
  {/* */}
</div>
```

## Common Patterns

### Container with Premium Spacing

```typescript
<div className="container-responsive py-12 tablet:py-16 desktop:py-20">
  {/* Content with large whitespace */}
</div>
```

### Gradient Text

```typescript
<h1 className="gradient-text text-6xl font-display">Gradient Text</h1>
```

### Smooth Hover Effect

```typescript
<button className="transition-smooth hover:scale-105 hover:shadow-lg">
  Hover me
</button>
```

## Design System Rules

✅ **DO:**
- Use design tokens from Tailwind config
- Use semantic class names
- Design mobile-first
- Support prefers-reduced-motion
- Use reusable component patterns
- Keep layouts clean and minimal
- Use large whitespace (premium feel)

❌ **DON'T:**
- Hardcode colors or spacing
- Use `style={}` attributes
- Use arbitrary Tailwind values
- Create unstyled HTML
- Use shadows on everything
- Clutter the interface
- Override design tokens

---

**This design system ensures consistency and premium quality across MAXWILL INDIA.**
