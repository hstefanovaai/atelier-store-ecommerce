# Atelier Store Design System - Quick Start

## What Was Implemented

A complete, production-ready design system inspired by luxury eCommerce principles (Gucci-aligned):

### ✅ Design Tokens
- **Colors**: Neutral palette (grays) + accent colors (red, gold)
- **Typography**: Serif display fonts (Georgia) + sans-serif body (system fonts)
- **Spacing**: 8px-based scale with predefined values
- **Shadows**: Subtle to strong elevation levels
- **Transitions**: Smooth animations with motion preference support
- **Borders**: Minimal, refined border styles

**Location**: `src/styles/tokens.css` (CSS custom properties)

### ✅ Global Styles
Comprehensive base styles in `src/app/globals.css`:
- Typography hierarchy with responsive font sizes
- Form element styling
- Utility classes for spacing, flex, text, opacity
- Dark mode support
- Accessibility (focus states, sr-only)
- Component classes (buttons, cards, badges, links, dividers)

### ✅ React Components (TypeScript)
Reusable, type-safe UI primitives in `src/components/ui/`:

| Component | Usage | File |
|-----------|-------|------|
| `Button` | Clickable actions (4 variants, 3 sizes) | `Button.tsx` |
| `Link` | Navigation links | `Link.tsx` |
| `Container` | Fixed-width wrapper with responsive padding | `Container.tsx` |
| `Section` | Vertical rhythm wrapper | `Section.tsx` |
| `Grid` | Responsive grid layout (1-4 columns) | `Grid.tsx` |
| `Card` | Content boxes (3 variants) | `Card.tsx` |
| `H1`–`H6` | Semantic headings | `Heading.tsx` |
| `Heading` | Generic heading component | `Heading.tsx` |
| `Badge` | Labels & tags (3 variants) | `Badge.tsx` |

### ✅ Tailwind Configuration
Extended `tailwind.config.ts` with:
- Custom color tokens that reference CSS variables
- Complete typography scale
- Spacing scale
- Border radius and width tokens
- Shadow definitions
- Animation/keyframe support

### ✅ Documentation
- **Full Guide**: `src/styles/DESIGN_SYSTEM.md` — Complete API reference, best practices, customization
- **Demo Page**: `src/app/design-system/page.tsx` — Interactive showcase of all components

---

## How to Use

### 1. Import Components
```tsx
import { Button, Container, Section, Grid, Card, H1, H2, Badge } from '@/components/ui'
```

### 2. Build Pages
```tsx
export default function ProductPage() {
  return (
    <Section>
      <Container>
        <H1>Featured Products</H1>
        
        <Grid cols={3}>
          {products.map(product => (
            <Card key={product.id} variant="elevated">
              <img src={product.image} alt={product.name} />
              <H4>{product.name}</H4>
              <Badge variant="accent">New</Badge>
              <p>${product.price}</p>
              <Button full>Add to Cart</Button>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
```

### 3. Use CSS Variables Directly
In CSS/inline styles:
```css
background-color: rgb(var(--color-neutral-50));
color: rgb(var(--color-accent-red));
padding: var(--space-8);
gap: var(--space-6);
transition: color var(--transition-base);
```

### 4. Extend with Tailwind
All tokens are available as Tailwind classes:
```tsx
<div className="bg-neutral-50 text-neutral-900 p-8 rounded-lg shadow-md">
  Content
</div>
```

---

## Key Design Principles (Luxury eCommerce)

### Visual Hierarchy
- Clean, minimal layouts with generous whitespace
- Large, breathing section spacing
- High-contrast typography (serif headlines on clean backgrounds)

### Color Usage
- Neutral palette (grays) for structure
- Red accent for premium feel and important CTAs
- Gold accent for luxury touch (optional, use sparingly)

### Typography
- Display/serif fonts for headlines (premium feel)
- Clean sans-serif for body (readability)
- Responsive sizing using `clamp()` for fluid design

### Interactions
- Subtle, smooth transitions (not abrupt)
- Minimal borders (luxury is often about what's NOT there)
- Hover states that maintain elegance

### Responsive Design
- Mobile-first approach
- Breakpoints: Mobile (<768px), Tablet (768px+), Desktop (1024px+)
- Grids automatically collapse to 1 column on mobile

---

## File Structure

```
src/
├── styles/
│   ├── tokens.css                    # CSS custom properties (colors, spacing, etc.)
│   └── DESIGN_SYSTEM.md              # Complete documentation & API
├── app/
│   ├── globals.css                   # Base styles, component classes, utilities
│   ├── design-system/
│   │   └── page.tsx                  # Interactive component showcase
│   └── layout.tsx                    # App shell (add fonts here)
└── components/
    └── ui/
        ├── Button.tsx                # Button component
        ├── Link.tsx                  # Link component
        ├── Container.tsx             # Fixed-width container
        ├── Section.tsx               # Vertical spacing wrapper
        ├── Grid.tsx                  # Responsive grid
        ├── Card.tsx                  # Card with optional sections
        ├── Heading.tsx               # Heading component + H1-H6
        ├── Badge.tsx                 # Badge component
        └── index.ts                  # Barrel export for easy imports
```

---

## Customization

### Change Brand Colors
Edit `src/styles/tokens.css`:
```css
:root {
  --color-accent-red: #YOUR_HEX;
  --color-accent-gold: #YOUR_HEX;
  --color-neutral-900: #YOUR_HEX;
}
```

### Change Fonts
1. Add fonts to `src/app/layout.tsx` (Google Fonts, Typekit, etc.)
2. Update `src/styles/tokens.css`:
```css
:root {
  --font-display: 'Your Serif', serif;
  --font-body: 'Your Sans', sans-serif;
}
```

### Adjust Spacing Scale
Edit values in `src/styles/tokens.css`:
```css
:root {
  --space-8: 3rem;  /* Change from 2rem */
  --space-16: 5rem; /* Change from 4rem */
}
```

### Add New Color Token
1. Add to `src/styles/tokens.css`:
```css
--color-success: 16 185 129;
```

2. Add to `tailwind.config.ts`:
```ts
colors: {
  success: 'rgb(var(--color-success) / <alpha-value>)',
}
```

---

## Testing the Design System

### View Component Showcase
```bash
npm run dev
# Open http://localhost:3000/design-system
```

This page displays all components, typography, colors, buttons, cards, grids, and utilities.

---

## Best Practices

✅ **DO:**
- Use provided components and tokens
- Import components from `@/components/ui`
- Use semantic HTML elements
- Follow the typography hierarchy
- Use CSS variables for consistent spacing
- Test on multiple devices

❌ **DON'T:**
- Add custom CSS for styling (use Tailwind + components)
- Skip heading levels (h1 → h3 is bad)
- Use arbitrary colors (stick to the palette)
- Create custom buttons (extend existing variants)
- Add unnecessary borders (luxury is minimal)

---

## Dark Mode Support

All components automatically support dark mode via CSS variables. Users can toggle with system preference or explicit `color-scheme` setting.

Test locally:
```html
<html style={{color-scheme: 'dark'}}>
```

---

## Responsive Behavior

Components are mobile-first and responsive out of the box:

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| `Container` | 1rem padding | 1.5rem padding | 2rem padding |
| `Grid cols={3}` | 1 column | 2 columns | 3 columns |
| `Grid cols={4}` | 1 column | 2 columns | 4 columns |
| `Section` | 12rem V-padding | 12rem V-padding | 16rem V-padding |

---

## Next Steps

1. **Add Fonts**: Import from Google Fonts in `src/app/layout.tsx`
2. **Customize Colors**: Update tokens in `src/styles/tokens.css`
3. **Build Pages**: Use components to build product listing, detail, checkout
4. **Add Components**: Create domain-specific components that wrap UI primitives (e.g., `ProductCard`, `Header`, `Footer`)

---

## Documentation

- **Complete Guide**: `src/styles/DESIGN_SYSTEM.md`
- **Component Showcase**: Visit `/design-system` route
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Next.js Styling**: https://nextjs.org/docs/app/building-your-application/styling

---

## Questions?

Refer to `src/styles/DESIGN_SYSTEM.md` for comprehensive API documentation, examples, and best practices.
