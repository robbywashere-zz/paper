"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class JobsWaitfor extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(JobsWaitfor).flags, [], []);
        return this.client.JobsWaitfor(params);
    }
}
JobsWaitfor.flags = {
    "jobId": command_1.flags.string({
        description: "Id of the job to wait for",
        required: true,
    }),
    "state": command_1.flags.string({
        description: "Name of the state to wait for",
        required: true,
    }),
};
exports.default = JobsWaitfor;
