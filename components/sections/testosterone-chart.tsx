'use client';

import React from 'react';
import { motion } from 'framer-motion';

const chartData = [
  {
    period: '1900 - 1930',
    levels: '800 - 1.000+',
    height: '100%', // Barra cheia
    context: 'Inferência baseada em força de preensão manual, baixíssima obesidade e ausência de disruptores endócrinos modernos.',
  },
  {
    period: '1987 - 1989',
    levels: '600 - 700',
    height: '70%', // Queda proporcional
    context: 'Dados do Massachusetts Male Aging Study (MMAS), um dos marcos iniciais da pesquisa.',
  },
  {
    period: '2002 - 2004',
    levels: '500 - 600',
    height: '55%', // Continua caindo
    context: 'Queda documentada de aproximadamente 1% ao ano nos níveis populacionais.',
  },
  {
    period: '2020 - 2026',
    levels: '400 - 450',
    height: '40%', // Nível atual
    context: 'Níveis atuais. Laboratórios têm reduzido o limite inferior do "normal" (que antes era 300 e hoje chega a 250 ou 200 em alguns locais).',
  },
];

export const TestosteroneChart = () => {
  return (
    <section className="relative min-h-screen w-full bg-black py-24 px-6 md:px-12 flex items-center justify-center font-sans overflow-hidden">
      
      {/* Grade de fundo para dar um toque técnico/analítico */}
      <div className="absolute inset-0 z-0 opacity-10"
           style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
        
        {/* Lado Esquerdo: O Gráfico Visual */}
        <div className="w-full md:w-1/2 h-125 flex items-end justify-between border-b border-l border-white/20 pb-4 pl-4 relative">
          
          {/* Rótulo do Eixo Y */}
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-white/50 text-xs tracking-widest font-mono whitespace-nowrap">
            MÉDIA ESTIMADA (ng/dL)
          </div>

          {chartData.map((data, index) => (
            <div key={index} className="flex flex-col items-center group w-1/5 relative">
              
              {/* Valor flutuante acima da barra */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.2), duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-4 text-center"
              >
                <span className="text-white font-bold text-lg md:text-xl block">{data.levels}</span>
              </motion.div>

              {/* A Barra Animada */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: data.height }}
                transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`w-full max-w-15 rounded-t-sm relative ${index === 3 ? 'bg-red-500/80' : 'bg-white/80'} group-hover:brightness-125 transition-all`}
              >
                {/* Efeito de brilho interno na barra */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
              </motion.div>

              {/* Ano no Eixo X */}
              <div className="mt-4 text-white/70 text-xs md:text-sm font-mono text-center">
                {data.period.replace(' - ', '\n')}
              </div>
            </div>
          ))}
        </div>

        {/* Lado Direito: Explicação e Contexto */}
        <div className="w-full md:w-1/2 flex flex-col space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">O Declínio <br/><span className="text-white/50">Silencioso.</span></h2>
            <p className="text-white/70 leading-relaxed">
              Os níveis de testosterona masculina estão despencando geração após geração. O que antes era considerado o padrão natural do corpo masculino, hoje é uma raridade biológica.
            </p>
            <hr className="my-6 border-white/20" />
          </div>

          <div className="space-y-6">
            {chartData.map((data, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 border-l-2 border-white/10 pl-4 hover:border-white/50 transition-colors"
              >
                <div className="text-xs font-mono text-white/40 mt-1 min-w-20">
                  {data.period}
                </div>
                <div className="text-sm text-white/80 leading-relaxed">
                  {data.context}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};