"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class LoginUser extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(LoginUser).flags, [], ["password"]);
        return this.client.LoginUser(params);
    }
}
LoginUser.flags = {
    "apiToken": command_1.flags.string({
        description: "Optional name of an existing API token for the user's account",
        required: undefined,
    }),
    "email": command_1.flags.string({
        description: "Email address of the paperspace user to log in",
        required: true,
    }),
    "password": command_1.flags.boolean({
        description: "Password for the specified email address",
        required: true,
        hidden: true,
        default: true,
    }),
};
exports.default = LoginUser;
