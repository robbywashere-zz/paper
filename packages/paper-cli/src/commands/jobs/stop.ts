
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../../BaseCommand";

  export default class JobsStop extends BaseCommand {
    static description = "Stop an individual job"
    static flags = {  
    "jobId": flags.string({
      description: "Id of the job to shut down",
      required: true, 
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(JobsStop).flags,[], [], []
      );
      return this.client.JobsStop(params);
    }
  }