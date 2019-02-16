import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class MachinesWaitfor extends BaseCommand {
    static flags: {
        "machineId": flags.IOptionFlag<string>;
        "state": flags.IOptionFlag<string>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<import("@paper/paper-api").MachinesWaitforResponse>>;
}
