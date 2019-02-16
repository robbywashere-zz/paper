import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class JobsArtifactsDestroy extends BaseCommand {
    static flags: {
        "jobId": flags.IOptionFlag<string>;
        "files": flags.IOptionFlag<string | undefined>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<any>>;
}
