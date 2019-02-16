import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class MachinesCreate extends BaseCommand {
    static flags: {
        "assignPublicIp": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        "billingType": flags.IOptionFlag<string>;
        "dynamicPublicIp": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        "email": flags.IOptionFlag<string | undefined>;
        "firstName": flags.IOptionFlag<string | undefined>;
        "lastName": flags.IOptionFlag<string | undefined>;
        "machineName": flags.IOptionFlag<string>;
        "machineType": flags.IOptionFlag<string>;
        "networkId": flags.IOptionFlag<string | undefined>;
        "notificationEmail": flags.IOptionFlag<string | undefined>;
        "password": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        "region": flags.IOptionFlag<string>;
        "scriptId": flags.IOptionFlag<string | undefined>;
        "size": import("@oclif/parser/lib/flags").IOptionFlag<number>;
        "teamId": flags.IOptionFlag<string | undefined>;
        "templateId": flags.IOptionFlag<string>;
        "userId": flags.IOptionFlag<string | undefined>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<import("@paper/paper-api").MachinesCreateResponse>>;
}
