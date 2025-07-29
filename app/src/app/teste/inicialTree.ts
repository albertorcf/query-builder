// app/src/app/teste/inicialTree.ts
// Árvore inicial para o QueryBuilder (pode ser comentada e editada)
export const inicialTree = {
  "type": "group",
  "id": "ab9ab9a8-4567-489a-bcde-f19848b97f4b",
  "children1": [
    {
      "type": "group",
      "id": "9b8abbaa-cdef-4012-b456-719857234f27",
      "properties": {
        "conjunction": "AND",
        "not": false
      },
      "children1": [
        {
          "type": "rule",
          "id": "ab899999-89ab-4cde-b012-319857234f2a",
          "properties": {
            "fieldSrc": "field",
            "field": "tags",
            "operator": "multiselect_equals",
            "value": [
              [
                "tag1",
                "tag2"
              ]
            ],
            "valueSrc": [
              "value"
            ],
            "valueType": [
              "multiselect"
            ],
            "valueError": [
              null
            ]
          }
        },
        {
          "type": "rule",
          "id": "bba899b8-0123-4456-b89a-b198572ae70f",
          "properties": {
            "fieldSrc": "field",
            "field": "initData",
            "operator": "between",
            "value": [
              "2025-07-21",
              "2025-08-27"
            ],
            "valueSrc": [
              "value",
              "value"
            ],
            "valueType": [
              "date",
              "date"
            ],
            "valueError": [
              null
            ]
          }
        }
      ]
    },
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