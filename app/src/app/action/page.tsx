// app/src/app/action/page.tsx
"use client";
import React from "react";
import ActionBuilder from "@/components/query-builder/action/ActionBuilder";
import { inicialTree } from "./inicialTree";
import type { Config, ImmutableTree } from '@react-awesome-query-builder/antd';
import { BasicConfig } from '@react-awesome-query-builder/antd';
import { Utils as QbUtils } from '@react-awesome-query-builder/antd';
import { AntdConfig, AntdWidgets } from '@react-awesome-query-builder/antd';
//import '@react-awesome-query-builder/antd/css/styles.css';
//import "@/components/query-builder/MyQueryBuilder.css";
//import "./query-builder-actions.css";

// ============================================================================
// ⚙️ Configuração do Query Builder
// ============================================================================
// Esta configuração define os campos, operadores e funções disponíveis.
// Ela foi movida do componente MyQueryBuilder para a página,
// permitindo que MyQueryBuilder seja verdadeiramente reutilizável.
const config: Config = {
  ...AntdConfig,
  fields: {
    returnValue: {
      label: 'returnValue',
      type: 'number',
      valueSources: ['func'],
      preferWidgets: ['number'],
    },
  },

  /*
  settings: {
    ...AntdConfig.settings,
    showNot: false, // Esconde botão Not
    addRuleLabel: 'Add action', // Muda texto do botão Add rule
  },
  */

  funcs: {
    soma: {
      label: "Soma",
      returnType: "number",
      args: {
        a: { type: "number", label: "A", valueSources: ['value', 'field', 'func'], },
        b: { type: "number", label: "B" }
      },
      jsonLogic: (args: any) => ({
        "soma": [args.a, args.b]
      }),
    },
    multiplica: {
      label: "Multiplica",
      returnType: "number",
      args: {
        a: { type: "number", label: "A" },
        b: { type: "number", label: "B" }
      },
      jsonLogic: (args: any) => ({
        "multiplica": [args.a, args.b]
      }),
    },
  }
};

// ============================================================================
// ✨ Página de Teste
// ============================================================================
export default function TestePage() {
  // 🌳 Estado para armazenar a árvore de consulta (estrutura de dados imutável)
  // Inicializa a árvore diretamente via import do arquivo inicialTree.json
  const [tree, setTree] = React.useState<ImmutableTree | null>(
    QbUtils.loadTree(inicialTree as any)
  );

  // 🔄 Callback para atualizar o estado da árvore quando ela muda no componente filho
  const handleTreeChange = (newTree: ImmutableTree) => {
    setTree(newTree);
  };

  // 🧠 Lógica para converter a árvore em formato JsonLogic
  let jsonLogic = null;
  try {
    if (tree && config) {
      jsonLogic = QbUtils.jsonLogicFormat(tree, config).logic;
    }
  } catch (e) {
    console.error("Erro ao gerar JsonLogic:", e);
  }

  return (
    <div>
      <h2 className="bg-[#f8eaea] border border-[#e0bcbc] rounded-lg px-5 py-2 mb-4 text-[#a94442] font-semibold text-[1.4rem]">
        ⚡ Query Builder - Actions
      </h2>

      {/* 🧩 Renderiza o componente QueryBuilder, passando a configuração e o callback */}
      <ActionBuilder config={config} onTreeChange={handleTreeChange} initialTree={tree} />

      {/* Painéis lado a lado responsivos */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginTop: 16 }}>
        
        {/* Árvore do componente */}
        <div style={{ flex: 1, minWidth: 280, background: '#f7f7f7', borderRadius: 8, padding: 16, fontSize: 14, color: '#111' }}>
          <strong style={{ color: '#000' }}>Árvore interna (JSON):</strong>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', background: '#fff', padding: 8, borderRadius: 4, border: '1px solid #eee', color: '#000' }}>
            {tree ? JSON.stringify(tree, null, 2) : 'Nenhuma árvore gerada ainda.'}
          </pre>
        </div>

        {/* Painel árvore serializável */}
        <div style={{ flex: 1, minWidth: 280, background: '#e7f7ff', borderRadius: 8, padding: 16, fontSize: 14, color: '#111' }}>
          <strong style={{ color: '#0077cc' }}>Árvore serializável (getTree):</strong>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', background: '#fff', padding: 8, borderRadius: 4, border: '1px solid #cceeff', color: '#000' }}>
            {tree ? JSON.stringify(QbUtils.getTree(tree), null, 2) : 'Nenhuma árvore gerada ainda.'}
          </pre>
        </div>

        {/* Painel jsonLogic */}
        <div style={{ flex: 1, minWidth: 280, background: '#ffe7e7', borderRadius: 8, padding: 16, fontSize: 14, color: '#111' }}>
          <strong style={{ color: '#000' }}>JsonLogic:</strong>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', background: '#fff', padding: 8, borderRadius: 4, border: '1px solid #eee', color: '#000' }}>
            {jsonLogic ? JSON.stringify(jsonLogic, null, 2) : 'Nenhum jsonLogic gerado ainda.'}
          </pre>
        </div>
      </div>
    </div>
  );
}
