
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class MachinesWaitfor extends BaseCommand {
    static description = "Wait for the machine with the given id to enter a certain machine state"
    static flags = {  
    "machineId": flags.string({
      description: "Id of the machine to wait for",
      required: true, 
    }), 
    "state": flags.string({
      description: "Name of the state to wait for, either 'off', 'serviceready', 'ready'",
      required: true, 
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(MachinesWaitfor).flags,[], [], []
      );
      return this.client.MachinesWaitfor(params);
    }
  }