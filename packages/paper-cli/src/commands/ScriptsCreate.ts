
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../BaseCommand";

  export default class ScriptsCreate extends BaseCommand {
    static description = "Creates a new startup script"
    static flags = {  
    "isEnabled": flags.boolean({
      description: "Determines if the script is enabled or not.  Defaults to true",
      required: undefined,  
    }), 
    "machineId": flags.string({
      description: "Machine id of a machine that should execute this script at startup",
      required: undefined,  
    }), 
    "runOnce": flags.boolean({
      description: "Determines if the script is run on first boot or every boot.  Defaults to false",
      required: undefined,  
    }), 
    "scriptDescription": flags.string({
      description: "Description of the script",
      required: undefined,  
    }), 
    "scriptFile": flags.string({
      description: "File path to a file containing the script data; either scriptFile or scriptText must be provide.",
      required: undefined,  
    }), 
    "scriptName": flags.string({
      description: "A unique name for the script",
      required: true,  
    }), 
    "scriptText": flags.string({
      description: "A string containing the script text; either scriptFile or scriptText must be provide.",
      required: undefined,  
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(ScriptsCreate).flags, [], []
      );
      return this.client.ScriptsCreate(params);
    }
  }