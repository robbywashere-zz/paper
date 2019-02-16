import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class UsersList extends BaseCommand {
    static flags: {
        "id": flags.IOptionFlag<string | undefined>;
        "email": flags.IOptionFlag<string | undefined>;
        "firstname": flags.IOptionFlag<string | undefined>;
        "lastname": flags.IOptionFlag<string | undefined>;
        "dtCreated": flags.IOptionFlag<string | undefined>;
        "teamId": flags.IOptionFlag<string | undefined>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<{
        dtCreated: string;
        email: string;
        firstname: string;
        id: string;
        lastname: string;
        teamId: string;
    }[]>>;
}
