'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Frame, Instagram, Linkedin, Youtube } from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ElementType;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Product',
    links: [
      { title: 'Features', href: '#features' },
      { title: 'Pricing', href: '#pricing' },
      { title: 'Testimonials', href: '#testimonials' },
      { title: 'Integration', href: '/' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'FAQs', href: '/faqs' },
      { title: 'About Us', href: '/about' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Services', href: '/terms' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'Blog', href: '/blog' },
      { title: 'Changelog', href: '/changelog' },
      { title: 'Brand', href: '/brand' },
      { title: 'Help', href: '/help' },
    ],
  },
  {
    label: 'Social Links',
    links: [
      { title: 'Facebook', href: '#', icon: Facebook },
      { title: 'Instagram', href: '#', icon: Instagram },
      { title: 'Youtube', href: '#', icon: Youtube },
      { title: 'LinkedIn', href: '#', icon: Linkedin },
    ],
  },
];

// Atualizamos a animação para não depender do scroll (que estava bugando)
function AnimatedContainer({
  delay = 0.1,
  className,
  children,
}: {
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      className={className}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export function Footer() {
  return (
    <footer className="relative z-50 w-full flex flex-col items-center justify-center border-t border-white/10 bg-zinc-950 px-6 py-12 lg:py-16 text-white overflow-hidden">
      {/* Brilho sutil no topo do footer */}
      <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-md" />

      <div className="grid w-full max-w-7xl gap-8 xl:grid-cols-3 xl:gap-8 z-10">
        <AnimatedContainer className="space-y-4">
          <Frame className="size-8 text-white/80" />
          <p className="text-white/50 mt-8 text-sm md:mt-0 font-mono">
            © {new Date().getFullYear()} UIMIX. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.2 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs font-bold tracking-wider text-white/90 uppercase mb-6">{section.label}</h3>
                <ul className="space-y-3 text-sm text-white/50">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-white inline-flex items-center transition-colors duration-300"
                      >
                        {link.icon && <link.icon className="mr-2 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}