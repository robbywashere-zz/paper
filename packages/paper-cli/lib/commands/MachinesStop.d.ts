import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class MachinesStop extends BaseCommand {
    static flags: {
        "machineId": flags.IOptionFlag<string>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<any>>;
}