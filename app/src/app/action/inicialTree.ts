// app/src/app/teste/inicialTree.ts
// Árvore inicial para o QueryBuilder (pode ser comentada e editada)
export const inicialTree = {
  "type": "group",
  "id": "ab9ab9a8-4567-489a-bcde-f19848b97f4b",
  "children1": [
    {
      "type": "rule",
      "id": "bbbaab99-89ab-4cde-b012-319848b97f4b",
      "properties": {
        "field": "age",
        "fieldSrc": "field",
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