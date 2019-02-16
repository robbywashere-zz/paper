"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class JobsArtifactsDestroy extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(JobsArtifactsDestroy).flags, [], []);
        return this.client.JobsArtifactsDestroy(params);
    }
}
JobsArtifactsDestroy.flags = {
    "jobId": command_1.flags.string({
        description: "The id of the job to destroy artifacts for",
        required: true,
    }),
    "files": command_1.flags.string({
        description: "Optional; if destroying only certain files, a wildcard pattern to match against, e.g., \"myfiles*\".  Note: if you include a wildcard you must double-quote the files argument.",
        required: undefined,
    }),
};
exports.default = JobsArtifactsDestroy;
