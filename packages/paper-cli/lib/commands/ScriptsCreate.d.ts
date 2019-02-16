import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class ScriptsCreate extends BaseCommand {
    static flags: {
        "isEnabled": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        "machineId": flags.IOptionFlag<string | undefined>;
        "runOnce": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        "scriptDescription": flags.IOptionFlag<string | undefined>;
        "scriptFile": flags.IOptionFlag<string | undefined>;
        "scriptName": flags.IOptionFlag<string>;
        "scriptText": flags.IOptionFlag<string | undefined>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<import("@paper/paper-api").ScriptsCreateResponse>>;
}
