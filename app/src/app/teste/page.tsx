// app/src/app/teste/page.tsx
'use client';
import QueryBuilder from "@/components/QueryBuilder/MyQueryBuilder";

export default function TestePage() {
  return (
    /*<div style={{ maxWidth: 800, margin: '40px auto', padding: 24 }}>*/
    <div style={{ maxWidth: 800 }}>
      <h2>Teste do Query Builder</h2>
      <QueryBuilder />
    </div>
  );
}
