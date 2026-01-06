# Archive - Modern Digital Showroom

A futuristic, immersive digital gallery built to showcase physical product designs with premium interactions and intentional curation.

## Features

- **Spatial Grid Layout**: Curated masonry-style gallery with varying product sizes
- **Premium Interactions**: Smooth animations, hover effects, and parallax scrolling
- **Product Modal**: Full-screen detailed view with keyboard navigation
- **Responsive Design**: Desktop-first with seamless mobile experience
- **Performance Optimized**: Lazy loading, image optimization, smooth 60fps animations

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Image Optimization**: Next.js Image

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the gallery.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── gallery/           # Gallery components
│   │   ├── GalleryGrid.tsx
│   │   ├── ProductCard.tsx
│   │   ├── GridItem.tsx
│   │   └── ProductModal.tsx
│   ├── hero/              # Hero section
│   │   ├── Hero.tsx
│   │   └── HeroBackground.tsx
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollProgress.tsx
│   └── ui/                # Reusable UI components
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── LazyImage.tsx
│       └── Modal.tsx
├── data/
│   ├── products.ts        # Product data
│   ├── grid-layout.ts     # Grid configuration
│   └── types.ts           # TypeScript types
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and constants
└── styles/                # Additional styles
```

## Adding New Products

1. Open `src/data/products.ts`
2. Add a new product object to the `products` array:

```typescript
{
  id: 'prod-XXX',
  title: 'Product Name',
  category: 'apparel',
  description: 'Product description...',
  year: 2026,
  images: {
    primary: '/images/products/your-image.jpg',
  },
  specs: {
    materials: ['Material 1', 'Material 2'],
    colors: ['Color 1', 'Color 2'],
  },
  tags: ['tag1', 'tag2'],
}
```

3. Update `src/data/grid-layout.ts` to position the product in the grid
4. Add product images to `public/images/products/`

## Customization

### Color Scheme

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  void: '#0a0a0a',
  charcoal: '#1a1a1a',
  // ... add your colors
}
```

### Animations

Modify animation variants in `src/lib/constants.ts`:

```typescript
export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
```

### Layout

Adjust grid layout in `src/components/gallery/GalleryGrid.tsx`:

```typescript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
```

## Performance

- Images are automatically optimized by Next.js
- Lazy loading for images below the fold
- Code splitting for modal components
- Framer Motion animations optimized with `transform` and `will-change`

## License

All rights reserved.
