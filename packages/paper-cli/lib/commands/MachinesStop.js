"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class MachinesStop extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(MachinesStop).flags, [], []);
        return this.client.MachinesStop(params);
    }
}
MachinesStop.flags = {
    "machineId": command_1.flags.string({
        description: "Id of the machine to shut down",
        required: true,
    }),
};
exports.default = MachinesStop;
