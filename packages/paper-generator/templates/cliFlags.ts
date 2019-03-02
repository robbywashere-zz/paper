import { SwagParam } from "../typeDef";

function convertType(type: string) {
  switch (type) {
    case "number":
      return "integer";
    default:
      return type;
  }
}
export function makeCliFlags(CombinedParams: SwagParam[]) {
  let Flags = `{ `;
  for (let i = 0; i < CombinedParams.length; i++) {
    const { name, description, type, schema, required } = CombinedParams[i];
    const isRequired = required ? "required: true," : "";

    let options = CombinedParams[i].enum
      ? ` options:` + JSON.stringify(CombinedParams[i].enum) + ","
      : "";
    Flags += ` 
    "${name}": flags.${convertType(type || schema.type)}({
      description: ${JSON.stringify(description)},
      ${isRequired} ${options}
    }),`;
  }
  Flags += `} `;
  return Flags;
}
