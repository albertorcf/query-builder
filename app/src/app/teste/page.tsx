// app/src/app/teste/page.tsx
'use client';

import { Provider } from "react-redux";
import { store } from "@/components/QueryBuilder/store";
import QueryBuilder from "@/components/QueryBuilder/MyQueryBuilder";

export default function TestePage() {
  return (
    <Provider store={store}>
      <div style={{ maxWidth: 800, margin: '40px auto', padding: 24 }}>
        <h2>Teste do Query Builder</h2>
        <QueryBuilder />
      </div>
    </Provider>
  );
}
