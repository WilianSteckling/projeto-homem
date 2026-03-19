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
      mainText="Transforme seu corpo sua mente e sua potencia masculina em poucas semanas. "
      imageSrc="/hero-image2.png" 
      imageAlt="Homem com físico atlético representando o projeto"
      overlayText={{
        part1: 'forje seu',
        part2: 'legado.',
      }}
    />
  );
};