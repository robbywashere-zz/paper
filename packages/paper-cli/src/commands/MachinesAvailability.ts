
  import {  flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class MachinesAvailability extends BaseCommand {
    static flags = {  
    "region": flags.string({
      description: "Name of the region: either 'East Coast (NY2)', 'West Coast (CA1)', or 'Europe (AMS1)'",
      required: true,  
    }), 
    "machineType": flags.string({
      description: "Machine type: either 'GPU+', 'P4000', 'P5000', 'P6000', or 'V100'<p>",
      required: true,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(MachinesAvailability).flags, [], []
      );
      return this.client.MachinesAvailability(params);
    }
  }