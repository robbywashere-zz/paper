import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class MachinesUpdate extends BaseCommand {
    static flags: {
        "machineId": flags.IOptionFlag<string>;
        "autoSnapshotFrequency": import("@oclif/parser/lib/flags").IOptionFlag<number | undefined>;
        "autoSnapshotSaveCount": import("@oclif/parser/lib/flags").IOptionFlag<number | undefined>;
        "dynamicPublicIp": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        "machineName": flags.IOptionFlag<string | undefined>;
        "performAutoSnapshot": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        "shutdownTimeoutForces": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        "shutdownTimeoutInHours": import("@oclif/parser/lib/flags").IOptionFlag<number | undefined>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<any>>;
}
