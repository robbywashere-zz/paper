import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class MachinesAvailability extends BaseCommand {
    static flags: {
        "region": flags.IOptionFlag<string>;
        "machineType": flags.IOptionFlag<string>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<import("@paper/paper-api").MachinesAvailabilityResponse>>;
}
