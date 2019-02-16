"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class ScriptsShow extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(ScriptsShow).flags, [], []);
        return this.client.ScriptsShow(params);
    }
}
ScriptsShow.flags = {
    "scriptId": command_1.flags.string({
        description: "Id of the script to show",
        required: true,
    }),
};
exports.default = ScriptsShow;
