import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class LoginUser extends BaseCommand {
    static flags: {
        "apiToken": flags.IOptionFlag<string | undefined>;
        "email": flags.IOptionFlag<string>;
        "password": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<import("@paper/paper-api").LoginUserResponse>>;
}
