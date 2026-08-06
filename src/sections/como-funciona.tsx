import driverPhone from "@/assets/driver-phone.jpg";
import { Badge, Reveal } from "@/components/ui-bits";

const PASSOS = [
  { n: "01", titulo: "Notificação de carga", texto: "Recebes um alerta com origem, destino, tipo de produto, peso estimado e valor do frete." },
  { n: "02", titulo: "Aceitação", texto: "Confirmas a carga na plataforma. A partir daqui ficas responsável pela rota atribuída." },
  { n: "03", titulo: "Encontro com o agente de campo", texto: "Deslocas-te ao ponto de recolha e identificas-te junto do agente AgriLink." },
  { n: "04", titulo: "Carregamento supervisionado", texto: "O agente verifica quantidade e qualidade. Nada sai do ponto sem checklist concluído." },
  { n: "05", titulo: "Início da viagem", texto: "Marcas a partida na plataforma. É esse registo que liberta a primeira parte do pagamento." },
  { n: "06", titulo: "Partilha de localização", texto: "Manténs a posição visível durante todo o percurso, via plataforma ou WhatsApp." },
  { n: "07", titulo: "Chegada", texto: "Assinalas a chegada ao ponto de entrega e aguardas a receção pelo comprador." },
  { n: "08", titulo: "Confirmação de entrega", texto: "Fotografia da descarga e validação do destinatário fecham formalmente a viagem." },
  { n: "09", titulo: "Pagamento", texto: "O valor remanescente é libertado após a confirmação, sem processos paralelos." },
];

export function ComoFuncionaSection() {
  return (
    <section id="como-funciona" className="bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-32 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <Badge>Como Funciona</Badge>
              <h2 className="mt-6 text-4xl md:text-5xl">
                Nove passos, do alerta ao{" "}
                <span className="text-accent-strong">pagamento</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                O fluxo é sempre o mesmo, em qualquer corredor do país. Sabes o
                que acontece a seguir em cada momento da viagem.
              </p>
              <img
                src={driverPhone}
                alt="Motorista a confirmar a carga no telemóvel"
                width={1200}
                height={1408}
                loading="lazy"
                className="mt-10 hidden aspect-[4/5] w-full rounded-2xl object-cover lg:block"
              />
            </Reveal>
          </div>

          <ol className="relative border-l-2 border-border pl-8">
            {PASSOS.map((p, i) => (
              <li key={p.n} className="relative pb-9 last:pb-0">
                <span className="absolute -left-[2.4rem] top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[0.7rem] font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <Reveal delay={i * 40}>
                  <div className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-accent-strong">
                    Passo {p.n}
                  </div>
                  <h3 className="mt-1.5 text-2xl">{p.titulo}</h3>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-muted-foreground">
                    {p.texto}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
