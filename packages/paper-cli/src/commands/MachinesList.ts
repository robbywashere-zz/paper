
  import {  flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class MachinesList extends BaseCommand {
    static flags = {  
    "machineId": flags.string({
      description: "Optional machine id to match on. Note: must be specified as \"machineId\", not \"id\".",
      required: undefined,  
    }), 
    "name": flags.string({
      description: "Optional name to match on",
      required: undefined,  
    }), 
    "os": flags.string({
      description: "Optional os to match on",
      required: undefined,  
    }), 
    "ram": flags.string({
      description: "Optional ram value to match on",
      required: undefined,  
    }), 
    "cpus": flags.integer({
      description: "Optional cpu count to match on",
      required: undefined,  
    }), 
    "gpu": flags.string({
      description: "Optional gpu to match on",
      required: undefined,  
    }), 
    "storageTotal": flags.string({
      description: "Optional storageTotal value to match on",
      required: undefined,  
    }), 
    "storageUsed": flags.string({
      description: "Optional storageUsed value to match on",
      required: undefined,  
    }), 
    "usageRate": flags.string({
      description: "Optional usageRate value to match on",
      required: undefined,  
    }), 
    "shutdownTimeoutInHours": flags.integer({
      description: "Optional shutdownTimeoutInHours value to match on",
      required: undefined,  
    }), 
    "performAutoSnapshot": flags.boolean({
      description: "Optional performAutoSnapshot value to match on, either true or false",
      required: undefined,  
    }), 
    "autoSnapshotFrequency": flags.string({
      description: "Optional autoSnapshotFrequency value to match on",
      required: undefined,  
    }), 
    "autoSnapshotSaveCount": flags.integer({
      description: "Optional autoSnapshotSaveCount value to match on",
      required: undefined,  
    }), 
    "agentType": flags.string({
      description: "Optional agentType value to match on",
      required: undefined,  
    }), 
    "dtCreated": flags.string({
      description: "Optional datetime created value to match on",
      required: undefined,  
    }), 
    "state": flags.string({
      description: "Optional state value to match on",
      required: undefined,  
    }), 
    "updatesPending": flags.boolean({
      description: "Optional updatesPending value to match on",
      required: undefined,  
    }), 
    "networkId": flags.string({
      description: "Optional networkId to match on",
      required: undefined,  
    }), 
    "privateIpAddress": flags.string({
      description: "Optional privateIpAddress to match on",
      required: undefined,  
    }), 
    "publicIpAddress": flags.string({
      description: "Optional publicIpAddress to match on",
      required: undefined,  
    }), 
    "region": flags.string({
      description: "Optional region to match on",
      required: undefined,  
    }), 
    "userId": flags.string({
      description: "Optional userId to match on",
      required: undefined,  
    }), 
    "teamId": flags.string({
      description: "Optional teamId to match on",
      required: undefined,  
    }), 
    "scriptId": flags.string({
      description: "Optional scriptId to match on",
      required: undefined,  
    }), 
    "dtLastRun": flags.string({
      description: "Optional script datetime last run value to match on",
      required: undefined,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(MachinesList).flags, [], []
      );
      return this.client.MachinesList(params);
    }
  }