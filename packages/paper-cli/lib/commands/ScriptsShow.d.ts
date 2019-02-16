import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class ScriptsShow extends BaseCommand {
    static flags: {
        "scriptId": flags.IOptionFlag<string>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<import("@paper/paper-api").ScriptsShowResponse>>;
}
