
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../../BaseCommand";

  export default class ScriptsCreate extends BaseCommand {
    static description = "Creates a new startup script"
    static flags = {  
    "isEnabled": flags.boolean({
      description: "Determines if the script is enabled or not.  Defaults to true",
       
    }), 
    "machineId": flags.string({
      description: "Machine id of a machine that should execute this script at startup",
       
    }), 
    "runOnce": flags.boolean({
      description: "Determines if the script is run on first boot or every boot.  Defaults to false",
       
    }), 
    "scriptDescription": flags.string({
      description: "Description of the script",
       
    }), 
    "scriptFile": flags.string({
      description: "File path to a file containing the script data; either scriptFile or scriptText must be provide.",
       
    }), 
    "scriptName": flags.string({
      description: "A unique name for the script",
      required: true, 
    }), 
    "scriptText": flags.string({
      description: "A string containing the script text; either scriptFile or scriptText must be provide.",
       
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(ScriptsCreate).flags,[], [], []
      );
      return this.client.ScriptsCreate(params);
    }
  }