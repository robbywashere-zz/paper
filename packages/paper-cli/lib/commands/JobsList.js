"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class JobsList extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(JobsList).flags, [], []);
        return this.client.JobsList(params);
    }
}
JobsList.flags = {
    "project": command_1.flags.string({
        description: "Optional project to match on.  If neither project nor projectId are provided, this is taken from the .ps_project/config.json file, or the current directory name.  Specify 'all' to list jobs for all projects associated with the user or team if the user is on a team.",
        required: undefined,
    }),
    "projectId": command_1.flags.string({
        description: "Optional projectId to match on",
        required: undefined,
    }),
    "name": command_1.flags.string({
        description: "Optional job name to match on",
        required: undefined,
    }),
    "machineType": command_1.flags.string({
        description: "Optional machineType to match on",
        required: undefined,
    }),
    "state": command_1.flags.string({
        description: "Optional state value to match on",
        required: undefined,
    }),
    "container": command_1.flags.string({
        description: "Optional container to match on",
        required: undefined,
    }),
    "command": command_1.flags.string({
        description: "Optional command to match on",
        required: undefined,
    }),
    "workspace": command_1.flags.string({
        description: "Optional workspace path to match on.  Note: the original workspace path will be modified on upload to point to a temporary location.",
        required: undefined,
    }),
    "dataset": command_1.flags.string({
        description: "Optional dataset to match on",
        required: undefined,
    }),
};
exports.default = JobsList;
