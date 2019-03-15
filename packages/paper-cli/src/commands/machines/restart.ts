
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../../BaseCommand";

  export default class MachinesRestart extends BaseCommand {
    static description = "Restart an individual machine"
    static flags = {  
    "machineId": flags.string({
      description: "Id of the machine to restart",
      required: true, 
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(MachinesRestart).flags,[], [], []
      );
      return this.client.MachinesRestart(params);
    }
  }