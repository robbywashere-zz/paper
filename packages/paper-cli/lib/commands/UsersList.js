"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class UsersList extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(UsersList).flags, [], []);
        return this.client.UsersList(params);
    }
}
UsersList.flags = {
    "id": command_1.flags.string({
        description: "Optional user id to match on",
        required: undefined,
    }),
    "email": command_1.flags.string({
        description: "Optional email to match on",
        required: undefined,
    }),
    "firstname": command_1.flags.string({
        description: "Optional firstname to match on",
        required: undefined,
    }),
    "lastname": command_1.flags.string({
        description: "Optional lastname to match on",
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
};
exports.default = UsersList;
