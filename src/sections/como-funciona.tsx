import driverPhone from "@/assets/driver-phone.jpg";

const PASSOS = [
  {
    n: "01",
    titulo: "Notificação de carga",
    texto:
      "Recebes um alerta com origem, destino, tipo de produto, peso estimado e valor do frete.",
  },
  {
    n: "02",
    titulo: "Aceitação",
    texto:
      "Confirmas a carga na plataforma. A partir daqui ficas responsável pela rota atribuída.",
  },
  {
    n: "03",
    titulo: "Encontro com o agente de campo",
    texto:
      "Deslocas-te ao ponto de recolha e identificas-te junto do agente AgriLink.",
  },
  {
    n: "04",
    titulo: "Carregamento supervisionado",
    texto:
      "O agente verifica quantidade e qualidade. Nada sai do ponto sem checklist concluído.",
  },
  {
    n: "05",
    titulo: "Início da viagem",
    texto:
      "Marcas a partida na plataforma. É esse registo que liberta a primeira parte do pagamento.",
  },
  {
    n: "06",
    titulo: "Partilha de localização",
    texto:
      "Manténs a posição visível durante todo o percurso, via plataforma ou WhatsApp.",
  },
  {
    n: "07",
    titulo: "Chegada",
    texto:
      "Assinalas a chegada ao ponto de entrega e aguardas a receção pelo comprador.",
  },
  {
    n: "08",
    titulo: "Confirmação de entrega",
    texto:
      "Fotografia da descarga e validação do destinatário fecham formalmente a viagem.",
  },
  {
    n: "09",
    titulo: "Pagamento",
    texto:
      "O valor remanescente é libertado após a confirmação, sem processos paralelos.",
  },
];

export function ComoFuncionaSection() {
  return (
    <section id="como-funciona" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">Como Operamos</span>
            <h2 className="mt-6 text-4xl leading-tight md:text-5xl">
              Nove passos, do alerta ao <em className="text-primary">pagamento</em>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              O fluxo é sempre o mesmo, em qualquer corredor do país. Sabes o que
              acontece a seguir em cada momento da viagem.
            </p>
            <img
              src={driverPhone}
              alt="Motorista a confirmar a carga no telemóvel"
              width={1200}
              height={1408}
              loading="lazy"
              className="mt-10 hidden aspect-[4/5] w-full object-cover lg:block"
            />
          </div>

          <ol className="relative border-l border-border pl-8">
            {PASSOS.map((p) => (
              <li key={p.n} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[2.28rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-gold bg-background">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  Passo {p.n}
                </div>
                <h3 className="mt-1.5 text-2xl">{p.titulo}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {p.texto}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}