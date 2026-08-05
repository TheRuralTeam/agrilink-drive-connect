export function CtaFinalSection() {
  return (
    <section id="registo" className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
        <span className="eyebrow">Próximo Passo</span>
        <div className="mt-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h2 className="max-w-2xl text-4xl leading-[1.08] md:text-6xl">
            Junta-te à rede de <em className="text-lime">transportadores</em>{" "}
            AgriLink
          </h2>
          <form
            className="w-full max-w-md space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              required
              placeholder="Nome completo"
              className="w-full border border-ink-foreground/25 bg-transparent px-4 py-3 text-sm placeholder:text-ink-foreground/40 focus:border-lime focus:outline-none"
            />
            <input
              type="tel"
              required
              placeholder="Telefone / WhatsApp"
              className="w-full border border-ink-foreground/25 bg-transparent px-4 py-3 text-sm placeholder:text-ink-foreground/40 focus:border-lime focus:outline-none"
            />
            <input
              type="text"
              placeholder="Província de base"
              className="w-full border border-ink-foreground/25 bg-transparent px-4 py-3 text-sm placeholder:text-ink-foreground/40 focus:border-lime focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-between gap-3 bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Registar como Motorista
              <span aria-hidden>→</span>
            </button>
            <p className="text-xs text-ink-foreground/45">
              A equipa AgriLink Logística entra em contacto para validação de
              documentos.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}