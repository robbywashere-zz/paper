
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class MachinesUpdate extends BaseCommand {
    static description = "Update attributes of a machine"
    static flags = {  
    "machineId": flags.string({
      description: "Id of the machine to update",
      required: true, 
    }), 
    "autoSnapshotFrequency": flags.integer({
      description: "One of 'hour', 'day', 'week', or null",
       
    }), 
    "autoSnapshotSaveCount": flags.integer({
      description: "Number of snapshots to save",
       
    }), 
    "dynamicPublicIp": flags.boolean({
      description: "If true, assigns a new public ip address on machine start and releases it from the account on machine stop",
       
    }), 
    "machineName": flags.string({
      description: "New name for the machine",
       
    }), 
    "performAutoSnapshot": flags.boolean({
      description: "Perform auto snapshots",
       
    }), 
    "shutdownTimeoutForces": flags.boolean({
      description: "Force shutdown at shutdown timeout, even if there is a Paperspace client connection",
       
    }), 
    "shutdownTimeoutInHours": flags.integer({
      description: "Number of hours before machine is shutdown if no one is logged in via the Paperspace client",
       
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(MachinesUpdate).flags,[], [], []
      );
      return this.client.MachinesUpdate(params);
    }
  }