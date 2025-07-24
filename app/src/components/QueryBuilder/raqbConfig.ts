// app/src/components/QueryBuilder/raqbConfig.ts
import { BasicConfig } from "@react-awesome-query-builder/ui";
import "@react-awesome-query-builder/antd/css/styles.css";

// Só para começar: um campo chamado "price"
export const raqbConfig = {
  ...BasicConfig,
  fields: {
    price: {
      label: "Preço",
      type: "number",
      valueSources: ["value"],
    },
  },
  // Adicione aqui operadores, funções auxiliares, etc, conforme precisar
};
