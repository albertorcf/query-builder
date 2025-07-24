// app/src/components/QueryBuilder/MyQueryBuilder.tsx

'use client'

import React, { useState } from 'react'
import { Query, Builder, Utils as QbUtils } from '@react-awesome-query-builder/ui'
import '@react-awesome-query-builder/ui/css/styles.css'
import type { Config, ImmutableTree, WidgetProps } from '@react-awesome-query-builder/ui'

// ✅ Config completo e ajustado para RAQB v6.6.15
const config: Config = {
  conjunctions: {
    AND: {
      label: 'And',
      formatConj: (children) => `(${children.join(' AND ')})`,
      sqlFormatConj: (children) => `(${children.join(' AND ')})`,
      mongoConj: '$and',
      spelFormatConj: (children) => `(${children.join(' and ')})`,
    },
    OR: {
      label: 'Or',
      formatConj: (children) => `(${children.join(' OR ')})`,
      sqlFormatConj: (children) => `(${children.join(' OR ')})`,
      mongoConj: '$or',
      spelFormatConj: (children) => `(${children.join(' or ')})`,
    },
  },

  operators: {
    equal: { label: '=' },
    not_equal: { label: '!=' },
    greater: { label: '>' },
    less: { label: '<' },
  },

  widgets: {
    number: {
      type: 'number',
      valueSrc: 'value',
      factory: (props: WidgetProps) => (
        <input
          type="number"
          value={props.value ?? ''}
          onChange={(e) => props.setValue(Number(e.target.value))}
        />
      ),
    },
    boolean: {
      type: 'boolean',
      valueSrc: 'value',
      factory: (props: WidgetProps) => (
        <input
          type="checkbox"
          checked={!!props.value}
          onChange={(e) => props.setValue(e.target.checked)}
        />
      ),
    },
  },

  settings: {
    // app/node_modules/.pnpm/@react-awesome-query-builder+core@6.6.15/node_modules/@react-awesome-query-builder/core/modules/index.d.ts
    // setOpOnChangeField: Array<ChangeFieldStrategy>
    // type ChangeFieldStrategy = "default" | "keep" | "first" | "none"
    setOpOnChangeField: ['default'], // ✅ propriedade obrigatória
    // ✅ renderProvider é obrigatório para evitar erro de runtime
    renderProvider: (props) => <>{props.children}</>,
    renderButtonGroup: (props) => <>{props.children}</>,
    renderButton: (props) => {
      // Filtra props inválidas para <button>
      const {
        renderIcon,
        readonly,
        label,
        ...rest
      } = props;

      return (
        <button
          {...rest}
          type="button"
          disabled={readonly}
        >
          {label}
        </button>
      );
    },
  },

  fields: {
    age: {
      label: 'Age',
      type: 'number',
      fieldSettings: { min: 0 },
      valueSources: ['value'],
      preferWidgets: ['number'],
    },
    isActive: {
      label: 'Is Active',
      type: 'boolean',
      valueSources: ['value'],
      preferWidgets: ['boolean'],
    },
  },

  // ✅ Adicionado para satisfazer a tipagem de Config
  types: {},
  ctx: {
    utils: {} as any,
    W: {} as any,
    O: {} as any,
  },
}

const initialTree: ImmutableTree = QbUtils.checkTree(
  QbUtils.loadTree({ id: QbUtils.uuid(), type: 'group' }),
  config,
)

export default function MyQueryBuilder() {
  const [tree, setTree] = useState<ImmutableTree>(initialTree)

  const onChange = (immutableTree: ImmutableTree, config: Config) => {
    setTree(immutableTree)
    console.log(QbUtils.queryString(immutableTree, config))
  }

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
  )
}
