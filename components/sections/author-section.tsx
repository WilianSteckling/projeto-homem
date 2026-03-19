'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function AuthorSection() {
  return (
    <section id="metodo" className="relative w-full bg-black py-24 px-6 md:px-12 lg:px-24 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Coluna da Imagem */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-5/12 relative"
        >
          <div className="aspect-4/5 w-full relative border border-white/20 p-4">
            <div className="group w-full h-full relative overflow-hidden bg-zinc-900">
              <img
                src="/nutri.jpeg" 
                alt="Nutricionista."
                className="w-full h-full object-cover grayscale opacity-70 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = `https://placehold.co/800x1000/111111/ffffff?text=FOTO+NUTRI`;
                }}
              />
            </div>
            {/* Elemento decorativo */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-white/30 hidden md:block" />
          </div>
        </motion.div>

        {/* Coluna de Texto */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-7/12 flex flex-col space-y-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-white/50 font-mono text-xs tracking-widest uppercase">
              <span className="w-8 h-px bg-white/50" />
              A Ciência por trás do Mito
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight uppercase">
              Forjando <br />
              <span className="text-white/40 italic font-serif lowercase tracking-normal">verdadeiros</span> <br />
              Titãs.
            </h2>
          </div>

          <p className="text-white/70 leading-relaxed text-lg max-w-xl">
            A excelência física não é um dom, é uma construção clínica. Como nutricionista esportiva, minha missão foi decodificar como os corpos masculinos respondiam ao seu ápice biológico antes da era moderna. 
          </p>

          <p className="text-white/70 leading-relaxed text-lg max-w-xl">
            O <strong>O método</strong> é a união perfeita entre a ciência nutricional de ponta e a filosofia de treinamento inquebrável. Não prescrevo dietas genéricas; prescrevo a engenharia para recuperar a sua força natural.
          </p>

          <div className="pt-8 border-t border-white/10 max-w-md">
            <p className="font-mono text-sm text-white tracking-widest uppercase mb-1">Dra. Mariá Barboza</p>
            <p className="text-white/40 text-xs font-mono uppercase tracking-wider">Nutricionista</p>
          </div>
        </motion.div>

      </div>

      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-white/3 to-transparent pointer-events-none" />
    </section>
  );
}