# query-builder
react-awesome-query-builder + jsonLogic

dev/nextjs/query-builder

- [Setup](#setup)
- 🗂️ [Estrutura de pastas e arquivos do projeto](#️-estrutura-de-pastas-e-arquivos-do-projeto)
- ⚠️ [Diretrizes para desenvolvimento - Workflow de trabalho](#️-diretrizes-para-desenvolvimento---workflow-de-trabalho)
- Notas

# Setup

```sh
pnpm add @react-awesome-query-builder/ui @react-awesome-query-builder/antd json-logic-js
```

# 🗂️ Estrutura de pastas e arquivos do projeto

```sh
clear && date && tree -a -L 5 -I 'node_modules' -I '.git' -I '.next'

ter 29 jul 2025 17:43:14 -03
.
├── app
│   ├── .gitignore
│   ├── next.config.ts
│   ├── next-env.d.ts
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── pnpm-workspace.yaml
│   ├── postcss.config.mjs
│   ├── public
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── next.svg
│   │   ├── vercel.svg
│   │   └── window.svg
│   ├── README.md
│   ├── src
│   │   ├── app
│   │   │   ├── favicon.ico
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── teste
│   │   │       ├── inicialTree.json
│   │   │       ├── inicialTree.ts
│   │   │       └── page.tsx
│   │   ├── components
│   │   │   └── QueryBuilder
│   │   │       ├── bk000.css
│   │   │       ├── MyQueryBuilder.css
│   │   │       ├── MyQueryBuilder.tsx
│   │   │       └── widgets
│   │   └── mocks
│   │       ├── contextHelpers.ts
│   │       └── mockCandles.ts
│   └── tsconfig.json
├── LICENSE
└── README.md

10 directories, 28 files
```


# ⚠️ Diretrizes para desenvolvimento - Workflow de trabalho

## Instruções para ChatBot de IA - Copilot, ChatGPT, Gemini, etc.

- Manter os comentários existentes e acrescente novos comentários onde achar relevante. Separe os blocos de código que implementem funcionalidades diferentes com comentários bem descritivos no início de cada um. Pode usar emojis a vontade para destacar comentários e emojis de separadores para separar blocos.


# Notas
