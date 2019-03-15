import { swag } from "./swag";
import { join } from "path";
import $ from "shelljs";
import { makeClass } from "./templates/class";
import { apiHeader } from "./templates/apiHeader";
import { makeCliCommand } from "./templates/cliCommand";
import { writeFileSync } from "fs";
import { ObjTmpl } from "./lib";
import { SwagDef } from "./typeDef";

const CLI_NAME = "paper-cli";
const API_NAME = "paper-api";
const CLI_BUILD = join(__dirname, "..", CLI_NAME);
const CLI_PROTO = join(__dirname, "cli-prototype");
const API_BUILD = join(__dirname, "..", API_NAME);
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

function checkStatus() {
  const checkPath = (name: string) => (path: string) =>
    path.startsWith(join("packages", name));
  const status = $.exec("git diff --name-only")
    .toString()
    .split("\n");
  return status.some(checkPath(CLI_NAME)) || status.some(checkPath(API_NAME));
}

if (process.env.FORCE_BUILD !== "true" && checkStatus())
  throw new Error(`Uncommited change(s), aborting to avoid overwrite...`);
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
  const Topics = swagDef.Methods.map(m => m.Topic);
  PkgJson(PKGJSON_PROTO, PKGJSON_BUILD, PROJECT_INFO, Topics);
}
function Api(path: string) {
  const ApiTypes = ApiDef.Types.join("\n");
  const ApiClass = makeClass(ApiDef);
  writeFileSync(path, [apiHeader, ApiTypes, ApiClass].join("\n"));
}

function BlankTopicsDesc(
  pkgJson: { [key: string]: any },
  topicsList: string[]
) {
  let topics = Object.create(null);
  pkgJson["oclif"] = { ...pkgJson["oclif"], topics };
  for (let topic of topicsList) {
    topics[topic] = { description: "" };
  }
  return pkgJson;
}

function PkgJson(
  inputPath: string,
  outputPath: string,
  tmplValues: { [key: string]: string },
  Topics: string[]
) {
  let newPkgJson = BlankTopicsDesc(
    ObjTmpl(require(inputPath), tmplValues) as { [key: string]: any },
    Topics
  );

  let packageJson = JSON.stringify(newPkgJson, null, 4);
  writeFileSync(outputPath, packageJson);
}

function Cmd(cmdRootPath: string, swagDef: SwagDef) {
  for (let method of swagDef.Methods) {
    const topicPath = join(cmdRootPath, method.Topic);
    $.mkdir("-p", topicPath);
    const commandPath = join(topicPath, method.Filename);
    writeFileSync(commandPath, makeCliCommand(method));
  }
}
