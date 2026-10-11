# wensch.dev — portfólio

Portfólio pessoal de Mateus Wensch: apresentação, trajetória, skills, projetos e contato, em português e inglês.

## Stack

React 18 · Vite 5 · TypeScript · Tailwind CSS 3 · Framer Motion · i18next (`pt`/`en`) · Vercel (hospedagem + Analytics)

## Como rodar

```bash
npm install
npm run dev        # servidor de desenvolvimento
npm run build      # typecheck + build de produção (dist/)
npm run preview    # serve o build local
```

Qualidade:

```bash
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm test           # Vitest (componentes + integridade dos dados)
```

> O projeto mantém `package-lock.json` **e** `pnpm-lock.yaml`. Ao mudar dependências, atualize os dois
> (`npm install` e `pnpm install --lockfile-only`).

## Estrutura

```
src/
  components/   Seções da página (Hero, About, Skills, Projects, Contact) + Header, fundo de partículas
  i18n/         pt.json, en.json e a inicialização do i18next
  test/         Setup dos testes (stubs de APIs que o jsdom não tem)
public/
  img/sites/    Capas dos projetos (WebP, ~1200px de largura)
  files/        CVs em PDF (pt e en)
  favicon_io/   Ícones e site.webmanifest
  og-image.jpg  Imagem de compartilhamento (Open Graph)
tests/          Testes de integridade dos dados (traduções, projetos, arquivos estáticos)
vercel.json     Headers de segurança (CSP etc.) e cache
```

## Como editar o conteúdo

- **Textos:** `src/i18n/pt.json` e `src/i18n/en.json`. Os dois precisam ter as mesmas chaves (o teste de dados acusa se não tiverem).
  Dentro de listas de destaques, `<b>texto</b>` vira negrito.
- **Novo projeto:** adicione um item em `projects.items` nos **dois** idiomas **e** uma entrada, na mesma posição,
  no array `projects` de `src/components/Projects.tsx` (imagem, link e cores). O teste confere que as quantidades batem.
- **Capas:** WebP em `public/img/sites/`, proporção ~1,9:1 (os cards usam `aspect-video` com `object-cover`).
- **Skills:** `src/components/Skills.tsx` (cada tecnologia em uma única categoria; títulos em `skills.categories` nas traduções).
- **Experiência profissional:** array `timeline` em `src/components/About.tsx` + traduções `about.experience`.

## Deploy

Vercel, a partir da branch principal. O `vercel.json` aplica os headers de segurança. Se adicionar um serviço externo
(fonte, analytics, embed), libere o domínio na `Content-Security-Policy` — o script do Vercel Analytics é servido pelo próprio domínio.
