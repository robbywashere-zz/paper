import { FlagParam } from "../typeDef";

function convertType(type: string) {
  switch (type) {
    case "number":
      return "integer";
    default:
      return type;
  }
}
export function makeCliFlags(CombinedParams: FlagParam[]) {
  let Flags = `{ `;
  for (let i = 0; i < CombinedParams.length; i++) {
    let {
      name,
      description,
      type,
      schema,
      required,
      hiddenPrompt
    } = CombinedParams[i];
    const requiredHiddenParam = !hiddenPrompt
      ? ""
      : `
      hidden: true,`;
    let options = CombinedParams[i].enum
      ? ` options:` + JSON.stringify(CombinedParams[i].enum) + ","
      : "";
    Flags += ` 
    "${name}": flags.${convertType(type || schema.type)}({
      description: ${JSON.stringify(description)},
      required: ${!!required}, ${options} ${requiredHiddenParam}
    }),`;
  }
  Flags += `} `;
  return Flags;
}
