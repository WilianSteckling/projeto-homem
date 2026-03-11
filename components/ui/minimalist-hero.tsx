'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MinimalistHeroProps {
  logoText?: string;
  navLinks?: { label: string; href: string }[];
  mainText?: string;
  imageSrc?: string;
  imageAlt?: string;
  overlayText?: {
    part1: string;
    part2: string;
  };
  className?: string;
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-white/60 transition-colors hover:text-white"
  >
    {children}
  </a>
);

export const MinimalistHero = ({
  logoText = '',
  navLinks = [],
  mainText = '',
  imageSrc = '',
  imageAlt = 'Imagem',
  overlayText = { part1: '', part2: '' },
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        'relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-black text-white p-8 font-sans md:p-12',
        className
      )}
    >
      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wider"
        >
          {logoText}
        </motion.div>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-5 bg-white"></span>
        </motion.button>
      </header>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl grow grid-cols-1 items-center md:grid-cols-3 mb-12">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-white/80 md:mx-0">
            {mainText}
          </p>
        </motion.div>

        {/* Center Image with Circle */}
        <div className="group relative order-1 md:order-2 flex justify-center items-center h-full py-12 md:py-0">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                // Mudamos de bg-yellow-400/90 para bg-white
                className="absolute z-0 h-75 w-75 rounded-full bg-white md:h-100 md:w-100 lg:h-125 lg:w-125"
            />
            <motion.img
                src={imageSrc}
                alt={imageAlt}
              className="relative z-10 h-auto w-56 object-cover md:w-64 scale-150 lg:w-72 grayscale opacity-70 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:opacity-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = `https://placehold.co/400x600/ffffff/000000?text=Image+Not+Found`;
                }}
            />
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
        >
          <h1 className="text-7xl font-extrabold text-white md:text-8xl lg:text-9xl">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>
      </div>
      
      {/* Footer com redes sociais e localização foi completamente removido daqui! */}
    </div>
  );
};