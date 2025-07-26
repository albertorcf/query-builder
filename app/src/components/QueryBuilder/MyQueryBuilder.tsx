// app/src/components/QueryBuilder/MyQueryBuilder.tsx
"use client";
import React, { useState, useEffect } from 'react'
import { Builder, Utils as QbUtils } from '@react-awesome-query-builder/ui'
import { Query } from '@react-awesome-query-builder/antd'
import '@react-awesome-query-builder/ui/css/styles.css'
import './MyQueryBuilder.css'
import type { Config, ImmutableTree } from '@react-awesome-query-builder/ui'

// ⚛️ Tipagem das propriedades do componente
type MyQueryBuilderProps = {
  config: Config;
  onTreeChange: (tree: ImmutableTree) => void;
};

// ============================================================================
// ✨ Componente MyQueryBuilder
// ============================================================================
export default function MyQueryBuilder(props: MyQueryBuilderProps) {
  const { config, onTreeChange } = props;
  const [tree, setTree] = useState<ImmutableTree | null>(null);
  const [isClient, setIsClient] = useState(false);

  // 🔄 Efeito para inicializar a árvore de consulta quando o componente é montado no cliente
  // ou quando a configuração (config) é alterada.
  useEffect(() => {
    setIsClient(true);
    // `checkTree` está obsoleto. Usamos `sanitizeTree` que retorna um objeto
    // com a árvore corrigida na propriedade `fixedTree`.
    const { fixedTree } = QbUtils.Validation.sanitizeTree(
      QbUtils.loadTree({ id: QbUtils.uuid(), type: 'group' }),
      config
    );
    setTree(fixedTree);
  }, [config]); // Depende da config para re-inicializar se ela mudar

  // 🔄 Função de callback para quando a árvore de consulta é alterada
  const onChange = (immutableTree: ImmutableTree, config: Config) => {
    setTree(immutableTree);
    onTreeChange(immutableTree);
    // Opcional: logar a string de consulta para depuração
    console.log(QbUtils.queryString(immutableTree, config));
  };

  // ⏳ Exibe um loader enquanto o componente não está montado no cliente ou a árvore não foi inicializada
  if (!isClient || !tree) {
    return <div>Loading Query Builder...</div>;
  }

  // 🎨 Renderização do construtor de consultas
  return (
    <div>
      <Query
        {...config}
        value={tree}
        onChange={onChange}
        renderBuilder={(props) => (
          <div className="query-builder">
            <Builder {...props} />
          </div>
        )}
      />
    </div>
  );
}
