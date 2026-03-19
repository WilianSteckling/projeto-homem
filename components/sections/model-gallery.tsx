'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function ModelGallerySection() {
  const images = ['/img-1.png', '/img-2.png', '/img-3.png', '/img-4.png'];

  return (
    <section className="w-full bg-black border-y border-white/10 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative aspect-3/4 overflow-hidden bg-zinc-950 flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Demonstração do Método ${index + 1}`}
              className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://placehold.co/600x800/111111/ffffff?text=IMG-${index + 1}`;
              }}
            />
            {/* Overlay sutil de borda interna */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}