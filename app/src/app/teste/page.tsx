// app/src/app/teste/page.tsx
"use client";
import React from "react";
import QueryBuilder from "@/components/QueryBuilder/MyQueryBuilder";

export default function TestePage() {
  const [tree, setTree] = React.useState<any>(null);
  return (
    <div>
      <h2>Teste do Query Builder</h2>
      <QueryBuilder onTreeChange={setTree} />

      {/* Árvore do componente */}
      <div style={{ marginTop: 32, background: '#f7f7f7', borderRadius: 8, padding: 16, fontSize: 14, color: '#111' }}>
        <strong style={{ color: '#000' }}>Árvore interna (JSON):</strong>
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', background: '#fff', padding: 8, borderRadius: 4, border: '1px solid #eee', color: '#000' }}>
          {tree ? JSON.stringify(tree, null, 2) : 'Nenhuma árvore gerada ainda.'}
        </pre>
      </div>
    </div>
  );
}
