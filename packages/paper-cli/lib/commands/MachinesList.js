"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class MachinesList extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(MachinesList).flags, [], []);
        return this.client.MachinesList(params);
    }
}
MachinesList.flags = {
    "machineId": command_1.flags.string({
        description: "Optional machine id to match on. Note: must be specified as \"machineId\", not \"id\".",
        required: undefined,
    }),
    "name": command_1.flags.string({
        description: "Optional name to match on",
        required: undefined,
    }),
    "os": command_1.flags.string({
        description: "Optional os to match on",
        required: undefined,
    }),
    "ram": command_1.flags.string({
        description: "Optional ram value to match on",
        required: undefined,
    }),
    "cpus": command_1.flags.integer({
        description: "Optional cpu count to match on",
        required: undefined,
    }),
    "gpu": command_1.flags.string({
        description: "Optional gpu to match on",
        required: undefined,
    }),
    "storageTotal": command_1.flags.string({
        description: "Optional storageTotal value to match on",
        required: undefined,
    }),
    "storageUsed": command_1.flags.string({
        description: "Optional storageUsed value to match on",
        required: undefined,
    }),
    "usageRate": command_1.flags.string({
        description: "Optional usageRate value to match on",
        required: undefined,
    }),
    "shutdownTimeoutInHours": command_1.flags.integer({
        description: "Optional shutdownTimeoutInHours value to match on",
        required: undefined,
    }),
    "performAutoSnapshot": command_1.flags.boolean({
        description: "Optional performAutoSnapshot value to match on, either true or false",
        required: undefined,
    }),
    "autoSnapshotFrequency": command_1.flags.string({
        description: "Optional autoSnapshotFrequency value to match on",
        required: undefined,
    }),
    "autoSnapshotSaveCount": command_1.flags.integer({
        description: "Optional autoSnapshotSaveCount value to match on",
        required: undefined,
    }),
    "agentType": command_1.flags.string({
        description: "Optional agentType value to match on",
        required: undefined,
    }),
    "dtCreated": command_1.flags.string({
        description: "Optional datetime created value to match on",
        required: undefined,
    }),
    "state": command_1.flags.string({
        description: "Optional state value to match on",
        required: undefined,
    }),
    "updatesPending": command_1.flags.boolean({
        description: "Optional updatesPending value to match on",
        required: undefined,
    }),
    "networkId": command_1.flags.string({
        description: "Optional networkId to match on",
        required: undefined,
    }),
    "privateIpAddress": command_1.flags.string({
        description: "Optional privateIpAddress to match on",
        required: undefined,
    }),
    "publicIpAddress": command_1.flags.string({
        description: "Optional publicIpAddress to match on",
        required: undefined,
    }),
    "region": command_1.flags.string({
        description: "Optional region to match on",
        required: undefined,
    }),
    "userId": command_1.flags.string({
        description: "Optional userId to match on",
        required: undefined,
    }),
    "teamId": command_1.flags.string({
        description: "Optional teamId to match on",
        required: undefined,
    }),
    "scriptId": command_1.flags.string({
        description: "Optional scriptId to match on",
        required: undefined,
    }),
    "dtLastRun": command_1.flags.string({
        description: "Optional script datetime last run value to match on",
        required: undefined,
    }),
};
exports.default = MachinesList;
