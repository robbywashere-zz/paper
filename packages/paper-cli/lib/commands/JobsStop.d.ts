import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class JobsStop extends BaseCommand {
    static flags: {
        "jobId": flags.IOptionFlag<string>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<any>>;
}
