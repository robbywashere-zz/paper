import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class MachinesUtilization extends BaseCommand {
    static flags: {
        "machineId": flags.IOptionFlag<string>;
        "billingMonth": flags.IOptionFlag<string>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<import("@paper/paper-api").MachinesUtilizationResponse>>;
}
