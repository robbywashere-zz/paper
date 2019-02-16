"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class ScriptsCreate extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(ScriptsCreate).flags, [], []);
        return this.client.ScriptsCreate(params);
    }
}
ScriptsCreate.flags = {
    "isEnabled": command_1.flags.boolean({
        description: "Determines if the script is enabled or not.  Defaults to true",
        required: undefined,
    }),
    "machineId": command_1.flags.string({
        description: "Machine id of a machine that should execute this script at startup",
        required: undefined,
    }),
    "runOnce": command_1.flags.boolean({
        description: "Determines if the script is run on first boot or every boot.  Defaults to false",
        required: undefined,
    }),
    "scriptDescription": command_1.flags.string({
        description: "Description of the script",
        required: undefined,
    }),
    "scriptFile": command_1.flags.string({
        description: "File path to a file containing the script data; either scriptFile or scriptText must be provide.",
        required: undefined,
    }),
    "scriptName": command_1.flags.string({
        description: "A unique name for the script",
        required: true,
    }),
    "scriptText": command_1.flags.string({
        description: "A string containing the script text; either scriptFile or scriptText must be provide.",
        required: undefined,
    }),
};
exports.default = ScriptsCreate;
