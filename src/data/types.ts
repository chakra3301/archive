/**
 * Product size determines grid span and visual prominence
 */
export type ProductSize = 'small' | 'medium' | 'large' | 'featured';

/**
 * Product categories for filtering and organization
 */
export type ProductCategory =
  | 'apparel'
  | 'accessories'
  | 'footwear'
  | 'objects'
  | 'experimental';

/**
 * Core product data structure
 */
export interface Product {
  id: string;
  title: string;
  category: ProductCategory;
  description: string;
  year: number;
  images: {
    primary: string; // Main display image
    gallery?: string[]; // Additional images for modal
    thumbnail?: string; // Optimized thumbnail
  };
  specs?: {
    materials?: string[];
    dimensions?: string;
    colors?: string[];
    [key: string]: unknown; // Flexible for different product types
  };
  tags?: string[];
  featured?: boolean;
  externalLink?: string; // Optional link to purchase/details
}

/**
 * Grid item configuration for curated layout
 */
export interface GridItemConfig {
  productId: string;
  size: ProductSize;
  row?: number; // Optional explicit row positioning
  column?: number; // Optional explicit column positioning
}

/**
 * Responsive grid layouts for different breakpoints
 */
export interface GridLayout {
  desktop: GridItemConfig[];
  tablet: GridItemConfig[];
  mobile: GridItemConfig[];
}
