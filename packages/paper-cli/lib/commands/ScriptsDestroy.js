"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class ScriptsDestroy extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(ScriptsDestroy).flags, [], []);
        return this.client.ScriptsDestroy(params);
    }
}
ScriptsDestroy.flags = {
    "scriptId": command_1.flags.string({
        description: "The id of the script to destroy",
        required: true,
    }),
};
exports.default = ScriptsDestroy;
