"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class MachinesRestart extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(MachinesRestart).flags, [], []);
        return this.client.MachinesRestart(params);
    }
}
MachinesRestart.flags = {
    "machineId": command_1.flags.string({
        description: "Id of the machine to restart",
        required: true,
    }),
};
exports.default = MachinesRestart;
