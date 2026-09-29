# Atelier Store Homepage

## Overview
A premium ecommerce homepage inspired by luxury fashion brands like Gucci, featuring large editorial imagery, featured collections, and product-focused sections.

## Features Implemented

### 1. Header & Navigation
- **Sticky Navigation Bar**: Remains visible while scrolling
- **Responsive Design**: Full navigation on desktop, hamburger menu on mobile
- **Interactive Elements**: Search, account, and shopping bag icons
- **Branding**: Atelier logo in display font

### 2. Hero Section
- Full-screen editorial image with overlay
- Large, premium typography ("Elevate Your Essence")
- Compelling subheadline
- Clear call-to-action button ("Explore Collections")
- Optimal contrast for readability

### 3. Discover Collections
- 4-column responsive grid
- Featured collection cards (Spring 2025, Ready to Wear, Accessories, Limited Edition)
- High-quality Unsplash imagery
- Hover effects with scale transitions
- Descriptive text and explore links

### 4. Signature Pieces (Featured Products)
- 3-column product grid (responsive to 2 columns on tablet, 1 on mobile)
- 6 featured products with:
  - Premium imagery
  - Product name and category
  - Price formatting
  - Star ratings and review counts
  - "View Product" CTA buttons
- Elegant card design with hover effects

### 5. Our Story Section
- 3-column content section
- Premium imagery with hover effects
- Story titles and excerpts
- Section-based storytelling

### 6. Newsletter Signup
- Dark section with contrasting white text
- Email input field with styling
- Prominent subscribe button
- Compelling copy

### 7. Footer
- 4-column layout with:
  - Shop links
  - About links
  - Support/Customer Service links
  - Legal/Privacy links
- Social media links (Instagram, Twitter, LinkedIn)
- Copyright information
- Responsive stacking on mobile

## Design System Adherence

### Typography
- **Display Font**: Georgia/Garamond Pro (serif) - Premium luxury feel
- **Body Font**: Inter (sans-serif) - Clean, modern readability
- **Font Sizes**: Responsive using CSS `clamp()` for fluid typography

### Color Palette
- **Primary**: Neutral 900 (very dark gray/black) - Text and primary elements
- **Accent**: Red (RGB: 185 28 28) - Call-to-action buttons and hover states
- **Gold**: Secondary accent (RGB: 180 141 66) - Available for future use
- **Neutral Scale**: 50-950 for backgrounds, borders, and text variations
- **Dark Mode**: Fully supported with automatic color inversion

### Spacing
- 8px base unit spacing scale
- Container: 1440px max-width
- Responsive padding (1rem mobile, 1.5rem tablet, 2rem desktop)
- Section padding: 4rem vertical (reduced to 3rem on mobile)

### Responsive Breakpoints
- **Mobile**: Default (< 768px)
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Container**: Max 1440px with fluid padding

### Components Used
- `Container`: Full-width container with responsive padding
- `Section`: Section wrapper with vertical rhythm
- `Grid`: Flexible grid (1-4 columns)
- `Button`: Primary, secondary, tertiary, and accent variants
- `ProductCard`: Custom product display component
- `CollectionCard`: Custom collection display component
- `Header`: Custom sticky navigation component

## Sample Data
All content uses realistic sample data:
- **Products**: 6 featured items with realistic pricing ($425-$2,850)
- **Collections**: 4 curated collections with descriptions
- **Stories**: 3 brand story sections
- **Images**: All from Unsplash (licensed for commercial use)

## Image Configuration
- Next.js Image optimization enabled
- Unsplash domain configured in `next.config.ts`
- Responsive image sizes with proper aspect ratios
- Lazy loading support

## Performance Optimizations
- Next.js Image component for optimization
- CSS custom properties for theming
- Smooth transitions and hover effects
- Semantic HTML structure
- No console errors or warnings

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design works on all screen sizes
- Smooth scrolling enabled
- Font smoothing applied for crisp text
- Focus visible indicators for keyboard navigation

## Testing Status
✅ Page loads without errors
✅ All sections render correctly
✅ All content displays properly
✅ Responsive design verified
✅ No linting errors
✅ TypeScript type safety maintained
✅ Accessibility features included

## Next Steps for Enhancement
1. Add product filtering and sorting
2. Implement shopping cart functionality
3. Add product detail pages
4. Create collection pages
5. Add customer reviews section
6. Implement search functionality
7. Add authentication/user accounts
8. Connect to real product database
9. Add payment processing (Stripe/PayPal)
10. Implement analytics tracking

## Running Locally
```bash
npm run dev
# Opens at http://localhost:3000
```

## Build for Production
```bash
npm run build
npm start
```
