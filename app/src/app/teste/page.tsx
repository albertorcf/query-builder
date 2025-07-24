// app/src/app/teste/page.tsx
"use client";
import React from "react";
import QueryBuilder from "@/components/QueryBuilder/MyQueryBuilder";

export default function TestePage() {
  const [tree, setTree] = React.useState<any>(null);
  const [config, setConfig] = React.useState<any>(null);
  const handleTreeChange = (t: any, c: any) => {
    setTree(t);
    setConfig(c);
  };
  let jsonLogic = null;
  try {
    if (tree && config) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { Utils: QbUtils } = require("@react-awesome-query-builder/ui");
      jsonLogic = QbUtils.jsonLogicFormat(tree, config).logic;
    }
  } catch (e) {}

  return (
    <div>
      <h2>Teste do Query Builder</h2>
      <QueryBuilder onTreeChange={handleTreeChange} />

      {/* Painéis lado a lado responsivos */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginTop: 32 }}>
        {/* Árvore do componente */}
        <div style={{ flex: 1, minWidth: 280, background: '#f7f7f7', borderRadius: 8, padding: 16, fontSize: 14, color: '#111' }}>
          <strong style={{ color: '#000' }}>Árvore interna (JSON):</strong>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', background: '#fff', padding: 8, borderRadius: 4, border: '1px solid #eee', color: '#000' }}>
            {tree ? JSON.stringify(tree, null, 2) : 'Nenhuma árvore gerada ainda.'}
          </pre>
        </div>
        {/* Painel jsonLogic */}
        <div style={{ flex: 1, minWidth: 280, background: '#f7f7f7', borderRadius: 8, padding: 16, fontSize: 14, color: '#111' }}>
          <strong style={{ color: '#000' }}>JsonLogic:</strong>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', background: '#fff', padding: 8, borderRadius: 4, border: '1px solid #eee', color: '#000' }}>
            {jsonLogic ? JSON.stringify(jsonLogic, null, 2) : 'Nenhum jsonLogic gerado ainda.'}
          </pre>
        </div>
      </div>
    </div>
  );
}
