"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class NetworksList extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(NetworksList).flags, [], []);
        return this.client.NetworksList(params);
    }
}
NetworksList.flags = {
    "id": command_1.flags.string({
        description: "Optional network id to match on",
        required: undefined,
    }),
    "name": command_1.flags.string({
        description: "Optional name to match on",
        required: undefined,
    }),
    "region": command_1.flags.string({
        description: "Optional region to match on",
        required: undefined,
    }),
    "dtCreated": command_1.flags.string({
        description: "Optional datetime created value to match on",
        required: undefined,
    }),
    "network": command_1.flags.string({
        description: "Optional network to match on",
        required: undefined,
    }),
    "netmask": command_1.flags.string({
        description: "Optional netmask to match on",
        required: undefined,
    }),
    "teamId": command_1.flags.string({
        description: "Optional teamId to match on",
        required: undefined,
    }),
};
exports.default = NetworksList;
