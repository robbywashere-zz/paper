
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class JobsMachineTypes extends BaseCommand {
    static description = "Return a list of available cluster machine types"
    static flags = {  
    "region": flags.string({
      description: "Optional region to match on",
      required: false,  
    }), 
    "cluster": flags.string({
      description: "Optional cluster to match on",
      required: false,  
    }), 
    "machineType": flags.string({
      description: "Optional machine type to macth on",
      required: false,  
    }), 
    "isBusy": flags.boolean({
      description: "Optional busy status value to match on",
      required: false,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(JobsMachineTypes).flags, [], []
      );
      return this.client.JobsMachineTypes(params);
    }
  }