"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class TemplatesList extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(TemplatesList).flags, [], []);
        return this.client.TemplatesList(params);
    }
}
TemplatesList.flags = {
    "id": command_1.flags.string({
        description: "Optional template id to match on",
        required: undefined,
    }),
    "name": command_1.flags.string({
        description: "Optional name to match on",
        required: undefined,
    }),
    "label": command_1.flags.string({
        description: "Optional label to match on",
        required: undefined,
    }),
    "os": command_1.flags.string({
        description: "Optional os to match on",
        required: undefined,
    }),
    "dtCreated": command_1.flags.string({
        description: "Optional datetime created value to match on",
        required: undefined,
    }),
    "teamId": command_1.flags.string({
        description: "Optional teamId to match on",
        required: undefined,
    }),
    "userId": command_1.flags.string({
        description: "Optional userId to match on",
        required: undefined,
    }),
    "region": command_1.flags.string({
        description: "Optional region to match on",
        required: undefined,
    }),
};
exports.default = TemplatesList;
