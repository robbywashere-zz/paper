import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class JobsArtifactsList extends BaseCommand {
    static flags: {
        "jobId": flags.IOptionFlag<string>;
        "files": flags.IOptionFlag<string | undefined>;
        "size": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        "links": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        "json": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<{
        file: string;
        size: number;
    }[]>>;
}
