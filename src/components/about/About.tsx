'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInVariant } from '@/lib/constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-off-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {/* Title */}
          <h2
            className="text-3xl md:text-4xl font-normal text-charcoal mb-12"
            style={{ fontFamily: 'var(--font-geist-mono)' }}
          >
            Studio
          </h2>

          {/* Content */}
          <div className="space-y-6 text-base md:text-lg text-charcoal leading-relaxed leading-relaxed">
            <p>
              This is a collection of physical design work—objects and garments
              created with intention, exploring the relationship between form,
              material, and function.
            </p>
            <p>
              Each piece is developed through a process of iteration and
              refinement, considering both aesthetic and practical concerns.
              The work exists in the space between art and utility, where
              everyday objects can carry meaning beyond their immediate purpose.
            </p>
            <p>
              The studio operates as a space for experimentation, where
              traditional techniques meet contemporary materials and methods.
              This archive documents the ongoing exploration of what it means to
              create objects that are both beautiful and useful.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

