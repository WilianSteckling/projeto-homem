import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="px-6 py-20 sm:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-5 rounded-3xl border border-foreground/10 bg-foreground/3 p-8 sm:p-12">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Pronto para virar esse jogo?
        </h2>
        <p className="max-w-2xl text-foreground/70">
          Receba um plano claro para recuperar energia, confianca e desempenho.
        </p>
        <Button className="mt-1">Comecar agora</Button>
      </div>
    </section>
  );
}
