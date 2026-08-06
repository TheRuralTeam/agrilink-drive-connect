import { Badge, FaqItem, Reveal } from "@/components/ui-bits";

const GRUPOS = [
  {
    tema: "Documentação",
    itens: [
      { q: "Preciso de camião próprio para me registar?", a: "Sim. Aceitamos motoristas com veículo próprio ou com autorização formal do proprietário do veículo, devidamente documentada no registo." },
      { q: "Que documentos são exigidos?", a: "Bilhete de identidade, carta de condução válida, livrete e seguro do veículo. Para carga refrigerada podem ser pedidos comprovativos adicionais." },
    ],
  },
  {
    tema: "Pagamento",
    itens: [
      { q: "Quando recebo o pagamento?", a: "Metade no momento em que marcas o início da viagem, e o restante após a confirmação de entrega pelo comprador." },
      { q: "O que acontece se a carga chegar danificada?", a: "O registo fotográfico do carregamento e da descarga é comparado. Se a divergência resultar do transporte, aplica-se o previsto no contrato digital da viagem." },
    ],
  },
  {
    tema: "Operação",
    itens: [
      { q: "Posso recusar uma carga depois de aceitar?", a: "Podes, mas recusas tardias e repetidas afetam a tua classificação na rede e a prioridade nas atribuições seguintes." },
      { q: "Como partilho a minha localização?", a: "Pela plataforma Carrega ou por WhatsApp com a central, conforme o que for combinado no início da viagem." },
      { q: "Trabalho em regime exclusivo?", a: "Não. És transportador parceiro independente e podes manter outros clientes, desde que cumpras os prazos das cargas aceites." },
    ],
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-surface">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-24 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <Reveal>
          <div className="lg:sticky lg:top-24">
            <Badge>Perguntas Frequentes</Badge>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Dúvidas do <span className="text-accent-strong">motorista</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-10">
          {GRUPOS.map((g) => (
            <Reveal key={g.tema}>
              <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-accent-strong">
                {g.tema}
              </h3>
              <div className="mt-2">
                {g.itens.map((p) => (
                  <FaqItem key={p.q} question={p.q} answer={p.a} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
