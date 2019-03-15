
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../../BaseCommand";

  export default class MachinesList extends BaseCommand {
    static description = "List information about all machines available to either the current authenticated user or the team, if the user belongs to a team"
    static flags = {  
    "machineId": flags.string({
      description: "Optional machine id to match on. Note: must be specified as \"machineId\", not \"id\".",
       
    }), 
    "name": flags.string({
      description: "Optional name to match on",
       
    }), 
    "os": flags.string({
      description: "Optional os to match on",
       
    }), 
    "ram": flags.string({
      description: "Optional ram value to match on",
       
    }), 
    "cpus": flags.integer({
      description: "Optional cpu count to match on",
       
    }), 
    "gpu": flags.string({
      description: "Optional gpu to match on",
       
    }), 
    "storageTotal": flags.string({
      description: "Optional storageTotal value to match on",
       
    }), 
    "storageUsed": flags.string({
      description: "Optional storageUsed value to match on",
       
    }), 
    "usageRate": flags.string({
      description: "Optional usageRate value to match on",
       
    }), 
    "shutdownTimeoutInHours": flags.integer({
      description: "Optional shutdownTimeoutInHours value to match on",
       
    }), 
    "performAutoSnapshot": flags.boolean({
      description: "Optional performAutoSnapshot value to match on, either true or false",
       
    }), 
    "autoSnapshotFrequency": flags.string({
      description: "Optional autoSnapshotFrequency value to match on",
       
    }), 
    "autoSnapshotSaveCount": flags.integer({
      description: "Optional autoSnapshotSaveCount value to match on",
       
    }), 
    "agentType": flags.string({
      description: "Optional agentType value to match on",
       
    }), 
    "dtCreated": flags.string({
      description: "Optional datetime created value to match on",
       
    }), 
    "state": flags.string({
      description: "Optional state value to match on",
       
    }), 
    "updatesPending": flags.boolean({
      description: "Optional updatesPending value to match on",
       
    }), 
    "networkId": flags.string({
      description: "Optional networkId to match on",
       
    }), 
    "privateIpAddress": flags.string({
      description: "Optional privateIpAddress to match on",
       
    }), 
    "publicIpAddress": flags.string({
      description: "Optional publicIpAddress to match on",
       
    }), 
    "region": flags.string({
      description: "Optional region to match on",
       
    }), 
    "userId": flags.string({
      description: "Optional userId to match on",
       
    }), 
    "teamId": flags.string({
      description: "Optional teamId to match on",
       
    }), 
    "scriptId": flags.string({
      description: "Optional scriptId to match on",
       
    }), 
    "dtLastRun": flags.string({
      description: "Optional script datetime last run value to match on",
       
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(MachinesList).flags,[], [], []
      );
      return this.client.MachinesList(params);
    }
  }