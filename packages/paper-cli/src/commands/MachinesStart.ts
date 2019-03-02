
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class MachinesStart extends BaseCommand {
    static description = "Start up an individual machine"
    static flags = {  
    "machineId": flags.string({
      description: "Id of the machine to start",
      required: true, 
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(MachinesStart).flags,[], [], []
      );
      return this.client.MachinesStart(params);
    }
  }