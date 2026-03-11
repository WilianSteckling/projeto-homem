'use client';

import React from 'react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';

export const HeroSection = () => {
  const navLinks = [
    { label: 'O DECLÍNIO', href: '#' },
    { label: 'O MÉTODO', href: '#' },
    { label: 'GARANTIR VAGA', href: '#' },
  ];

  return (
    <MinimalistHero
      logoText="ARETÊ."
      navLinks={navLinks}
      mainText="O mundo moderno enfraqueceu nossa biologia. Resgate a força, a estética e a vitalidade dos antigos com um treinamento forjado nos princípios da excelência clássica."
      imageSrc="/hero-image.png"
      imageAlt="Homem com físico atlético representando o projeto"
      overlayText={{
        part1: 'forje seu',
        part2: 'legado.',
      }}
    />
  );
};
