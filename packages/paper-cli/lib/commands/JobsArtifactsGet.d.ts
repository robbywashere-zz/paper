import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class JobsArtifactsGet extends BaseCommand {
    static flags: {
        "jobId": flags.IOptionFlag<string>;
        "files": flags.IOptionFlag<string | undefined>;
        "dest": flags.IOptionFlag<string | undefined>;
        "json": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<import("@paper/paper-api").JobsArtifactsGetResponse>>;
}
