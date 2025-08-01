// app/src/components/query-builder/action/ActionBuilder.tsx
"use client";
import { useState, useEffect } from 'react'
import type { JsonGroup, Config, ImmutableTree, BuilderProps } from '@react-awesome-query-builder/antd'; // for TS example
import { Query, Builder, Utils as QbUtils } from '@react-awesome-query-builder/antd';

import '@react-awesome-query-builder/antd/css/styles.css';
import '../MyQueryBuilder.css';
import './ActionBuilder.css';

// ⚛️ Tipagem das propriedades do componente
type MyQueryBuilderProps = {
  config: Config;
  onTreeChange: (tree: ImmutableTree) => void;
  initialTree?: ImmutableTree | null;
};

// ============================================================================
// ✨ Componente ActionBuilder
// ============================================================================
export default function ActionBuilder(props: MyQueryBuilderProps) {
  const { config, onTreeChange, initialTree } = props;
  const [tree, setTree] = useState<ImmutableTree | null>(initialTree ?? null);
  const [isClient, setIsClient] = useState(false);
  
  // 🔄 Efeito para inicializar a árvore de consulta quando o componente é montado no cliente
  // ou quando a configuração (config) ou initialTree é alterada.
  useEffect(() => {
    setIsClient(true);
    if (initialTree) {
      setTree(initialTree);
    } else {
      const { fixedTree } = QbUtils.Validation.sanitizeTree(
        QbUtils.loadTree({ id: QbUtils.uuid(), type: 'group' }),
        config
      );
      setTree(fixedTree);
    }
  }, [config, initialTree]);

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
