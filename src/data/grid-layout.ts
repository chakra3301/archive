import { GridLayout } from './types';

/**
 * Curated grid layout configuration
 * Intentional placement and sizing for spatial, non-uniform gallery
 */
export const gridLayout: GridLayout = {
  // Desktop: 4-column grid with varied sizes
  desktop: [
    { productId: 'prod-001', size: 'featured' }, // 2x2 span
    { productId: 'prod-002', size: 'medium' }, // 1x1
    { productId: 'prod-003', size: 'medium' }, // 1x1
    { productId: 'prod-004', size: 'large' }, // 2x1 span
    { productId: 'prod-005', size: 'medium' }, // 1x1
    { productId: 'prod-006', size: 'large' }, // 2x1 span
    { productId: 'prod-007', size: 'small' }, // 1x1
    { productId: 'prod-008', size: 'small' }, // 1x1
    { productId: 'prod-009', size: 'medium' }, // 1x1
    { productId: 'prod-010', size: 'large' }, // 2x1 span
  ],

  // Tablet: 2-column grid, simplified
  tablet: [
    { productId: 'prod-001', size: 'large' }, // 2x1
    { productId: 'prod-002', size: 'medium' },
    { productId: 'prod-003', size: 'medium' },
    { productId: 'prod-004', size: 'large' }, // 2x1
    { productId: 'prod-005', size: 'medium' },
    { productId: 'prod-006', size: 'medium' },
    { productId: 'prod-007', size: 'medium' },
    { productId: 'prod-008', size: 'medium' },
    { productId: 'prod-009', size: 'large' }, // 2x1
    { productId: 'prod-010', size: 'medium' },
  ],

  // Mobile: Single column
  mobile: [
    { productId: 'prod-001', size: 'large' },
    { productId: 'prod-002', size: 'medium' },
    { productId: 'prod-003', size: 'medium' },
    { productId: 'prod-004', size: 'large' },
    { productId: 'prod-005', size: 'medium' },
    { productId: 'prod-006', size: 'medium' },
    { productId: 'prod-007', size: 'medium' },
    { productId: 'prod-008', size: 'medium' },
    { productId: 'prod-009', size: 'medium' },
    { productId: 'prod-010', size: 'medium' },
  ],
};
