
  import {  flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class MachinesStop extends BaseCommand {
    static flags = {  
    "machineId": flags.string({
      description: "Id of the machine to shut down",
      required: true,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(MachinesStop).flags, [], []
      );
      return this.client.MachinesStop(params);
    }
  }