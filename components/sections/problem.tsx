export function Problem() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-16 sm:px-10">
      <h2 className="text-3xl font-bold sm:text-4xl">The Problem</h2>
      <p className="max-w-3xl text-foreground/70">
        Cansaco constante, foco baixo e queda de rendimento nao aparecem do nada.
        Sao sinais de uma rotina que foi se desorganizando com o tempo: sono ruim,
        estresse alto, alimentacao irregular e falta de estrategia.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        <ProblemItem label="Energia" value="Baixa" />
        <ProblemItem label="Foco" value="Instavel" />
        <ProblemItem label="Confianca" value="Em queda" />
      </div>
    </section>
  );
}

function ProblemItem({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-xl border border-foreground/10 p-4">
      <p className="text-sm text-foreground/60">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </article>
  );
}
