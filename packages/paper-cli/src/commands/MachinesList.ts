
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class MachinesList extends BaseCommand {
    static description = "List information about all machines available to either the current authenticated user or the team, if the user belongs to a team"
    static flags = {  
    "machineId": flags.string({
      description: "Optional machine id to match on. Note: must be specified as \"machineId\", not \"id\".",
      required: false,  
    }), 
    "name": flags.string({
      description: "Optional name to match on",
      required: false,  
    }), 
    "os": flags.string({
      description: "Optional os to match on",
      required: false,  
    }), 
    "ram": flags.string({
      description: "Optional ram value to match on",
      required: false,  
    }), 
    "cpus": flags.integer({
      description: "Optional cpu count to match on",
      required: false,  
    }), 
    "gpu": flags.string({
      description: "Optional gpu to match on",
      required: false,  
    }), 
    "storageTotal": flags.string({
      description: "Optional storageTotal value to match on",
      required: false,  
    }), 
    "storageUsed": flags.string({
      description: "Optional storageUsed value to match on",
      required: false,  
    }), 
    "usageRate": flags.string({
      description: "Optional usageRate value to match on",
      required: false,  
    }), 
    "shutdownTimeoutInHours": flags.integer({
      description: "Optional shutdownTimeoutInHours value to match on",
      required: false,  
    }), 
    "performAutoSnapshot": flags.boolean({
      description: "Optional performAutoSnapshot value to match on, either true or false",
      required: false,  
    }), 
    "autoSnapshotFrequency": flags.string({
      description: "Optional autoSnapshotFrequency value to match on",
      required: false,  
    }), 
    "autoSnapshotSaveCount": flags.integer({
      description: "Optional autoSnapshotSaveCount value to match on",
      required: false,  
    }), 
    "agentType": flags.string({
      description: "Optional agentType value to match on",
      required: false,  
    }), 
    "dtCreated": flags.string({
      description: "Optional datetime created value to match on",
      required: false,  
    }), 
    "state": flags.string({
      description: "Optional state value to match on",
      required: false,  
    }), 
    "updatesPending": flags.boolean({
      description: "Optional updatesPending value to match on",
      required: false,  
    }), 
    "networkId": flags.string({
      description: "Optional networkId to match on",
      required: false,  
    }), 
    "privateIpAddress": flags.string({
      description: "Optional privateIpAddress to match on",
      required: false,  
    }), 
    "publicIpAddress": flags.string({
      description: "Optional publicIpAddress to match on",
      required: false,  
    }), 
    "region": flags.string({
      description: "Optional region to match on",
      required: false,  
    }), 
    "userId": flags.string({
      description: "Optional userId to match on",
      required: false,  
    }), 
    "teamId": flags.string({
      description: "Optional teamId to match on",
      required: false,  
    }), 
    "scriptId": flags.string({
      description: "Optional scriptId to match on",
      required: false,  
    }), 
    "dtLastRun": flags.string({
      description: "Optional script datetime last run value to match on",
      required: false,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(MachinesList).flags, [], []
      );
      return this.client.MachinesList(params);
    }
  }