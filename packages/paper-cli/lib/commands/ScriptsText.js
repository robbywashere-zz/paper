"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class ScriptsText extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(ScriptsText).flags, [], []);
        return this.client.ScriptsText(params);
    }
}
ScriptsText.flags = {
    "scriptId": command_1.flags.string({
        description: "Id of the script to get text for",
        required: true,
    }),
};
exports.default = ScriptsText;
