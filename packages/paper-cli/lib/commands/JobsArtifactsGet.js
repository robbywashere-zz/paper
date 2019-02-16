"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const BaseCommand_1 = require("../BaseCommand");
class JobsArtifactsGet extends BaseCommand_1.BaseCommand {
    async run() {
        await this.auth();
        const params = await this.params(this.parse(JobsArtifactsGet).flags, [], []);
        return this.client.JobsArtifactsGet(params);
    }
}
JobsArtifactsGet.flags = {
    "jobId": command_1.flags.string({
        description: "Id of the job to get artifacts for",
        required: true,
    }),
    "files": command_1.flags.string({
        description: "Optional; if getting only certain files, a wildcard pattern to match against, e.g., \"myfiles*\".  Note: if you include a wildcard you must double-quote the files argument.",
        required: undefined,
    }),
    "dest": command_1.flags.string({
        description: "Optional; an existing directory to copy the artifacts files to.",
        required: undefined,
    }),
    "json": command_1.flags.boolean({
        description: "Optional; return JSON object instead of writing to standard out.  '--json' with no value is equivalent to true.",
        required: undefined,
    }),
};
exports.default = JobsArtifactsGet;
