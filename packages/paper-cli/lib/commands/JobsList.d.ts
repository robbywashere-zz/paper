import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class JobsList extends BaseCommand {
    static flags: {
        "project": flags.IOptionFlag<string | undefined>;
        "projectId": flags.IOptionFlag<string | undefined>;
        "name": flags.IOptionFlag<string | undefined>;
        "machineType": flags.IOptionFlag<string | undefined>;
        "state": flags.IOptionFlag<string | undefined>;
        "container": flags.IOptionFlag<string | undefined>;
        "command": flags.IOptionFlag<string | undefined>;
        "workspace": flags.IOptionFlag<string | undefined>;
        "dataset": flags.IOptionFlag<string | undefined>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<{
        artifactsDirectory?: string | undefined;
        cluster?: string | undefined;
        container?: string | undefined;
        dtCreated?: string | undefined;
        dtDeleted?: string | undefined;
        dtFinished?: string | undefined;
        dtModified?: string | undefined;
        dtProvisioningFinished?: string | undefined;
        dtProvisioningStarted?: string | undefined;
        dtStarted?: string | undefined;
        dtTeardownFinished?: string | undefined;
        dtTeardownStarted?: string | undefined;
        entrypoint?: string | undefined;
        exitCode?: number | undefined;
        id?: string | undefined;
        jobError?: boolean | undefined;
        machineType?: string | undefined;
        name?: string | undefined;
        parentJobId?: string | undefined;
        project?: string | undefined;
        projectId?: string | undefined;
        startedByUserId?: string | undefined;
        state?: string | undefined;
        usageRate?: string | undefined;
        workingDirectory?: string | undefined;
        workspaceUrl?: string | undefined;
    }[]>>;
}
