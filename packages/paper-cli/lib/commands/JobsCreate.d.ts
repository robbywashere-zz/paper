import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class JobsCreate extends BaseCommand {
    static flags: {
        "cluster": flags.IOptionFlag<string | undefined>;
        "clusterId": flags.IOptionFlag<string | undefined>;
        "codeCommit": flags.IOptionFlag<string | undefined>;
        "command": flags.IOptionFlag<string | undefined>;
        "container": flags.IOptionFlag<string>;
        "dataset": flags.IOptionFlag<string | undefined>;
        "json": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        "machineType": flags.IOptionFlag<string | undefined>;
        "name": flags.IOptionFlag<string | undefined>;
        "nodeAttrs": import("@oclif/parser/lib/flags").IOptionFlag<number | undefined>;
        "ports": flags.IOptionFlag<string | undefined>;
        "project": flags.IOptionFlag<string | undefined>;
        "projectId": flags.IOptionFlag<string | undefined>;
        "registryPassword": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        "registryUsername": flags.IOptionFlag<string | undefined>;
        "sharedMemMBytes": import("@oclif/parser/lib/flags").IOptionFlag<number | undefined>;
        "tail": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        "workspace": flags.IOptionFlag<string | undefined>;
        "workspacePassword": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        "workspaceUsername": flags.IOptionFlag<string | undefined>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<import("@paper/paper-api").JobsCreateResponse>>;
}
