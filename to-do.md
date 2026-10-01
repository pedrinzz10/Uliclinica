# To-do — Uliclínica

Tarefas que dependem de informações ou decisões da clínica. Quase todos os dados ficam em `src/data.ts`.

## Obrigatório antes de publicar

- [x] **Diretor técnico, CRM e CNPJ** — recebidos em 01/10: Dr. Rui José Borralho dos Santos, CRM-PA 1383,
  CNPJ 12.071.530/0001-00 (rodapé e dados para o Google).
- [x] **Registros e especialidades** — recebidos em 01/10 para os 9 profissionais (`PROFESSIONALS`).
- [ ] **Renata** — tem foto, mas não está na lista enviada pela clínica (sem registro nem especialidade). Foi retirada da
  página Profissionais. Confirmar: é da equipe administrativa? Deve aparecer no site?
- [ ] **Conferir registros** — o CRM do Dr. José Henrique veio sem o estado; foi colocado como CRM-PA 10147
  (presumido — confirmar com a clínica). CRFa, CRP e CRN normalmente trazem a região (ex.: CRN-7); confirmar se querem incluir.
- [ ] **Política de privacidade — revisar o rascunho** — a página existe (`#/privacidade`, link no rodapé).
  Encarregado de dados: o responsável técnico, Dr. Rui José Borralho dos Santos (definido em 01/10). Contato pelo
  WhatsApp; se houver um e-mail, preencher `LEGAL.dpoEmail`. Faltam as respostas:
  exames vão para laboratório de apoio? Qual sistema de agenda/prontuário? Como o paciente recebe o resultado?
  Recomendável uma leitura por advogado antes de publicar.

## Conteúdo pendente

- [x] **Horário de atendimento** — segunda a sexta, 6h30–11h e 14h–17h (rodapé e dados para o Google).
- [x] **Ano de fundação** — 11/06/2010. "Desde 2010" em Quem Somos e "16+ anos de história" na página inicial
  (calculado automaticamente a cada ano).
- [ ] **História da clínica** — a clínica vai perguntar ao proprietário. Até lá, fica o texto sugerido em
  `src/pages/Sobre.tsx` ("Fundada em 2010, a Uliclínica nasceu…").
- [x] **Prazo dos resultados** — rotina no mesmo dia; especializados em 7 a 8 dias úteis (FAQ do Portal).
- [ ] **Link do portal de resultados** — não respondido. Enquanto `PORTAL_URL` for `null`, o botão leva ao WhatsApp.
- [x] **Card do topo da página inicial** — agora "Dr. José Alan · Clínica Geral".
- [x] **Convênios** — Pagrisa, Uliana, MX Serviços, Solplac, RS Terra Maq, Posto Goes, B4, Araguaia, Rabelo e Silveira,
  Preserve, Gusfel, Proserv Agrícola, Suzano. Seção "Convênios atendidos" na página inicial e em Serviços
  (`PARTNER_COMPANIES` / `src/components/Partners.tsx`). O site só lista os convênios, sem afirmar nada sobre
  atendimento particular ou planos. Confirmar se as empresas autorizam aparecer no site.
- [x] **Ultrassonografia** — adicionada como especialidade (Dra. Maria Cristina é ultrassonografista). Agora são 11.

## Fotos

- [x] ~~**Foto do grupo inteiro**~~ — a clínica não tem. Mantida a montagem (Dr. Rui + Dr. Oscar) em
  "Por que a Uliclínica".
- [x] **Recepção e fachada** — recebidas em 28/09.
- [ ] **Fotos de Dra. Maria Cristina, Dr. Erinaldo e Dr. José Henrique** — pedir à clínica. Hoje os cards mostram as iniciais.
- [ ] **Espaço físico** — consultório, sala de exames, laboratório, sala de fisioterapia (`GALLERY` em `src/pages/Sobre.tsx`).
- [ ] **Uma foto por especialidade** (opcional) — substitui os ícones da página Serviços.
  ⚠️ CFM: paciente identificável só com autorização por escrito; nada de "antes e depois".
- [ ] **Fotos individuais padronizadas** (se houver nova sessão) — a da Dra. Luana tem fundo escuro e as demais fundo claro.

## Melhorias

- [x] **Botão flutuante de WhatsApp** — feito em 29/09.

## Repositório

- [x] **Controle de versão** — repositório privado em github.com/pedrinzz10/Uliclinica (01/10). As fotos originais
  (`src/assets/funcionarios/`) ficam fora do git, pelo `.gitignore`.

## Decisões

- [x] **Dr. / Dra.** — "Dra." para as profissionais.
- [x] **Especialidade nos cards** — padronizado com a especialidade de cada um (lista enviada pela clínica).
- [x] **Facebook** — confirmado: `facebook.com/uliclinica`.

## Fora do contrato atual

Não fazem parte do escopo contratado por enquanto; ficam registrados para uma próxima etapa.

- Domínio do site (necessário para a prévia ao compartilhar o link e o endereço oficial no Google).
- Hospedagem e publicação.
- Mover as fotos originais (`src/assets/funcionarios/`, 146 MB) para fora de `src` (não são usadas pelo site).

> Se endereço, telefone, horário, CNPJ ou número de especialidades mudarem, atualize `src/data.ts` **e** o `index.html`
> (descrição e dados estruturados para o Google repetem esses dados).
