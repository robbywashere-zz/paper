"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class ScriptsList extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(ScriptsList).flags, [], []);
        return this.client.ScriptsList(params);
    }
}
ScriptsList.flags = {
    "id": command_1.flags.string({
        description: "Optional script id to match on",
        required: undefined,
    }),
    "ownerType": command_1.flags.string({
        description: "Optional ownerType to match on, either 'user' or 'team'",
        required: undefined,
    }),
    "ownerId": command_1.flags.string({
        description: "Optional ownerId to match on, either a userId or teamId",
        required: undefined,
    }),
    "name": command_1.flags.string({
        description: "Optional name to match on",
        required: undefined,
    }),
    "description": command_1.flags.string({
        description: "Optional description to match on",
        required: undefined,
    }),
    "dtCreated": command_1.flags.string({
        description: "Optional datetime created value to match on",
        required: undefined,
    }),
    "isEnabled": command_1.flags.boolean({
        description: "Optional isEnabled value to match on, either true or false",
        required: undefined,
    }),
    "runOnce": command_1.flags.boolean({
        description: "Optional runOnce value to match on, either true or false",
        required: undefined,
    }),
};
exports.default = ScriptsList;
