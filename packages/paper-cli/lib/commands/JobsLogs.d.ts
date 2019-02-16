import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class JobsLogs extends BaseCommand {
    static flags: {
        "jobId": flags.IOptionFlag<string>;
        "tail": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        "line": import("@oclif/parser/lib/flags").IOptionFlag<number | undefined>;
        "limit": import("@oclif/parser/lib/flags").IOptionFlag<number | undefined>;
        "json": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<{
        line?: number | undefined;
        message?: string | undefined;
    }[]>>;
}
