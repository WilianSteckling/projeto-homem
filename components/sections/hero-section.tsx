'use client';

import React from 'react';
import { MinimalistHero } from '@/components/ui/minimalist-hero'; 

export const HeroSection = () => {
  const navLinks = [
    { label: 'O DECLÍNIO', href: '#declinio' },
    { label: 'O MÉTODO', href: '#metodo' },
    { label: 'GARANTIR VAGA', href: '#oferta' },
  ];

  return (
    <MinimalistHero
      logoText="O FIM DO HOMEM CANSADO"
      navLinks={navLinks}
      mainText="Homens com testosterona alta têm boas ações, boas decisões e foco mental."
      imageSrc="/hero.png" 
      imageAlt="Homem com físico atlético representando o projeto"
      overlayText={{
        part1: 'forje seu',
        part2: 'legado.',
      }}
    />
  );
};