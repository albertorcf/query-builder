// app/src/components/QueryBuilder/MyQueryBuilder.tsx
'use client'
import React, { useState, useEffect } from 'react'
import { /*Query,*/ Builder, Utils as QbUtils, /*BasicConfig*/ } from '@react-awesome-query-builder/ui'
import { Query, BasicConfig } from '@react-awesome-query-builder/antd'
import '@react-awesome-query-builder/ui/css/styles.css'
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
    </div>
  )
}
