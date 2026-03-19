'use client';

import { useEffect } from 'react';

export const ProblemSection = () => {
  useEffect(() => {
    // 1. Injeta o script do Unicorn Studio
    const embedScript = document.createElement('script');
    embedScript.type = 'text/javascript';
    embedScript.textContent = `
      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head || document.body).appendChild(i)
        }
      }();
    `;
    document.head.appendChild(embedScript);

    // 2. Injeta o CSS para esconder as marcas d'água
    const style = document.createElement('style');
    style.textContent = `
      [data-us-project] { position: relative !important; overflow: hidden !important; }
      [data-us-project] canvas { clip-path: inset(0 0 10% 0) !important; }
      [data-us-project] * { pointer-events: none !important; }
      [data-us-project] a[href*="unicorn"], [data-us-project] button[title*="unicorn"],
      [data-us-project] div[title*="Made with"], [data-us-project] .unicorn-brand,
      [data-us-project] [class*="brand"], [data-us-project] [class*="credit"],
      [data-us-project] [class*="watermark"] {
        display: none !important; visibility: hidden !important; opacity: 0 !important;
        position: absolute !important; left: -9999px !important; top: -9999px !important;
      }
    `;
    document.head.appendChild(style);

    // 3. Função agressiva para limpar resquícios da marca d'água
    const hideBranding = () => {
      const selectors = ['[data-us-project]', '[data-us-project="OMzqyUv6M3kSnv0JeAtC"]', '.unicorn-studio-container', 'canvas[aria-label*="Unicorn"]'];
      selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(container => {
          container.querySelectorAll('*').forEach((el: any) => {
            const text = (el.textContent || '').toLowerCase();
            const title = (el.getAttribute('title') || '').toLowerCase();
            const href = (el.getAttribute('href') || '').toLowerCase();
            if (text.includes('made with') || text.includes('unicorn') || title.includes('made with') || title.includes('unicorn') || href.includes('unicorn.studio')) {
              el.style.cssText = 'display:none!important;visibility:hidden!important;opacity:0!important;position:absolute!important;left:-9999px!important;top:-9999px!important;pointer-events:none!important;';
              try { el.remove(); } catch(e) {}
            }
          });
        });
      });
    };

    hideBranding();
    const interval = setInterval(hideBranding, 50);
    [500, 1000, 2000, 5000, 10000].forEach(delay => setTimeout(hideBranding, delay));

    // Cleanup quando o componente for desmontado
    return () => {
      clearInterval(interval);
      if (document.head.contains(embedScript)) document.head.removeChild(embedScript);
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full hidden lg:block">
        <div data-us-project="OMzqyUv6M3kSnv0JeAtC" style={{ width: '100%', height: '100%', minHeight: '100vh' }} />
      </div>

      <div className="absolute inset-0 w-full h-full lg:hidden bg-[radial-gradient(1px_1px_at_20%_30%,white,transparent),radial-gradient(1px_1px_at_60%_70%,white,transparent),radial-gradient(1px_1px_at_50%_50%,white,transparent)] bg-size-[200%_200%,180%_180%,250%_250%] opacity-30"></div>

      {/* Cantos Decorativos (Mantidos para a estética técnica/minimalista) */}
      <div className="absolute top-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-white/30 z-20" />
      <div className="absolute top-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-white/30 z-20" />
      <div className="absolute left-0 bottom-12 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-l-2 border-white/30 z-20" />
      <div className="absolute right-0 bottom-12 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 border-white/30 z-20" />

      {/* Conteúdo Principal */}
      <div className="relative z-10 flex min-h-screen items-center justify-end pt-16 lg:pt-0">
        <div className="w-full lg:w-1/2 px-6 lg:px-16 lg:pr-[10%]">
          <div className="max-w-lg relative lg:ml-auto">
            <div className="flex items-center gap-2 mb-3 opacity-60">
              <div className="w-8 h-px bg-white"></div>
              <span className="text-white text-[10px] font-mono tracking-wider">∞</span>
              <div className="flex-1 h-px bg-white"></div>
            </div>

            <div className="space-y-4 mb-8 text-center lg:text-left">
              <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
                "O homem sábio cuida de si antes que o tempo o obrigue. Que desgraça é para um homem envelhecer sem nunca ver a beleza e a força de que o seu corpo é capaz."
              </p>
              <p className="text-white/60 tracking-widest uppercase font-mono text-sm">— Sócrates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}