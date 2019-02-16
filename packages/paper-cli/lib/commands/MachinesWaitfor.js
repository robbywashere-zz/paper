"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class MachinesWaitfor extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(MachinesWaitfor).flags, [], []);
        return this.client.MachinesWaitfor(params);
    }
}
MachinesWaitfor.flags = {
    "machineId": command_1.flags.string({
        description: "Id of the machine to wait for",
        required: true,
    }),
    "state": command_1.flags.string({
        description: "Name of the state to wait for, either 'off', 'serviceready', 'ready'",
        required: true,
    }),
};
exports.default = MachinesWaitfor;
