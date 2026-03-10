'use client';

import React from 'react';
import { MinimalistHero } from '@/components/ui/minimalist-hero'; 

export const HeroSection = () => {
  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'PRODUCT', href: '#' },
    { label: 'STORE', href: '#' },
    { label: 'ABOUT US', href: '#' },
  ];

  return (
    <MinimalistHero
      logoText="Projeto Homem"
      navLinks={navLinks}
      mainText="O corpo deve ser firme e estável, não desleixado, tanto em movimento quanto em repouso. Pois, assim como a mente se manifesta no rosto... assim também se deve exigir um certo vigor de todo o corpo. - Marco Aurélio"
      imageSrc="/hero-image.png"
      imageAlt="A portrait of a person in a black turtleneck, in profile."
      overlayText={{
        part1: 'less is',
        part2: 'more.',
      }}
    />
  );
};