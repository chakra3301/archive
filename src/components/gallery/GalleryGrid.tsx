'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { Product } from '@/data/types';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { fadeInVariant, staggerContainerVariant } from '@/lib/constants';

export const GalleryGrid: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Navigate to next/previous product
  const handleNext = () => {
    if (!selectedProduct) return;
    const currentIndex = products.findIndex((p) => p.id === selectedProduct.id);
    const nextIndex = (currentIndex + 1) % products.length;
    setSelectedProduct(products[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedProduct) return;
    const currentIndex = products.findIndex((p) => p.id === selectedProduct.id);
    const previousIndex = (currentIndex - 1 + products.length) % products.length;
    setSelectedProduct(products[previousIndex]);
  };

  return (
    <>
      <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-24 md:space-y-32"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeInVariant}
              className="w-full"
            >
              {/* Two-column staggered layout on desktop, single column on mobile */}
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-16 items-center`}
              >
                {/* Image - takes more space */}
                <div className="w-full md:w-2/3">
                  <ProductCard
                    product={product}
                    size="large"
                    onClick={() => setSelectedProduct(product)}
                  />
                </div>

                {/* Minimal info - appears on hover or always visible */}
                <div className="w-full md:w-1/3 flex flex-col justify-center">
                  <h3
                    className="text-2xl md:text-3xl font-normal text-charcoal mb-2"
                    style={{ fontFamily: 'var(--font-geist-mono)' }}
                  >
                    {product.title}
                  </h3>
                  <p className="text-sm text-dark-gray mb-4">{product.year}</p>
                  <p className="text-base text-charcoal leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </>
  );
};
