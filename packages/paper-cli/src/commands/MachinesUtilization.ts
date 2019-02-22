
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class MachinesUtilization extends BaseCommand {
    static description = "Get machine utilization data for the machine with the given id"
    static flags = {  
    "machineId": flags.string({
      description: "Id of the machine to get utilization data for",
      required: true,  
    }), 
    "billingMonth": flags.string({
      description: "Billing period to query in `YYYY-MM` format",
      required: true,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(MachinesUtilization).flags, [], []
      );
      return this.client.MachinesUtilization(params);
    }
  }