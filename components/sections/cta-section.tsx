'use client';

import React from "react";
import { Button } from "@/components/ui/button";
  
export function CtaSection() {
  return (
    <section id="oferta" className="min-h-screen overflow-hidden relative py-20 bg-black text-white flex items-center">
      <div className="mx-auto max-w-7xl relative z-20 px-6 w-full">
        <div className="relative">
          <p className="text-sm absolute -top-4 left-20 md:left-0 font-medium tracking-wider text-white/50 font-mono">
            V. 1.0
          </p>
          <h1
            className={`z-20 relative font-bold text-center tracking-[-4px] md:tracking-[-7px] text-5xl md:text-8xl xl:tracking-[-10px] xl:text-[9rem] text-white uppercase`}
          >
            O GUIA DEFINITIVO
          </h1>
          <p className="text-2xl md:text-4xl hidden xl:block absolute -bottom-8 right-24 font-thin tracking-[6px] text-white/80 uppercase">
          </p>
          <p className="text-lg absolute xl:hidden -bottom-10 left-6 font-thin tracking-[4px] text-white/80 uppercase">
          </p>
        </div>

        <div className="grid relative mt-24 md:mt-32">
          <div className="space-y-8 flex gap-6 justify-center">
            <div className="flex flex-col md:flex-row gap-8 bg-zinc-900 w-full max-w-4xl h-fit p-8 md:p-12 items-center md:items-start border border-white/10 rounded-sm">
              
              {/* Espaço para a Capa do E-book */}
              <div className="w-48 h-64 md:w-56 md:h-72 shrink-0 shadow-2xl border border-white/10 rounded-sm overflow-hidden bg-black relative">
                <img
                  src="/capaebook.png" 
                  alt="Capa do E-book"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://placehold.co/400x600/111111/ffffff?text=Capa+do+E-book`;
                  }}
                />
              </div>

              {/* Informações da Oferta */}
              <div className="flex flex-col space-y-4 text-left justify-center h-full">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                  O MÉTODO POSSUI
                </h3>
                <div className="font-mono text-xs md:text-sm text-white/60 space-y-1">
                  <p>/ TOP 14 ALIMENTOS ESSENCIAIS PARA AUMENTAR A TESTOSTERONA </p>
                  <p>/ FOCO NA REDUÇÃO DE GORDURA ABDOMINAL</p>
                  <p>/ ESTRATÉGIAS PARA MELHORAR O FOCO MENTAL</p>
                  <p>/ CARDÁPIO SUGESTIVO </p>
                  <p>/ ROTINA ALIMENTAR PARA ALCANÇAR SUA MELHOR VERSÃO </p>
                </div>
                
                <div className="pt-6">
                  <Button className="w-full md:w-auto font-bold tracking-widest uppercase bg-white text-black hover:bg-gray-200">
                    Comprar Guia
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
        linear-gradient(to right, #404040 1px, transparent 1px),
        linear-gradient(to bottom, #404040 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          maskImage: `radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)`,
        }}
      />
    </section>
  );
}