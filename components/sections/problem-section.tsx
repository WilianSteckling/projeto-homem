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

      {/* Header da Seção */}
      <div className="absolute top-0 left-0 right-0 z-20 border-b border-white/20">
        <div className="container mx-auto px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="font-mono text-white text-xl lg:text-2xl font-bold tracking-widest italic -skew-x-12">UIMIX</div>
            <div className="h-3 lg:h-4 w-px bg-white/40"></div>
            <span className="text-white/60 text-[10px] font-mono">EST. 2025</span>
          </div>
          <div className="hidden lg:flex items-center gap-3 text-[10px] font-mono text-white/60">
            <span>LAT: 37.7749°</span><div className="w-1 h-1 bg-white/40 rounded-full"></div><span>LONG: 122.4194°</span>
          </div>
        </div>
      </div>

      {/* Cantos Decorativos */}
      <div className="absolute top-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-white/30 z-20" />
      <div className="absolute top-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-white/30 z-20" />
      <div className="absolute left-0 bottom-12 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-l-2 border-white/30 z-20" />
      <div className="absolute right-0 bottom-12 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 border-white/30 z-20" />

      {/* Conteúdo Principal */}
      <div className="relative z-10 flex min-h-screen items-center justify-end pt-16 lg:pt-0 mt-12">
        <div className="w-full lg:w-1/2 px-6 lg:px-16 lg:pr-[10%]">
          <div className="max-w-lg relative lg:ml-auto">
            <div className="flex items-center gap-2 mb-3 opacity-60">
              <div className="w-8 h-px bg-white"></div>
              <span className="text-white text-[10px] font-mono tracking-wider">∞</span>
              <div className="flex-1 h-px bg-white"></div>
            </div>

            <h1 className="text-2xl lg:text-5xl font-bold text-white mb-4 leading-tight font-mono tracking-widest whitespace-nowrap lg:-ml-[5%]">
              ENDLESS PURSUIT
            </h1>

            <div className="relative">
              <p className="text-xs lg:text-base text-gray-300 mb-6 leading-relaxed font-mono opacity-80">
                Like Sisyphus, we push forward — not despite the struggle, but because of it. Every iteration, every pixel, every line of code is our boulder.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
              <button className="px-6 py-2.5 bg-transparent text-white font-mono text-sm border border-white hover:bg-white hover:text-black transition-all">
                BEGIN THE CLIMB
              </button>
              <button className="px-6 py-2.5 bg-transparent text-white font-mono text-sm border border-white hover:bg-white hover:text-black transition-all">
                EMBRACE THE JOURNEY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}