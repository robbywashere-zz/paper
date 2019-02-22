
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class JobsClone extends BaseCommand {
    static description = "Clone an exiting job and queue the cloned copy to run"
    static flags = {  
    "jobId": flags.string({
      description: "Id of the job to clone",
      required: true,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(JobsClone).flags, [], []
      );
      return this.client.JobsClone(params);
    }
  }