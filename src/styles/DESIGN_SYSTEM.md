# Atelier Store Design System

A premium eCommerce design system inspired by luxury brand principles (Gucci-aligned), built with Tailwind CSS and modern React components.

## Quick Start

### Importing Components
```tsx
import { Button, Container, Card, H1, Badge } from '@/components/ui'
```

### Importing Design Tokens (CSS Variables)
CSS variables are available in all stylesheets via `@import '../styles/tokens.css'` (already included in globals.css).

```css
background-color: rgb(var(--color-neutral-50));
color: rgb(var(--color-accent-red));
gap: var(--space-8);
```

---

## Color Palette

### Neutral Colors
Primary palette for text, backgrounds, borders.

- `--color-neutral-50`: #fafafa (Lightest)
- `--color-neutral-100`: #f5f5f5
- `--color-neutral-200`: #e5e5e5
- `--color-neutral-300`: #d4d4d4
- `--color-neutral-400`: #a3a3a3
- `--color-neutral-500`: #737373
- `--color-neutral-600`: #525252
- `--color-neutral-700`: #404040
- `--color-neutral-800`: #262626
- `--color-neutral-900`: #171717
- `--color-neutral-950`: #0a0a0a (Darkest)

### Accent Colors
Premium brand colors for highlights and CTAs.

- `--color-accent-red`: #b91c1c (Premium Red)
- `--color-accent-gold`: #b48d42 (Luxury Gold)

### Semantic Colors
Use these for context-aware styling.

- `--color-bg`: Background color (white in light, dark in dark mode)
- `--color-fg`: Foreground/text color (black in light, light in dark mode)
- `--color-border`: Border color (neutral-200 in light, neutral-800 in dark)

---

## Typography

### Font Families
- **Display**: Georgia Pro, Garamond, Georgia (serif) — Headlines
- **Body**: Inter, system fonts (sans-serif) — Body text

### Type Scale
Responsive sizes using `clamp()` for fluid typography.

```
h1: clamp(2.25rem, 8vw, 3.75rem)    │ 36px – 60px
h2: clamp(1.875rem, 5vw, 2.25rem)   │ 30px – 36px
h3: clamp(1.5rem, 3vw, 1.875rem)    │ 24px – 30px
h4: 1.25rem                          │ 20px
h5: 1rem (uppercase)                 │ 16px
h6: 0.875rem (uppercase)             │ 14px
```

### Line Heights
- `--line-tight`: 1.25 (Headings)
- `--line-normal`: 1.5 (Default)
- `--line-relaxed`: 1.75 (Body text)

### Letter Spacing
- `--tracking-tight`: -0.01em (Display)
- `--tracking-normal`: 0 (Default)
- `--tracking-wide`: 0.01em
- `--tracking-wider`: 0.05em (Buttons, labels)

### Component Usage
```tsx
import { H1, H2, H3 } from '@/components/ui'

<H1>Large Headline</H1>
<H2>Section Title</H2>
<H3>Subsection</H3>
```

---

## Spacing Scale

Consistent spacing using multiples of 4px (8px base).

```
--space-0: 0
--space-1: 0.25rem (4px)
--space-2: 0.5rem (8px)
--space-3: 0.75rem (12px)
--space-4: 1rem (16px)
--space-6: 1.5rem (24px)
--space-8: 2rem (32px)
--space-10: 2.5rem (40px)
--space-12: 3rem (48px)
--space-16: 4rem (64px)
--space-20: 5rem (80px)
--space-24: 6rem (96px)
```

### Container
```
--container-width: 1440px
--container-padding-mobile: 1rem
--container-padding-tablet: 1.5rem
--container-padding-desktop: 2rem
```

---

## Buttons

### Variants
1. **Primary** (Default)
   - Black background, white text
   - Use for main CTAs
   ```tsx
   <Button>Add to Cart</Button>
   ```

2. **Secondary**
   - Outlined style
   - Use for alternative actions
   ```tsx
   <Button variant="secondary">View More</Button>
   ```

3. **Tertiary**
   - Text-only with underline
   - Use for minimal actions
   ```tsx
   <Button variant="tertiary">Learn More</Button>
   ```

4. **Accent**
   - Red background, white text
   - Use for urgent/featured actions
   ```tsx
   <Button variant="accent">Buy Now</Button>
   ```

### Sizes
- `size="sm"` — Small buttons
- `size="md"` (default) — Standard buttons
- `size="lg"` — Large buttons

```tsx
<Button size="lg">Large Button</Button>
```

### Full Width
```tsx
<Button full>Checkout</Button>
```

---

## Links

### Standard Link
```tsx
import { Link } from '@/components/ui'

<Link href="/products">Browse Products</Link>
```

### Underlined Link
```tsx
<Link href="/products" underlined>
  View All
</Link>
```

---

## Cards

### Variants
1. **Default**
   - Border with subtle shadow on hover
   ```tsx
   <Card>Content</Card>
   ```

2. **Elevated**
   - Always shows shadow, no border
   ```tsx
   <Card variant="elevated">Featured Content</Card>
   ```

3. **Flat**
   - Light gray background, no border
   ```tsx
   <Card variant="flat">Alternative Style</Card>
   ```

### Structured Card
```tsx
<Card>
  <CardHeader>
    <H4>Product Title</H4>
  </CardHeader>
  <CardBody>
    Product description and details
  </CardBody>
  <CardFooter>
    <Button>Add to Cart</Button>
  </CardFooter>
</Card>
```

---

## Badges

### Variants
1. **Default** — Gray background
   ```tsx
   <Badge>New</Badge>
   ```

2. **Accent** — Red background
   ```tsx
   <Badge variant="accent">On Sale</Badge>
   ```

3. **Success** — Green background
   ```tsx
   <Badge variant="success">In Stock</Badge>
   ```

---

## Layout Components

### Container
Fixed-width container with responsive padding.

```tsx
import { Container } from '@/components/ui'

<Container>
  <H1>Page Title</H1>
</Container>
```

### Section
Vertical spacing wrapper with padding-top/bottom.

```tsx
<Section>
  <Container>
    <H2>Featured Products</H2>
  </Container>
</Section>
```

### Grid
Responsive grid layout.

```tsx
<Grid cols={3}>
  <Card>Product 1</Card>
  <Card>Product 2</Card>
  <Card>Product 3</Card>
</Grid>
```

Responsive behavior:
- Mobile: 1 column
- Tablet (768px+): 2 columns (if cols={3,4})
- Desktop (1024px+): Full cols value

---

## Borders & Dividers

### Thin Divider
```html
<div class="divider"></div>
```

### Thick Divider
```html
<div class="divider-thick"></div>
```

### Border Radius
- `--radius-none`: 0
- `--radius-xs`: 0.125rem (2px)
- `--radius-sm`: 0.25rem (4px)
- `--radius-md`: 0.5rem (8px)
- `--radius-lg`: 0.75rem (12px)

---

## Shadows

```
--shadow-xs: Subtle
--shadow-sm: Light
--shadow-md: Medium
--shadow-lg: Strong
```

Used by `.card:hover`, `.card-elevated`, and custom elevations.

---

## Transitions

All interactive elements use smooth transitions.

```
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1)
```

Respects `prefers-reduced-motion: reduce` (animations disabled).

---

## Utility Classes

### Text Alignment
```html
<p class="text-center">Centered</p>
<p class="text-right">Right-aligned</p>
```

### Font Weight
```html
<span class="font-light">Light</span>
<span class="font-semibold">Semibold</span>
<span class="font-bold">Bold</span>
```

### Text Transform
```html
<span class="uppercase">Uppercase</span>
<span class="capitalize">Capitalize</span>
```

### Text Truncation
```html
<p class="truncate">Long text...</p>
<p class="line-clamp-2">Multi-line truncation</p>
```

### Flexbox
```html
<div class="flex flex-center">Centered content</div>
<div class="flex flex-between">Space between</div>
```

### Gap (Spacing between flex/grid items)
```html
<div class="flex gap-4">Item 1</div> <!-- 16px gap -->
<div class="flex gap-8">Item 2</div> <!-- 32px gap -->
```

---

## Responsive Design

### Breakpoints
- Mobile: < 768px (default)
- Tablet: 768px – 1023px
- Desktop: 1024px+

### Hide/Show Classes
```html
<!-- Hide on mobile, show on tablet+ -->
<nav class="hide-mobile">
  Navigation
</nav>

<!-- Hide on tablet, show on mobile and desktop -->
<nav class="hide-tablet mobile-menu">
  Mobile Navigation
</nav>
```

---

## Dark Mode

All components automatically support dark mode via CSS variables.

Test with:
```html
<html style="color-scheme: dark">
  <!-- Page renders in dark mode -->
</html>
```

Or system preference:
```css
@media (prefers-color-scheme: dark) {
  /* Automatically applied */
}
```

---

## Accessibility

### Focus Visible
All interactive elements have a visible focus state (red outline).

```css
*:focus-visible {
  outline: 2px solid rgb(var(--color-accent-red));
  outline-offset: 2px;
}
```

### Screen Reader Only
```html
<span class="sr-only">Additional info for screen readers</span>
```

### Semantic HTML
Always use semantic elements:
- `<button>` for actions
- `<a>` for navigation
- `<h1>–<h6>` for headings
- `<section>`, `<article>`, `<nav>` for structure

---

## Best Practices

1. **Use Components Over Classes**
   - Prefer `<Button>` over `<button class="btn-primary">`
   - Easier to maintain, type-safe

2. **Consistent Spacing**
   - Use `--space-*` variables
   - Never use arbitrary spacing

3. **Color Usage**
   - Use semantic color tokens (`--color-bg`, `--color-fg`)
   - Accent sparingly for premium feel

4. **Typography Hierarchy**
   - Use appropriate heading levels
   - Never skip levels (H1 → H2 → H3)

5. **Responsive Images**
   - Always use `next/image` for optimization
   - Lazy load below the fold

6. **Performance**
   - Minimize custom CSS
   - Leverage Tailwind utilities
   - Use CSS variables for theming

---

## Example: Product Page

```tsx
import { Container, Section, Grid, H1, H2, Card, Button, Badge } from '@/components/ui'

export default function ProductPage() {
  return (
    <>
      <Section>
        <Container>
          <H1>Featured Collection</H1>
        </Container>
      </Section>

      <Section>
        <Container>
          <Grid cols={4}>
            {products.map(product => (
              <Card key={product.id} variant="elevated">
                <Badge variant="accent">New</Badge>
                <img src={product.image} alt={product.name} />
                <H4>{product.name}</H4>
                <p>${product.price}</p>
                <Button full>Add to Cart</Button>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}
```

---

## Customization

### Changing Brand Colors
Edit `src/styles/tokens.css`:
```css
:root {
  --color-accent-red: #YOUR_COLOR;
  --color-accent-gold: #YOUR_COLOR;
}
```

### Changing Fonts
Edit `src/styles/tokens.css`:
```css
:root {
  --font-display: 'Your Serif', serif;
  --font-body: 'Your Sans', sans-serif;
}
```

Ensure fonts are loaded in `src/app/layout.tsx` (Google Fonts, Typekit, etc.).

### Adding New Tokens
1. Add to `src/styles/tokens.css`
2. Reference in components via `var(--token-name)`
3. Optionally add to Tailwind config for utility generation

---

## Component API Reference

### Button
```tsx
<Button
  variant="primary" | "secondary" | "tertiary" | "accent"
  size="sm" | "md" | "lg"
  full={boolean}
  disabled={boolean}
  onClick={handler}
>
  Text
</Button>
```

### Link
```tsx
<Link href="/path" underlined={boolean}>
  Text
</Link>
```

### Card
```tsx
<Card variant="default" | "elevated" | "flat">
  <CardHeader>Title</CardHeader>
  <CardBody>Content</CardBody>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Heading
```tsx
<H1 | H2 | H3 | H4 | H5 | H6>
  Text
</H1>
```

### Grid
```tsx
<Grid cols={1 | 2 | 3 | 4}>
  {items}
</Grid>
```

### Badge
```tsx
<Badge variant="default" | "accent" | "success">
  Text
</Badge>
```

---

## Files to Know

- **Design Tokens**: `src/styles/tokens.css`
- **Global Styles**: `src/app/globals.css`
- **Components**: `src/components/ui/*`
- **Tailwind Config**: `tailwind.config.ts`

---

## Resources

- [Tailwind CSS Docs](https://tailwindcss.com)
- [Next.js Styling](https://nextjs.org/docs/app/building-your-application/styling)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Web Accessibility Standards](https://www.w3.org/WAI/WCAG21/quickref/)
