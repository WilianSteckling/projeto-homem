'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Frame, Instagram, Linkedin, Youtube, MessageCircle, Mail } from 'lucide-react';

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
    label: 'Contato',
    links: [
      { title: 'Whatsapp', href: 'https://wa.me/5547999998305', icon: MessageCircle },
    ],
  },
 
  {
    label: 'Redes Social',
    links: [
      { title: 'Instagram', href: 'https://www.instagram.com/nutricionistamariahbarboza/', icon: Instagram },
    ],
  },
];


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
      <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-md" />

      <div className="flex flex-col items-center text-center w-full max-w-4xl gap-12 z-10">
        <AnimatedContainer className="flex flex-col items-center space-y-4">
          <Frame className="size-8 text-white/80" />
          <p className="text-white/50 text-sm font-mono">
            © {new Date().getFullYear()} Todos os Direitos Reservados.
          </p>
        </AnimatedContainer>

        <div className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-24 w-full">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.2 + index * 0.1}>
              <div>
                <h3 className="text-xs font-bold tracking-wider text-white/90 uppercase mb-6">{section.label}</h3>
                <ul className="space-y-3 text-sm text-white/50 flex flex-col items-center">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-white inline-flex items-center justify-center transition-colors duration-300"
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