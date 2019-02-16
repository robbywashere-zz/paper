"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class MachinesUpdate extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(MachinesUpdate).flags, [], []);
        return this.client.MachinesUpdate(params);
    }
}
MachinesUpdate.flags = {
    "machineId": command_1.flags.string({
        description: "Id of the machine to update",
        required: true,
    }),
    "autoSnapshotFrequency": command_1.flags.integer({
        description: "One of 'hour', 'day', 'week', or null",
        required: undefined,
    }),
    "autoSnapshotSaveCount": command_1.flags.integer({
        description: "Number of snapshots to save",
        required: undefined,
    }),
    "dynamicPublicIp": command_1.flags.boolean({
        description: "If true, assigns a new public ip address on machine start and releases it from the account on machine stop",
        required: undefined,
    }),
    "machineName": command_1.flags.string({
        description: "New name for the machine",
        required: undefined,
    }),
    "performAutoSnapshot": command_1.flags.boolean({
        description: "Perform auto snapshots",
        required: undefined,
    }),
    "shutdownTimeoutForces": command_1.flags.boolean({
        description: "Force shutdown at shutdown timeout, even if there is a Paperspace client connection",
        required: undefined,
    }),
    "shutdownTimeoutInHours": command_1.flags.integer({
        description: "Number of hours before machine is shutdown if no one is logged in via the Paperspace client",
        required: undefined,
    }),
};
exports.default = MachinesUpdate;
