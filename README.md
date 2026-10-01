# Uliclínica — site institucional

Site da Uliclínica (Ulianópolis–PA), em React + TypeScript + Vite.

## Rodando

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera a versão de produção em dist/
npm run lint
```

## Onde editar o conteúdo

Quase todo o texto e os dados ficam em `src/data.ts`:

| O quê | Constante |
|---|---|
| Endereço, WhatsApp, redes, horário | `CONTACT` |
| Diretor técnico, CRM e CNPJ (exigência do CFM) | `LEGAL` |
| Especialidades | `SERVICES` (ícones em `src/components/serviceIcons.tsx`, pelo mesmo nome) |
| Profissionais | `PROFESSIONALS` (fotos em `src/assets/profissionais/`) |
| Link do portal de resultados | `PORTAL_URL` (enquanto for `null`, o botão leva ao WhatsApp) |
| Diferenciais, valores, FAQ | `DIFFERENTIALS`, `VALUES`, `FAQ` |

Os dados de contato também aparecem em `index.html` (descrição e dados estruturados para o Google) — atualize os dois lugares.

## Páginas

Cada aba tem endereço próprio: `#/`, `#/quem-somos`, `#/profissionais`, `#/servicos`, `#/portal`.
