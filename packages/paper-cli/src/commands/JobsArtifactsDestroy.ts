
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class JobsArtifactsDestroy extends BaseCommand {
    static description = "Destroy artifact files of the job with the given id"
    static flags = {  
    "jobId": flags.string({
      description: "The id of the job to destroy artifacts for",
      required: true,  
    }), 
    "files": flags.string({
      description: "Optional; if destroying only certain files, a wildcard pattern to match against, e.g., \"myfiles*\".  Note: if you include a wildcard you must double-quote the files argument.",
      required: undefined,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(JobsArtifactsDestroy).flags, [], []
      );
      return this.client.JobsArtifactsDestroy(params);
    }
  }