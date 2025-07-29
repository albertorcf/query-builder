// app/src/app/teste/inicialTree.ts
// Árvore inicial para o QueryBuilder (pode ser comentada e editada)
export const inicialTree = {
  "type": "group",
  "id": "ab9ab9a8-4567-489a-bcde-f19848b97f4b",
  "children1": [
    {
      "type": "rule",
      "id": "bb989a8b-0123-4456-b89a-b1985832e3c6",
      "properties": {
        "fieldSrc": "field",
        "field": "returnValue",
        "operator": "equal",
        "value": [
          {
            "func": "soma",
            "args": {
              "a": {
                "valueSrc": "func",
                "value": {
                  "func": "multiplica",
                  "args": {
                    "a": {
                      "valueSrc": "value",
                      "value": 1
                    },
                    "b": {
                      "valueSrc": "value",
                      "value": 2
                    }
                  }
                }
              },
              "b": {
                "valueSrc": "value",
                "value": 3
              }
            }
          }
        ],
        "valueSrc": [
          "func"
        ],
        "valueType": [
          "number"
        ],
        "valueError": [
          null
        ]
      }
    }
  ],
  "properties": {
    "conjunction": "AND",
    "not": false
  }
}