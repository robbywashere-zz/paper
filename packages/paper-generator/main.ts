import { swag } from "./swag";
import { join } from "path";
import $ from "shelljs";
import { makeClass } from "./templates/class";
import { apiHeader } from "./templates/apiHeader";
import { makeCliCommand } from "./templates/cliCommand";
import { writeFileSync } from "fs";
import { ObjTmpl } from "./lib";
import { SwagDef } from "./typeDef";

const CLI_BUILD = join(__dirname, "..", "paper-cli");
const CLI_PROTO = join(__dirname, "cli-prototype");
const API_BUILD = join(__dirname, "..", "paper-api");
const API_PROTO = join(__dirname, "api-prototype");
const API_PATH = join(__dirname, "..", "paper-api", "src", "index.ts");
const CMD_DIR = join(CLI_BUILD, "src", "commands");
const PKGJSON_PROTO = join(CLI_PROTO, "package.json");
const PKGJSON_BUILD = join(CLI_BUILD, "package.json");
const PROJECT_INFO = {
  ghUser: "robbywashere",
  authorInfo: "robby https://tinyfunc.com",
  cliName: "paper",
  cliRepoName: "paper"
};

const ApiDef = swag(require("./swagger2.json"), "Api");

Build(ApiDef);

function Build(swagDef: SwagDef) {
  $.rm("-rf", CLI_BUILD);
  $.rm("-rf", API_BUILD);
  $.mkdir("-p", CLI_BUILD);
  $.mkdir("-p", API_BUILD);
  $.mkdir("-p", CMD_DIR);
  $.cp("-R", join(CLI_PROTO, "*"), CLI_BUILD);
  $.cp("-R", join(API_PROTO, "*"), API_BUILD);
  Api(API_PATH);
  Cmd(CMD_DIR, swagDef);
  PkgJson(PKGJSON_PROTO, PKGJSON_BUILD, PROJECT_INFO);
}
function Api(path: string) {
  const ApiTypes = ApiDef.Types.join("\n");
  const ApiClass = makeClass(ApiDef);
  writeFileSync(path, [apiHeader, ApiTypes, ApiClass].join("\n"));
}

function PkgJson(
  inputPath: string,
  outputPath: string,
  tmplValues: { [key: string]: string }
) {
  let packageJson = JSON.stringify(
    ObjTmpl(require(inputPath), tmplValues),
    null,
    4
  );
  writeFileSync(outputPath, packageJson);
}

function Cmd(path: string, swagDef: SwagDef) {
  for (let method of swagDef.Methods) {
    const filename = method.OpId + ".ts";
    const commandPath = join(path, filename);
    writeFileSync(commandPath, makeCliCommand(method));
  }
}
