"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class JobsClone extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(JobsClone).flags, [], []);
        return this.client.JobsClone(params);
    }
}
JobsClone.flags = {
    "jobId": command_1.flags.string({
        description: "Id of the job to clone",
        required: true,
    }),
};
exports.default = JobsClone;
