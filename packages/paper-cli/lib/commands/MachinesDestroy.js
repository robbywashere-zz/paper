"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class MachinesDestroy extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(MachinesDestroy).flags, [], []);
        return this.client.MachinesDestroy(params);
    }
}
MachinesDestroy.flags = {
    "machineId": command_1.flags.string({
        description: "The id of the machine to destroy",
        required: true,
    }),
    "releasePublicIp": command_1.flags.boolean({
        description: "releases any assigned public ip address for the machine; defaults to false",
        required: undefined,
    }),
};
exports.default = MachinesDestroy;
