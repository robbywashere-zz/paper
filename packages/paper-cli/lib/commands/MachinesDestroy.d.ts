import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class MachinesDestroy extends BaseCommand {
    static flags: {
        "machineId": flags.IOptionFlag<string>;
        "releasePublicIp": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<any>>;
}
