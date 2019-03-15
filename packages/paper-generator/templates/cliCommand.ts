import { SwagDefMethod, SwagParam } from "../typeDef";
import { makeCliFlags } from "./cliFlags";
export function makeCliCommand(def: SwagDefMethod) {
  let CombinedParams: SwagParam[] = [];
  let MaskedParams: SwagParam[] = [];
  [...def.CliParams, ...def.AllParams].forEach(param => {
    if (param.name.match(/password/i)) {
      if (!param.required) {
        CombinedParams.push({
          ...param,
          type: "boolean"
        });
      }
      MaskedParams.push({ ...param });
    } else {
      if (!param["x-cli-prompt"]) CombinedParams.push({ ...param });
      else {
        CombinedParams.push({ ...param, required: false });
      }
    }
  });
  const optionalMasked = JSON.stringify(
    MaskedParams.filter(p => !p.required).map(p => p.name)
  );
  const requiredMasked = JSON.stringify(
    MaskedParams.filter(p => p.required).map(p => p.name)
  );
  const promptIfMissing = JSON.stringify(
    CombinedParams.filter(p => p["x-cli-prompt"]).map(p => p.name)
  );
  const flags = makeCliFlags(CombinedParams);
  const className = `${def.OpId}`;
  const description = JSON.stringify(def.Description || "");
  const awaitAuth = !def.SkipAuth ? `await this.auth();` : "";
  return `
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../../BaseCommand";

  export default class ${className} extends BaseCommand {
    static description = ${description}
    static flags = ${flags}
    async run() {
      ${awaitAuth}
      const params = await this.params(
          this.parse(${className}).flags,${optionalMasked}, ${requiredMasked}, ${promptIfMissing}
      );
      return this.client.${def.OpId}(params);
    }
  }`;
}
