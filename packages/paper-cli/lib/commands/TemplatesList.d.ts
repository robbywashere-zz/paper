import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class TemplatesList extends BaseCommand {
    static flags: {
        "id": flags.IOptionFlag<string | undefined>;
        "name": flags.IOptionFlag<string | undefined>;
        "label": flags.IOptionFlag<string | undefined>;
        "os": flags.IOptionFlag<string | undefined>;
        "dtCreated": flags.IOptionFlag<string | undefined>;
        "teamId": flags.IOptionFlag<string | undefined>;
        "userId": flags.IOptionFlag<string | undefined>;
        "region": flags.IOptionFlag<string | undefined>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<{
        dtCreated: string;
        id: string;
        label: string;
        name: string;
        os: string;
        region?: string | undefined;
        teamId?: string | undefined;
        userId?: string | undefined;
    }[]>>;
}
