import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class JobsMachineTypes extends BaseCommand {
    static flags: {
        "region": flags.IOptionFlag<string | undefined>;
        "cluster": flags.IOptionFlag<string | undefined>;
        "machineType": flags.IOptionFlag<string | undefined>;
        "isBusy": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<{
        cluster: string;
        isBusy: boolean;
        machineType: string;
        region: string;
    }[]>>;
}
