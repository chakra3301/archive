'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ProductSize } from '@/data/types';
import { cn } from '@/lib/utils';
import { scaleInVariant } from '@/lib/constants';

interface GridItemProps {
  size: ProductSize;
  children: React.ReactNode;
  index: number;
}

// Grid span classes based on size
const gridSpanClasses = {
  small: 'col-span-1 row-span-1',
  medium: 'col-span-1 row-span-1',
  large: 'col-span-2 row-span-1',
  featured: 'col-span-2 row-span-2',
};

// Responsive adjustments
const responsiveClasses = {
  small: 'md:col-span-1 md:row-span-1',
  medium: 'md:col-span-1 md:row-span-1',
  large: 'md:col-span-2 md:row-span-1',
  featured: 'md:col-span-2 md:row-span-2',
};

export const GridItem: React.FC<GridItemProps> = ({ size, children, index }) => {
  return (
    <motion.div
      variants={scaleInVariant}
      viewport={{ once: true, margin: '-100px' }}
      initial="hidden"
      whileInView="visible"
      transition={{ delay: index * 0.05 }}
      className={cn(
        'relative',
        // Mobile: single column
        'col-span-1',
        // Tablet and up: responsive spans
        responsiveClasses[size],
        gridSpanClasses[size]
      )}
    >
      {children}
    </motion.div>
  );
};
