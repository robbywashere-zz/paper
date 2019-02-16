
  import {  flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class MachinesDestroy extends BaseCommand {
    static flags = {  
    "machineId": flags.string({
      description: "The id of the machine to destroy",
      required: true,  
    }), 
    "releasePublicIp": flags.boolean({
      description: "releases any assigned public ip address for the machine; defaults to false",
      required: undefined,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(MachinesDestroy).flags, [], []
      );
      return this.client.MachinesDestroy(params);
    }
  }