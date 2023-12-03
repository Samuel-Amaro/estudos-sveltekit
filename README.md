# Estudos Aprendizagem SvelteKit

- Básico SvelteKit
 - [x] Introduction
 - [x] Routing
 - [x] Loading Data
 - [x] Headers and cookies
 - [x] Shared modules
 - [x] Forms
 - [x] API Routes
 - [x] Stores
 - [x] Errors and redirects
- Avançado SvelteKit
 - [x] Hooks
 - [x] Page Options
 - [x] Link Options
 - [x] Advanced routing
 - [x] Advanced loading
 - [x] Environment variables

## Create(riando um Projeto)

Cria um novo projeto no diretório atual

```bash
npm create svelte@latest
```

---

Cria um novo projeto no diretório my-app

```bash
npm create svelte@latest my-app
```

## Development(Desenvolvimento)

Instalar dependências

```bash
npm install
```

---

Iniciar um servidor de desenvolvimento

```bash
npm run dev
```

---

Ou inicie o servidor e abra o aplicativo em uma nova aba do navegador

```bash
npm run dev -- --open
```

## Format, Lint, Check

Formatar o código (Prettier)

```bash
npm run format
```

---

Executar o Lint

```bash
npm run lint
```

---

Executar a verificação do Svelte

```bash
npm run check #or
npm run check:watch
```

## Building(Construção)

Para criar uma versão de produção do seu aplicativo:

```bash
npm run build
```

---

Você pode visualizar a compilação de produção com

```bash
npm run preview
```

## Deployment(Implantar)

Para implantar seu aplicativo, pode ser necessário instalar um [adaptador](https://kit.svelte.dev/docs/adapters) para seu ambiente de destino.
