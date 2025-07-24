// app/src/components/QueryBuilder/MyQueryBuilder.tsx
'use client'
import React, { useState, useEffect } from 'react'
import { /*Query,*/ Builder, Utils as QbUtils, /*BasicConfig*/ } from '@react-awesome-query-builder/ui'
import { Query, BasicConfig } from '@react-awesome-query-builder/antd'
import '@react-awesome-query-builder/ui/css/styles.css'
import './MyQueryBuilder.css'
import type { Config, ImmutableTree } from '@react-awesome-query-builder/ui'

// ✅ Config baseado no BasicConfig do RAQB
const config: Config = {
  ...BasicConfig,
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
}

export default function MyQueryBuilder() {
  const [tree, setTree] = useState<ImmutableTree | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const initialTree = QbUtils.checkTree(
      QbUtils.loadTree({ id: QbUtils.uuid(), type: 'group' }),
      config
    )
    setTree(initialTree)
  }, [])

  const onChange = (immutableTree: ImmutableTree, config: Config) => {
    setTree(immutableTree)
    console.log(QbUtils.queryString(immutableTree, config))
  }

  if (!isClient || !tree) {
    return <div>Loading Query Builder...</div>
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
      {/* Painel para mostrar a árvore interna */}
      <div style={{ marginTop: 32, background: '#f7f7f7', borderRadius: 8, padding: 16, fontSize: 14, color: '#111' }}>
        <strong style={{ color: '#000' }}>Árvore interna (JSON):</strong>
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all', background: '#fff', padding: 8, borderRadius: 4, border: '1px solid #eee', color: '#000' }}>
          {JSON.stringify(tree, null, 2)}
        </pre>
      </div>
    </div>
  )
}
