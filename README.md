# Codigos_Vini – Monorepo de Estudos

[![Status](https://img.shields.io/badge/status-active-brightgreen)](#) [![Node](https://img.shields.io/badge/node-%3E%3D18-43853d?logo=node.js&logoColor=white)](#) [![License](https://img.shields.io/badge/license-mixed-lightgrey)](#) [![Contribuição](https://img.shields.io/badge/contribuições-bem--vindas-blue)](#)

Repositório com mini‑projetos front e back construídos durante estudos de JavaScript/TypeScript.

## Sumário
- [Visão Geral](#visão-geral)
- [Pré‑requisitos](#pré-requisitos)
- [Projetos](#projetos)
  - [nestjs-api](#nestjs-api)
  - [Lista HTML (Express + EJS)](#lista-html-express--ejs)
  - [Relogio_html (Estático)](#relogio_html-estático)
  - [Outros Fronts Estáticos](#outros-fronts-estáticos)
- [Ambiente e Variáveis](#ambiente-e-variáveis)
- [Build, Test e Lint](#build-test-e-lint)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral
Monorepo com backends simples e páginas estáticas. Backends usam variáveis de ambiente via `dotenv` com arquivos `.env.example` em cada projeto.

## Pré‑requisitos
- Node.js 18+
- npm 9+

## Projetos

### nestjs-api
- Tecnologias: NestJS, TypeScript.
- Porta padrão: `3001`.
- Instalação:
  - `cd nestjs-api`
  - `npm install`
  - Copie `.env.example` para `.env` e ajuste variáveis
- Execução:
  - `npm start` (dev: `npm run start:dev`)
- Endpoints:
  - Base: `http://localhost:3001/`
- Variáveis:
  - `PORT` (opcional; default `3001`)
  - `CORS_ORIGINS` (CSV de origens permitidas; vazio permite qualquer)
  - `NODE_ENV`, `DATABASE_URL` (opcionais)

### Lista HTML (Express + EJS)
- Tecnologias: Express, EJS, CORS.
- Porta padrão: `3000`.
- Instalação:
  - `cd "Lista HTML"`
  - `npm install`
  - Copie `.env.example` para `.env` e ajuste variáveis
- Execução:
  - `npm start` → `http://localhost:3000`
- Variáveis:
  - `PORT` (opcional; default `3000`)
  - `CORS_ORIGINS` (CSV de origens permitidas; vazio permite qualquer)
  - `NODE_ENV`, `DATABASE_URL` (opcionais)

### Relogio_html (Estático)
- Tecnologias: HTML, CSS, JS (ES Modules).
- Abertura: abra `Relogio_html/index.html` no navegador.

### Outros Fronts Estáticos
- Exemplos em `slide_html/`, `Vini´s projects/Pagina pessoal/`, `Aula facul/…`.

## Publicação no GitHub
Arquivos indesejados (como `node_modules`, `dist`, caches e `.env`) já estão excluídos via [.gitignore](file:///c:/Users/Myelin/OneDrive/Área%20de%20Trabalho/Vínicius/Codigos_Vini/.gitignore). Passos sugeridos:
1. Inicialize o repositório (se ainda não existir): `git init`
2. Verifique o que será versionado: `git status`
3. Commit inicial: `git add . && git commit -m "chore: estrutura e dashboard"`
4. Crie o repositório no GitHub e adicione o remoto, depois: `git push -u origin main`
5. Antes de publicar, confira se `.env` não está presente no commit (apenas `.env.example` vai).

## Adicionar novos projetos ao Dashboard
1. Edite o arquivo [data/projects.json](file:///c:/Users/Myelin/OneDrive/Área%20de%20Trabalho/Vínicius/Codigos_Vini/data/projects.json) adicionando um objeto com o seguinte formato:
   - `name`: Nome do projeto
   - `desc`: Breve descrição
   - `tech`: Lista de tecnologias (ex.: `["HTML","CSS","JS"]`)
   - `category`: Uma de `frontend`, `backend`, `jogos`, `calculadoras`, `utilitarios`, `exercicios`
   - `demo`: Link para a demonstração (relativo à raiz ou HTTP)
   - `repo`: Caminho da pasta do projeto (relativo à raiz)
   - `icon` (opcional): Emoji/ícone representativo
2. Abra [index.html](file:///c:/Users/Myelin/OneDrive/Área%20de%20Trabalho/Vínicius/Codigos_Vini/index.html) — o dashboard carrega automaticamente `data/projects.json`.
3. Valide os links:
   - `npm run test:links:skip-http` (verifica arquivos/pastas; pula HTTP)
   - `npm run test:links` (também verifica endpoints HTTP locais; lembre de iniciar servidores)

## Ambiente e Variáveis
Cada backend contém `.env.example` com:
```
PORT=
NODE_ENV=
CORS_ORIGINS=
DATABASE_URL=
```
Copie para `.env` e ajuste conforme necessário.

## Build, Test e Lint
- `nestjs-api`:
  - Build: `npm run build`
  - Test: `npm test`
  - Cobertura: `npm run test:cov`
  - Lint: `npm run lint`
- `Lista HTML`:
  - Sem build/test configurados; execução direta com Node.
- Dashboard:
  - Teste de links: `npm run test:links:skip-http` ou `npm run test:links`

## Contribuição
- Fork, branch por feature, PR com descrição clara.
- Padrões: uso de variáveis de ambiente, CORS com whitelist, formatação consistente.

## Licença
MIT — veja [LICENSE](file:///c:/Users/Myelin/OneDrive/Área%20de%20Trabalho/Vínicius/Codigos_Vini/LICENSE).

