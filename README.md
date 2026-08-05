# AgriLink Drive Hub

Cria uma landing page institucional para logistica.agrilink.ao, o sub-domínio da AgriLink dedicado exclusivamente aos motoristas/transportadores parceiros da plataforma. Esta página não é para agricultores nem compradores — é o ponto de entrada e referência operacional para quem transporta carga para a AgriLink.

Branding (manter consistência total com o site institucional agrilink.ao)

Paleta: fundo preto/verde muito escuro nas secções de destaque (hero, CTAs), fundo branco/creme nas secções de conteúdo, verde-lima vibrante como cor de destaque (títulos em itálico, botões, badges).

Tipografia: títulos grandes em serif elegante (estilo editorial, ex. "SER O MAIOR MARKETPLACE B2B AGROALIMENTAR DA SADC"), corpo de texto em sans-serif limpo.

Tom visual: institucional, sóbrio, confiável — nada de estética "app de entrega" genérica. Fotografia documental de pessoas reais em contexto profissional angolano (não stock photos genéricas).

Logo: vou anexar o logótipo oficial da AgriLink em separado — usa-o no cabeçalho e rodapé, mantendo o mesmo tratamento do site principal (verde + preto, formato horizontal).

Gera também imagens contextuais para as secções (não usar apenas texto): camião de carga em estrada angolana, motorista com smartphone a confirmar carga, agente de campo a supervisionar carregamento de produtos agrícolas (caixas de tomate, cebola, etc.), ponto de entrega numa zona urbana. As imagens devem seguir o mesmo estilo documental/editorial das fotos do site principal — pessoas reais, luz natural, sem aspecto de banco de imagens genérico.

Estrutura da página

Hero — título de impacto sobre o papel do motorista na cadeia AgriLink ("A tua carga é o motor da cadeia agroalimentar de Angola" ou similar), CTA "Regista-te como Motorista".

Como Funciona — os 9 passos do fluxo do motorista (notificação de carga → aceitação → encontro com agente de campo → carregamento supervisionado → início da viagem → partilha de localização → chegada → confirmação → pagamento), apresentados como linha do tempo visual, não lista simples.

Protocolo de Carregamento — o que se espera do motorista no ponto de recolha (checklist com o agente de campo, verificação de identidade, confirmação fotográfica da carga).

Pagamento — explicar de forma simples e visual: parte do valor libertada ao iniciar a viagem, resto na confirmação de entrega. Transparência total, sem letras miúdas.

Durante a Viagem — protocolo de comunicação (telefone sempre ligado, partilha de localização em tempo real via WhatsApp ou plataforma AgriLink), o que fazer em caso de imprevisto.

Perguntas Frequentes do Motorista — formato accordion igual ao FAQ do site principal.

CTA final — "Junta-te à rede de transportadores AgriLink", com formulário/botão de registo.

Referências visuais concretas do site institucional (agrilink.ao) a replicar

Navegação superior: logo à esquerda, menu horizontal simples (Sobre Nós, Modelos, Equipa, Perguntas Frequentes, Comunidades, Contacto), seletor de idioma PT/FR/EN, botões "Entrar" (outline) e "Registar" (preenchido, verde-lima) à direita.

Blocos de secção com etiqueta pequena em maiúsculas acima do título (ex: "— LIDERANÇA", "— NOSSA HISTÓRIA", "— CULTURA", "— COMO OPERAMOS", "— PRESENÇA NACIONAL"), sempre com um pequeno traço horizontal antes do texto, cor terracota/dourado.

Título grande em serif, subtítulo curto em sans-serif por baixo, cinza-médio.

Secção "Quatro Modelos" / "Quatro Pilares": grelha 2x2 de cards numerados (01, 02, 03, 04), cada card com categoria pequena em maiúsculas (dourado), título em serif, parágrafo curto. Este padrão de cards numerados 2x2 deve repetir-se na página da logística para "Como Funciona" ou "Protocolo".

Secção de estatísticas em linha horizontal (ex: "3 Modelos de Negócio", "B2B Plataforma Institucional", "100% Contratos Digitais", "3 Idiomas Suportados") — números grandes em serif, descrição pequena por baixo, separados por uma linha fina dourada no topo do bloco.

Bloco hero escuro tipo citação: fundo preto/verde muito escuro, frase entre aspas em serif grande e itálico com uma palavra ou frase destacada em verde-lima (ex: "SER O MAIOR MARKETPLACE B2B AGROALIMENTAR DA SADC"), legenda pequena por baixo ("AGRILINK · VISÃO 2030" — para a logística seria "AGRILINK LOGÍSTICA · [ano]").

Bloco CTA escuro final: fundo preto/verde escuro, etiqueta "— PRÓXIMO PASSO", título grande, botão branco com seta.

FAQ em accordion: lista simples com "+" à direita, sem bordas pesadas, separador fino entre perguntas.

Grelha de cidades/localizações: botões retangulares outline em grelha (como a secção "Comunidades AgriLink" com Luanda, Benguela, Huíla, etc.) — pode ser reaproveitada para mostrar corredores/rotas de transporte cobertos.

Rodapé: fundo preto/verde escuro, colunas — nome+descrição curta à esquerda, depois "PLATAFORMA", "LINKS ÚTEIS", "PRESENÇA" como títulos de coluna em maiúsculas, links por baixo. Linha de copyright + Termos/Privacidade no fundo.

Fotografia: sempre de pessoas reais em contexto de negócio angolano — reuniões, feiras, mercados — nunca ilustração cartoon nem stock genérico ocidental.

Arquitetura do projeto — importante

Não construir a página 100% em componentes reutilizáveis. A estrutura deve seguir o mesmo padrão do site institucional original: uma combinação de páginas independentes (cada secção principal como bloco próprio, editável isoladamente) e componentes reutilizáveis apenas onde faz sentido óbvio (cards numerados, botões, itens de FAQ, blocos de estatística). Evitar componentizar tudo de forma abstrata/genérica — isso dificulta a edição posterior por quem for manter o projeto. Preferir ficheiros/secções mais diretos e legíveis, à semelhança da organização mais simples e direta do site principal, em vez de uma arquitetura totalmente modular.

Notas técnicas

Página single-scroll, responsiva, consistente com a navegação (PT/FR/EN) do site principal.

Não incluir dashboard funcional nesta fase — é uma landing page institucional/informativa, o feed do motorista e do admin ficam para uma fase posterior de produto.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2ddeaa86-e926-4612-a2f8-57bbc079aa87).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
