import { flags } from "@oclif/command";
import { BaseCommand } from "../BaseCommand";
export default class ScriptsList extends BaseCommand {
    static flags: {
        "id": flags.IOptionFlag<string | undefined>;
        "ownerType": flags.IOptionFlag<string | undefined>;
        "ownerId": flags.IOptionFlag<string | undefined>;
        "name": flags.IOptionFlag<string | undefined>;
        "description": flags.IOptionFlag<string | undefined>;
        "dtCreated": flags.IOptionFlag<string | undefined>;
        "isEnabled": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        "runOnce": import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    };
    run(): Promise<import("@paper/paper-api").ResponseWithBody<{
        description?: string | undefined;
        dtCreated?: string | undefined;
        id?: string | undefined;
        isEnabled?: boolean | undefined;
        name?: string | undefined;
        ownerId?: string | undefined;
        ownerType?: string | undefined;
        runOnce?: boolean | undefined;
    }[]>>;
}
