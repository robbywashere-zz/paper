
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class JobsArtifactsGet extends BaseCommand {
    static description = "Get the artifacts files for the job with the given id"
    static flags = {  
    "json": flags.boolean({
      description: "Optional; return JSON object instead of writing to standard out.  '--json' with no value is equivalent to true.",
      required: undefined,  
    }), 
    "jobId": flags.string({
      description: "Id of the job to get artifacts for",
      required: true,  
    }), 
    "files": flags.string({
      description: "Optional; if getting only certain files, a wildcard pattern to match against, e.g., \"myfiles*\".  Note: if you include a wildcard you must double-quote the files argument.",
      required: undefined,  
    }), 
    "dest": flags.string({
      description: "Optional; an existing directory to copy the artifacts files to.",
      required: undefined,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(JobsArtifactsGet).flags, [], []
      );
      return this.client.JobsArtifactsGet(params);
    }
  }