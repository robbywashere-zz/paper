
  import { flags } from "@oclif/command";
  import { BaseCommand } from "../../BaseCommand";

  export default class JobsCreate extends BaseCommand {
    static description = "Create a new Paperspace job, and tail its log output if run at the command line"
    static flags = {  
    "cluster": flags.string({
      description: "An optional cluster name of a cluster to run the job on. Only one of cluster or clusterId may be specified.",
       
    }), 
    "clusterId": flags.string({
      description: "An optional cluster id of a cluster to run the job on. Only one of cluster or clusterId may be specified.",
       
    }), 
    "codeCommit": flags.string({
      description: "An optional reference to git commit hash if local workspace is a git repository. Found at runtime.",
       
    }), 
    "command": flags.string({
      description: "An optional command to run within the workspace or container.",
       
    }), 
    "container": flags.string({
      description: "A required reference to a docker image in a public or private docker registry, or a container name provided by Paperspace.  Docker image repository references must be in lowercase and may include a tag and a hostname prefix followed by a slash; if ommitted the hostname defaults to that of the public Docker Hub registry.  An example docker image reference: 'docker.io/mynamespace/myimage:mytag'.  A container name may be mixed case.  (Designated container names are currently only provided as part of various Gradient tutorials and samples.)",
      required: true, 
    }), 
    "dataset": flags.string({
      description: "An optional reference to a dataset to be merged with the container.",
       
    }), 
    "json": flags.boolean({
      description: "Optional; if true, do not write progress to standard out.  '--json' with no value is equivalent to true.",
       
    }), 
    "machineType": flags.string({
      description: "An optional machine type to run the job on: either 'GPU+', 'P4000', 'P5000', 'P6000', 'V100', 'K80', 'P100', 'TPU', or 'GradientNode'.<p>Defaults to 'K80'. <P>Note: the 'K80', 'P100', and 'TPU' machineTypes run on Google Cloud Platform (GCP).  The other machineTypes run on the Paperspace Cloud.  Google Cloud platform and Paperspace Cloud have distict Job Storage spaces;  Job storage is not currently shared between these two cloud environments.",
       
    }), 
    "name": flags.string({
      description: "An optional name or description for this job.  If ommitted, the job name defaults to 'job N' where N represents the Nth job instance for the given project.",
       
    }), 
    "nodeAttrs": flags.integer({
      description: "Optional; a JSON expression describing the node attributes for a compatible GradientNode machine to run this job.  See the Gradient-Node documentation for more info.",
       
    }), 
    "ports": flags.string({
      description: "An optional list of port mappings to open on the job cluster machine while the job is running.  The port mappings are specified as 'XXXX:YYYY' where XXXX is an external port number and YYYY is an internal port number.  Mulitple port mappings can be provided as a comma separated list. Port numbers must be greater than 1023. Note: only /tcp protocol usage is supported.",
       
    }), 
    "project": flags.string({
      description: "The name of the project for this job.  If not provided, this is taken from the .ps_project/config.json file, or the current directory name.",
       
    }), 
    "projectId": flags.string({
      description: "The poject id of an existing project for this job.  Note: if projectId is specified, the project parameter cannot be specified.",
       
    }), 
    "registryPassword": flags.boolean({
      description: "An optional password for accessing an image hosted on a private container registry.  Note: you must specify this option every time a private image is specified for the container.",
       
    }), 
    "registryUsername": flags.string({
      description: "An optional username for accessing an image hosted on a private container registry.  Note: you must specify this option every time a private image is specified for the container.",
       
    }), 
    "sharedMemMBytes": flags.integer({
      description: "Optional; shared memory size for the job container in megabytes (1 megabyte = 1024 * 1024 bytes).  Cannot exceed total memory size for the given machine type.",
       
    }), 
    "tail": flags.boolean({
      description: "Optional; defaults to true in command line mode only.  Specify false to disable automatic tailing.",
       
    }), 
    "workspace": flags.string({
      description: "An optional path to a workspace, or link to a git repository to upload and merge with the container.  If a zip file name is provided it is uploaded instead.  If no workspace is provided the current directory is zipped up and transferred.  If the workspace is 'none', no workspace is merged and the container is run as-is. To download a git repository provide an https repository link and optionally prefix it with 'git+', e.g. 'https://github.com/MyProjects/MyRepo.git'.  If the 'git+' prefix is not specified, it is added at the time of download to the job runner machine.  S3 links are also supported using the schema 's3://bucketname/objectname'.",
       
    }), 
    "workspacePassword": flags.boolean({
      description: "An optional password for accessing a private git repository.  We recommned using an OAuth token (GitHub instructions can be found <a href=\"https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/\">here</a>).  Note: you must specify this option every time a private git repository is specified for the workspace.",
       
    }), 
    "workspaceUsername": flags.string({
      description: "An optional username for accessing a private git repository.  Note: you must specify this option every time a private git repository is specified for the workspace.",
       
    }),} 
    async run() {
      await this.auth();
      const params = await this.params(
          this.parse(JobsCreate).flags,["registryPassword","workspacePassword"], [], []
      );
      return this.client.JobsCreate(params);
    }
  }