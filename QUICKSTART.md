# Quick Start Guide

## Run the Gallery

```bash
# Start development server
npm run dev
```

Visit **http://localhost:3000** (or the port shown in terminal)

---

## What You'll See

1. **Hero Section**: Animated gradient background with floating orbs and scroll indicator
2. **Gallery Grid**: Curated spatial layout with 10 placeholder products
3. **Product Cards**: Hover effects with glow, scale, and info overlay
4. **Product Modal**: Click any product to view full details
5. **Keyboard Navigation**: Use arrow keys in modal, ESC to close
6. **Scroll Progress**: Gradient progress bar at top

---

## Next Steps

### 1. Replace Placeholder Images

Add your product images to:
```
public/images/products/
```

Then update `src/data/products.ts`:
```typescript
images: {
  primary: '/images/products/your-image.jpg',
}
```

### 2. Update Product Data

Edit `src/data/products.ts`:
- Change titles, descriptions, specs
- Update categories, tags, years
- Add or remove products

### 3. Customize Colors

Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  void: '#0a0a0a',      // Background
  charcoal: '#1a1a1a',  // Cards
  'accent-blue': '#3b82f6',  // Accent color
}
```

### 4. Adjust Layout

Modify grid in `src/data/grid-layout.ts`:
- Change product sizes (small, medium, large, featured)
- Reorder products
- Adjust responsive layouts

### 5. Customize Hero Text

Edit `src/components/hero/Hero.tsx`:
- Change headline and subtitle
- Update brand messaging

### 6. Update Branding

Edit `src/components/layout/Header.tsx` and `Footer.tsx`:
- Change logo text
- Add navigation links
- Update social media links

---

## Features

✅ Fully responsive (mobile, tablet, desktop)
✅ Dark mode optimized
✅ Smooth animations (Framer Motion)
✅ Lazy loading images
✅ SEO ready
✅ TypeScript for type safety
✅ Modular component architecture

---

## Build for Production

```bash
# Create optimized build
npm run build

# Run production server
npm start
```

---

## Common Customizations

### Add More Products
1. Open `src/data/products.ts`
2. Copy an existing product object
3. Update the `id`, `title`, and other fields
4. Add to `src/data/grid-layout.ts` with desired size

### Change Grid Columns
In `src/components/gallery/GalleryGrid.tsx`, update:
```typescript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
```

### Modify Animations
Edit animation variants in `src/lib/constants.ts`

### Update Fonts
Change fonts in `src/app/layout.tsx` (currently using Geist Sans/Mono)

---

## Troubleshooting

**Port already in use?**
- Next.js will automatically use the next available port
- Or specify: `npm run dev -- -p 3001`

**Images not loading?**
- Check file paths are correct
- Ensure images are in `public/images/products/`
- Use `/images/products/filename.jpg` format (leading slash)

**Animations stuttering?**
- Check Chrome DevTools Performance tab
- Reduce number of animated elements
- Disable animations for `prefers-reduced-motion`

---

Enjoy building your digital showroom! 🎨
