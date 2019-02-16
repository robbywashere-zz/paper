import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class NetworksList extends BaseCommand {
    static flags: {
        "id": flags.IOptionFlag<string | undefined>;
        "name": flags.IOptionFlag<string | undefined>;
        "region": flags.IOptionFlag<string | undefined>;
        "dtCreated": flags.IOptionFlag<string | undefined>;
        "network": flags.IOptionFlag<string | undefined>;
        "netmask": flags.IOptionFlag<string | undefined>;
        "teamId": flags.IOptionFlag<string | undefined>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<{
        dtCreated?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        netmask?: string | undefined;
        network?: string | undefined;
        region?: string | undefined;
        teamId?: string | undefined;
    }[]>>;
}
