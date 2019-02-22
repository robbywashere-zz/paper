
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class MachinesCreate extends BaseCommand {
    static description = "Create a new Paperspace virtual machine"
    static flags = {  
    "assignPublicIp": flags.boolean({
      description: "Assign a new public ip address on machine creation. Cannot be used with dynamicPublicIp.",
      required: undefined,  
    }), 
    "billingType": flags.string({
      description: "Either 'monthly' or 'hourly' billing",
      required: true,  
    }), 
    "dynamicPublicIp": flags.boolean({
      description: "Assigns a new public ip address on machine start and releases it from the account on machine stop. Cannot be used with assignPublicIp.",
      required: undefined,  
    }), 
    "email": flags.string({
      description: "If creating a new user for this machine, specify their email address (mutually exclusive with userId)",
      required: undefined,  
    }), 
    "firstName": flags.string({
      description: "If creating a new user, specify their first name (mutually exclusive with userId)",
      required: undefined,  
    }), 
    "lastName": flags.string({
      description: "If creating a new user, specify their last name (mutually exclusive with userId)",
      required: undefined,  
    }), 
    "machineName": flags.string({
      description: "A memorable name for this machine",
      required: true,  
    }), 
    "machineType": flags.string({
      description: "Machine type: either 'Air', 'Standard', 'Pro', 'Advanced', 'GPU+', 'P4000', 'P5000', 'P6000', 'V100', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', or 'C10'<p>\nNote:<br>\nWindows os templates cannot be used to create CPU-only machine types 'C1' - 'C10'.<br>\nUbuntu os templates cannot be used to create GRID GPU machine types: 'Air', 'Standard', 'Pro', or 'Advanced'.",
      required: true,  
    }), 
    "networkId": flags.string({
      description: "If creating on a specific network, specify its id",
      required: undefined,  
    }), 
    "notificationEmail": flags.string({
      description: "Send a notification to this email address when complete",
      required: undefined,  
    }), 
    "password": flags.boolean({
      description: "If creating a new user, specify their password (mutually exclusive with userId)",
      required: false,  
    }), 
    "region": flags.string({
      description: "Name of the region: either 'East Coast (NY2)', 'West Coast (CA1)', or 'Europe (AMS1)'",
      required: true,  
    }), 
    "scriptId": flags.string({
      description: "The script id of a script to be run on startup.  See the [Script Guide]{@link https://paperspace.github.io/paperspace-node/scripts.md} for more info on using scripts.",
      required: undefined,  
    }), 
    "size": flags.integer({
      description: "Storage size for the machine in GB",
      required: true,  
    }), 
    "teamId": flags.string({
      description: "If creating the machine for a team, specify the team id",
      required: undefined,  
    }), 
    "templateId": flags.string({
      description: "Template id of the template to use for creating this machine",
      required: true,  
    }), 
    "userId": flags.string({
      description: "If assigning to an existing user other than yourself, specify the user id (mutually exclusive with email, password, firstName, lastName)",
      required: undefined,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(MachinesCreate).flags, ["password"], []
      );
      return this.client.MachinesCreate(params);
    }
  }