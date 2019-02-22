import { Response } from "superagent";
export interface ResponseWithBody<T> extends Response {
    body: T;
}
export declare type RequestType = {
    path: string;
    method: string;
    bodyParams?: {};
    queryParams?: {};
};
export declare type RequestFunction = <T>(req: RequestType, skipAuth?: boolean) => Promise<ResponseWithBody<T>>;
export declare type LoginUserResponse = {
    key: string;
    name: string;
};
export declare type JobsArtifactsGetResponse = {
    Credentials?: {
        AccessKeyId?: string;
        SecretAccessKey?: string;
        SessionToken?: string;
    };
    bucket?: string;
    folder?: string;
};
export declare type JobsArtifactsListResponse = Array<{
    file: string;
    size: number;
}>;
export declare type JobsCreateResponse = {
    artifactsDirectory?: string;
    cluster?: string;
    clusterMachine?: string;
    container?: string;
    dtCreated?: string;
    dtDeleted?: string;
    dtFinished?: string;
    dtModified?: string;
    dtProvisioningFinished?: string;
    dtProvisioningStarted?: string;
    dtStarted?: string;
    dtTeardownFinished?: string;
    dtTeardownStarted?: string;
    entrypoint?: string;
    exitCode?: number;
    id?: string;
    ipAddress?: string;
    jobError?: boolean;
    machineType?: string;
    name?: string;
    parentJobId?: string;
    ports?: string;
    project?: string;
    projectId?: string;
    startedByUserId?: string;
    state?: string;
    storageRegion?: string;
    usageRate?: string;
    workingDirectory?: string;
    workspaceUrl?: string;
};
export declare type JobsMachineTypesResponse = Array<{
    cluster: string;
    isBusy: boolean;
    machineType: string;
    region: string;
}>;
export declare type JobsWaitforResponse = {
    artifactsDirectory?: string;
    cluster?: string;
    container?: string;
    dtCreated?: string;
    dtDeleted?: string;
    dtFinished?: string;
    dtModified?: string;
    dtProvisioningFinished?: string;
    dtProvisioningStarted?: string;
    dtStarted?: string;
    dtTeardownFinished?: string;
    dtTeardownStarted?: string;
    entrypoint?: string;
    exitCode?: number;
    id?: string;
    jobError?: boolean;
    machineType?: string;
    name?: string;
    parentJobId?: string;
    project?: string;
    projectId?: string;
    startedByUserId?: string;
    state?: string;
    usageRate?: string;
    workingDirectory?: string;
    workspaceUrl?: string;
};
export declare type JobsListResponse = Array<{
    artifactsDirectory?: string;
    cluster?: string;
    container?: string;
    dtCreated?: string;
    dtDeleted?: string;
    dtFinished?: string;
    dtModified?: string;
    dtProvisioningFinished?: string;
    dtProvisioningStarted?: string;
    dtStarted?: string;
    dtTeardownFinished?: string;
    dtTeardownStarted?: string;
    entrypoint?: string;
    exitCode?: number;
    id?: string;
    jobError?: boolean;
    machineType?: string;
    name?: string;
    parentJobId?: string;
    project?: string;
    projectId?: string;
    startedByUserId?: string;
    state?: string;
    usageRate?: string;
    workingDirectory?: string;
    workspaceUrl?: string;
}>;
export declare type JobsLogsResponse = Array<{
    line?: number;
    message?: string;
}>;
export declare type JobsArtifactsDestroyResponse = any;
export declare type JobsCloneResponse = {
    artifactsDirectory?: string;
    cluster?: string;
    container?: string;
    dtCreated?: string;
    dtDeleted?: string;
    dtFinished?: string;
    dtModified?: string;
    dtProvisioningFinished?: string;
    dtProvisioningStarted?: string;
    dtStarted?: string;
    dtTeardownFinished?: string;
    dtTeardownStarted?: string;
    entrypoint?: string;
    exitCode?: number;
    id?: string;
    jobError?: boolean;
    machineType?: string;
    name?: string;
    parentJobId?: string;
    project?: string;
    projectId?: string;
    startedByUserId?: string;
    state?: string;
    usageRate?: string;
    workingDirectory?: string;
    workspaceUrl?: string;
};
export declare type JobsDestroyResponse = any;
export declare type JobsStopResponse = any;
export declare type MachinesCreateResponse = {
    agentType?: string;
    autoSnapshotFrequency?: number;
    autoSnapshotSaveCount?: number;
    cpus?: number;
    dtCreated?: string;
    dtLastRun?: string;
    dynamicPublicIp?: string;
    gpu?: string;
    id?: string;
    name?: string;
    networkId?: string;
    os?: string;
    performAutoSnapshot?: boolean;
    privateIpAddress?: string;
    publicIpAddress?: string;
    ram?: string;
    region?: string;
    scriptId?: string;
    shutdownTimeoutForces?: boolean;
    shutdownTimeoutInHours?: number;
    state?: string;
    storageTotal?: string;
    storageUsed?: string;
    teamId?: string;
    updatesPending?: boolean;
    usageRate?: string;
    userId?: string;
};
export declare type MachinesAvailabilityResponse = {
    available?: boolean;
};
export declare type MachinesWaitforResponse = {
    agentType?: string;
    autoSnapshotFrequency?: number;
    autoSnapshotSaveCount?: number;
    cpus?: number;
    dtCreated?: string;
    dtLastRun?: string;
    dynamicPublicIp?: string;
    gpu?: string;
    id?: string;
    name?: string;
    networkId?: string;
    os?: string;
    performAutoSnapshot?: boolean;
    privateIpAddress?: string;
    publicIpAddress?: string;
    ram?: string;
    region?: string;
    scriptId?: string;
    shutdownTimeoutForces?: boolean;
    shutdownTimeoutInHours?: number;
    state?: string;
    storageTotal?: string;
    storageUsed?: string;
    teamId?: string;
    updatesPending?: boolean;
    usageRate?: string;
    userId?: string;
};
export declare type MachinesListResponse = Array<{
    agentType?: string;
    autoSnapshotFrequency?: number;
    autoSnapshotSaveCount?: number;
    cpus?: number;
    dtCreated?: string;
    dtLastRun?: string;
    dynamicPublicIp?: string;
    gpu?: string;
    id?: string;
    name?: string;
    networkId?: string;
    os?: string;
    performAutoSnapshot?: boolean;
    privateIpAddress?: string;
    publicIpAddress?: string;
    ram?: string;
    region?: string;
    scriptId?: string;
    shutdownTimeoutForces?: boolean;
    shutdownTimeoutInHours?: number;
    state?: string;
    storageTotal?: string;
    storageUsed?: string;
    teamId?: string;
    updatesPending?: boolean;
    usageRate?: string;
    userId?: string;
}>;
export declare type MachinesUtilizationResponse = {
    machineId?: string;
    storageUtilization?: {
        billingMonth?: string;
        machineId?: string;
        monthlyRate?: string;
        secondsUsed?: number;
    };
    utilization?: {
        billingMonth?: string;
        hourlyRate?: string;
        machineId?: string;
        secondsUsed?: number;
    };
};
export declare type MachinesDestroyResponse = any;
export declare type MachinesRestartResponse = any;
export declare type MachinesStartResponse = any;
export declare type MachinesStopResponse = any;
export declare type MachinesUpdateResponse = any;
export declare type NetworksListResponse = Array<{
    dtCreated?: string;
    id?: string;
    name?: string;
    netmask?: string;
    network?: string;
    region?: string;
    teamId?: string;
}>;
export declare type ScriptsCreateResponse = {
    description?: string;
    dtCreated?: string;
    id?: string;
    isEnabled?: boolean;
    name?: string;
    ownerId?: string;
    ownerType?: string;
    runOnce?: boolean;
};
export declare type ScriptsShowResponse = {
    description?: string;
    dtCreated?: string;
    id?: string;
    isEnabled?: boolean;
    machines?: Array<{
        dtLastRun: string;
        machineId: string;
    }>;
    name?: string;
    ownerId?: string;
    ownerType?: string;
    runOnce?: boolean;
};
export declare type ScriptsTextResponse = string;
export declare type ScriptsListResponse = Array<{
    description?: string;
    dtCreated?: string;
    id?: string;
    isEnabled?: boolean;
    name?: string;
    ownerId?: string;
    ownerType?: string;
    runOnce?: boolean;
}>;
export declare type ScriptsDestroyResponse = any;
export declare type TemplatesListResponse = Array<{
    dtCreated: string;
    id: string;
    label: string;
    name: string;
    os: string;
    region?: string;
    teamId?: string;
    userId?: string;
}>;
export declare type UsersListResponse = Array<{
    dtCreated: string;
    email: string;
    firstname: string;
    id: string;
    lastname: string;
    teamId: string;
}>;
export default class Api {
    apiKey?: string | undefined;
    constructor(apiKey?: string | undefined);
    SetRequestMethod(fn: RequestFunction): void;
    request: RequestFunction;
    SetToken(apiKey: string): void;
    private pick;
    private checkParams;
    /** Logs in the user and acquires an api key
     * @method
     * @name LoginUser
       * @param {string} [apiToken] - Optional name of an existing API token for the user's account
  * @param {string} email - Email address of the paperspace user to log in
  * @param {string} password - Password for the specified email address
     */
    LoginUser(parameters: {
        apiToken?: string;
        email: string;
        password: string;
    }): Promise<ResponseWithBody<LoginUserResponse>>;
    /** Get the artifacts files for the job with the given id
     * @method
     * @name JobsArtifactsGet
       * @param {string} jobId - Id of the job to get artifacts for
  * @param {string} [files] - Optional; if getting only certain files, a wildcard pattern to match against, e.g., "myfiles*".  Note: if you include a wildcard you must double-quote the files argument.
  * @param {string} [dest] - Optional; an existing directory to copy the artifacts files to.
     */
    JobsArtifactsGet(parameters: {
        jobId: string;
        files?: string;
        dest?: string;
    }): Promise<ResponseWithBody<JobsArtifactsGetResponse>>;
    /** List job artifact files for the specified job
     * @method
     * @name JobsArtifactsList
       * @param {string} jobId - Id of the job to list artifacts for
  * @param {string} [files] - Optional; wildcard expression of file(s) to list, e.g., "myfiles*".  Note: if you include a wildcard you must double-quote the files argument.
  * @param {boolean} [size] - Optional; include file size in bytes.  '--size' with no value is equivalent to true.
  * @param {boolean} [links] - Optional; include https links to artifacts.  Note: links are only valid for 8 hours. '--links' with no value is equivalent to true.
     */
    JobsArtifactsList(parameters: {
        jobId: string;
        files?: string;
        size?: boolean;
        links?: boolean;
    }): Promise<ResponseWithBody<{
        file: string;
        size: number;
    }[]>>;
    /** Create a new Paperspace job, and tail its log output if run at the command line
     * @method
     * @name JobsCreate
       * @param {string} [cluster] - An optional cluster name of a cluster to run the job on. Only one of cluster or clusterId may be specified.
  * @param {string} [clusterId] - An optional cluster id of a cluster to run the job on. Only one of cluster or clusterId may be specified.
  * @param {string} [codeCommit] - An optional reference to git commit hash if local workspace is a git repository. Found at runtime.
  * @param {string} [command] - An optional command to run within the workspace or container.
  * @param {string} container - A required reference to a docker image in a public or private docker registry, or a container name provided by Paperspace.  Docker image repository references must be in lowercase and may include a tag and a hostname prefix followed by a slash; if ommitted the hostname defaults to that of the public Docker Hub registry.  An example docker image reference: 'docker.io/mynamespace/myimage:mytag'.  A container name may be mixed case.  (Designated container names are currently only provided as part of various Gradient tutorials and samples.)
  * @param {string} [dataset] - An optional reference to a dataset to be merged with the container.
  * @param {boolean} [json] - Optional; if true, do not write progress to standard out.  '--json' with no value is equivalent to true.
  * @param {string} [machineType] - An optional machine type to run the job on: either 'GPU+', 'P4000', 'P5000', 'P6000', 'V100', 'K80', 'P100', 'TPU', or 'GradientNode'.<p>Defaults to 'K80'. <P>Note: the 'K80', 'P100', and 'TPU' machineTypes run on Google Cloud Platform (GCP).  The other machineTypes run on the Paperspace Cloud.  Google Cloud platform and Paperspace Cloud have distict Job Storage spaces;  Job storage is not currently shared between these two cloud environments.
  * @param {string} [name] - An optional name or description for this job.  If ommitted, the job name defaults to 'job N' where N represents the Nth job instance for the given project.
  * @param {number} [nodeAttrs] - Optional; a JSON expression describing the node attributes for a compatible GradientNode machine to run this job.  See the Gradient-Node documentation for more info.
  * @param {string} [ports] - An optional list of port mappings to open on the job cluster machine while the job is running.  The port mappings are specified as 'XXXX:YYYY' where XXXX is an external port number and YYYY is an internal port number.  Mulitple port mappings can be provided as a comma separated list. Port numbers must be greater than 1023. Note: only /tcp protocol usage is supported.
  * @param {string} [project] - The name of the project for this job.  If not provided, this is taken from the .ps_project/config.json file, or the current directory name.
  * @param {string} [projectId] - The poject id of an existing project for this job.  Note: if projectId is specified, the project parameter cannot be specified.
  * @param {string} [registryPassword] - An optional password for accessing an image hosted on a private container registry.  Note: you must specify this option every time a private image is specified for the container.
  * @param {string} [registryUsername] - An optional username for accessing an image hosted on a private container registry.  Note: you must specify this option every time a private image is specified for the container.
  * @param {number} [sharedMemMBytes] - Optional; shared memory size for the job container in megabytes (1 megabyte = 1024 * 1024 bytes).  Cannot exceed total memory size for the given machine type.
  * @param {boolean} [tail] - Optional; defaults to true in command line mode only.  Specify false to disable automatic tailing.
  * @param {string} [workspace] - An optional path to a workspace, or link to a git repository to upload and merge with the container.  If a zip file name is provided it is uploaded instead.  If no workspace is provided the current directory is zipped up and transferred.  If the workspace is 'none', no workspace is merged and the container is run as-is. To download a git repository provide an https repository link and optionally prefix it with 'git+', e.g. 'https://github.com/MyProjects/MyRepo.git'.  If the 'git+' prefix is not specified, it is added at the time of download to the job runner machine.  S3 links are also supported using the schema 's3://bucketname/objectname'.
  * @param {string} [workspacePassword] - An optional password for accessing a private git repository.  We recommned using an OAuth token (GitHub instructions can be found <a href="https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/">here</a>).  Note: you must specify this option every time a private git repository is specified for the workspace.
  * @param {string} [workspaceUsername] - An optional username for accessing a private git repository.  Note: you must specify this option every time a private git repository is specified for the workspace.
     */
    JobsCreate(parameters: {
        cluster?: string;
        clusterId?: string;
        codeCommit?: string;
        command?: string;
        container: string;
        dataset?: string;
        json?: boolean;
        machineType?: string;
        name?: string;
        nodeAttrs?: number;
        ports?: string;
        project?: string;
        projectId?: string;
        registryPassword?: string;
        registryUsername?: string;
        sharedMemMBytes?: number;
        tail?: boolean;
        workspace?: string;
        workspacePassword?: string;
        workspaceUsername?: string;
    }): Promise<ResponseWithBody<JobsCreateResponse>>;
    /** Return a list of available cluster machine types
     * @method
     * @name JobsMachineTypes
       * @param {string} [region] - Optional region to match on
  * @param {string} [cluster] - Optional cluster to match on
  * @param {string} [machineType] - Optional machine type to macth on
  * @param {boolean} [isBusy] - Optional busy status value to match on
     */
    JobsMachineTypes(parameters?: {
        region?: string;
        cluster?: string;
        machineType?: string;
        isBusy?: boolean;
    }): Promise<ResponseWithBody<{
        cluster: string;
        isBusy: boolean;
        machineType: string;
        region: string;
    }[]>>;
    /** Wait for the job with the given id to enter a certain job state
     * @method
     * @name JobsWaitfor
       * @param {string} jobId - Id of the job to wait for
  * @param {string} state - Name of the state to wait for
     */
    JobsWaitfor(parameters: {
        jobId: string;
        state: string;
    }): Promise<ResponseWithBody<JobsWaitforResponse>>;
    /** List information about all jobs available to either the current authenticated user or the team, if the user belongs to a team
     * @method
     * @name JobsList
       * @param {string} [project] - Optional project to match on.  If neither project nor projectId are provided, this is taken from the .ps_project/config.json file, or the current directory name.  Specify 'all' to list jobs for all projects associated with the user or team if the user is on a team.
  * @param {string} [projectId] - Optional projectId to match on
  * @param {string} [name] - Optional job name to match on
  * @param {string} [machineType] - Optional machineType to match on
  * @param {string} [state] - Optional state value to match on
  * @param {string} [container] - Optional container to match on
  * @param {string} [command] - Optional command to match on
  * @param {string} [workspace] - Optional workspace path to match on.  Note: the original workspace path will be modified on upload to point to a temporary location.
  * @param {string} [dataset] - Optional dataset to match on
     */
    JobsList(parameters?: {
        project?: string;
        projectId?: string;
        name?: string;
        machineType?: string;
        state?: string;
        container?: string;
        command?: string;
        workspace?: string;
        dataset?: string;
    }): Promise<ResponseWithBody<{
        artifactsDirectory?: string | undefined;
        cluster?: string | undefined;
        container?: string | undefined;
        dtCreated?: string | undefined;
        dtDeleted?: string | undefined;
        dtFinished?: string | undefined;
        dtModified?: string | undefined;
        dtProvisioningFinished?: string | undefined;
        dtProvisioningStarted?: string | undefined;
        dtStarted?: string | undefined;
        dtTeardownFinished?: string | undefined;
        dtTeardownStarted?: string | undefined;
        entrypoint?: string | undefined;
        exitCode?: number | undefined;
        id?: string | undefined;
        jobError?: boolean | undefined;
        machineType?: string | undefined;
        name?: string | undefined;
        parentJobId?: string | undefined;
        project?: string | undefined;
        projectId?: string | undefined;
        startedByUserId?: string | undefined;
        state?: string | undefined;
        usageRate?: string | undefined;
        workingDirectory?: string | undefined;
        workspaceUrl?: string | undefined;
    }[]>>;
    /** Stream the logs for the job with the given id, while the job is running or after it has stopped
     * @method
     * @name JobsLogs
       * @param {string} jobId - Id of the job to logs
  * @param {boolean} [tail] - Optional; if tail is specified logs will be streamed until the job stops.
  * @param {number} [line] - Optional; if line is specified logs only logs after that line will be returned (up to limit).
  * @param {number} [limit] - Optional; number of log lines to retrieve on each request; default limit is 2000.
     */
    JobsLogs(parameters: {
        jobId: string;
        tail?: boolean;
        line?: number;
        limit?: number;
    }): Promise<ResponseWithBody<{
        line?: number | undefined;
        message?: string | undefined;
    }[]>>;
    /** Destroy artifact files of the job with the given id
     * @method
     * @name JobsArtifactsDestroy
       * @param {string} jobId - The id of the job to destroy artifacts for
  * @param {string} [files] - Optional; if destroying only certain files, a wildcard pattern to match against, e.g., "myfiles*".  Note: if you include a wildcard you must double-quote the files argument.
     */
    JobsArtifactsDestroy(parameters: {
        jobId: string;
        files?: string;
    }): Promise<ResponseWithBody<any>>;
    /** Clone an exiting job and queue the cloned copy to run
     * @method
     * @name JobsClone
       * @param {string} jobId - Id of the job to clone
     */
    JobsClone(parameters: {
        jobId: string;
    }): Promise<ResponseWithBody<JobsCloneResponse>>;
    /** Destroy the job with the given id
     * @method
     * @name JobsDestroy
       * @param {string} jobId - The id of the job to destroy
     */
    JobsDestroy(parameters: {
        jobId: string;
    }): Promise<ResponseWithBody<any>>;
    /** Stop an individual job
     * @method
     * @name JobsStop
       * @param {string} jobId - Id of the job to shut down
     */
    JobsStop(parameters: {
        jobId: string;
    }): Promise<ResponseWithBody<any>>;
    /** Create a new Paperspace virtual machine
     * @method
     * @name MachinesCreate
       * @param {boolean} [assignPublicIp] - Assign a new public ip address on machine creation. Cannot be used with dynamicPublicIp.
  * @param {string} billingType - Either 'monthly' or 'hourly' billing
  * @param {boolean} [dynamicPublicIp] - Assigns a new public ip address on machine start and releases it from the account on machine stop. Cannot be used with assignPublicIp.
  * @param {string} [email] - If creating a new user for this machine, specify their email address (mutually exclusive with userId)
  * @param {string} [firstName] - If creating a new user, specify their first name (mutually exclusive with userId)
  * @param {string} [lastName] - If creating a new user, specify their last name (mutually exclusive with userId)
  * @param {string} machineName - A memorable name for this machine
  * @param {string} machineType - Machine type: either 'Air', 'Standard', 'Pro', 'Advanced', 'GPU+', 'P4000', 'P5000', 'P6000', 'V100', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', or 'C10'<p>
  Note:<br>
  Windows os templates cannot be used to create CPU-only machine types 'C1' - 'C10'.<br>
  Ubuntu os templates cannot be used to create GRID GPU machine types: 'Air', 'Standard', 'Pro', or 'Advanced'.
  * @param {string} [networkId] - If creating on a specific network, specify its id
  * @param {string} [notificationEmail] - Send a notification to this email address when complete
  * @param {string} [password] - If creating a new user, specify their password (mutually exclusive with userId)
  * @param {string} region - Name of the region: either 'East Coast (NY2)', 'West Coast (CA1)', or 'Europe (AMS1)'
  * @param {string} [scriptId] - The script id of a script to be run on startup.  See the [Script Guide]{@link https://paperspace.github.io/paperspace-node/scripts.md} for more info on using scripts.
  * @param {number} size - Storage size for the machine in GB
  * @param {string} [teamId] - If creating the machine for a team, specify the team id
  * @param {string} templateId - Template id of the template to use for creating this machine
  * @param {string} [userId] - If assigning to an existing user other than yourself, specify the user id (mutually exclusive with email, password, firstName, lastName)
     */
    MachinesCreate(parameters: {
        assignPublicIp?: boolean;
        billingType: string;
        dynamicPublicIp?: boolean;
        email?: string;
        firstName?: string;
        lastName?: string;
        machineName: string;
        machineType: string;
        networkId?: string;
        notificationEmail?: string;
        password?: string;
        region: string;
        scriptId?: string;
        size: number;
        teamId?: string;
        templateId: string;
        userId?: string;
    }): Promise<ResponseWithBody<MachinesCreateResponse>>;
    /** Get machine availability for the given region and machine type
     * @method
     * @name MachinesAvailability
       * @param {string} region - Name of the region: either 'East Coast (NY2)', 'West Coast (CA1)', or 'Europe (AMS1)'
  * @param {string} machineType - Machine type: either 'GPU+', 'P4000', 'P5000', 'P6000', or 'V100'<p>
     */
    MachinesAvailability(parameters: {
        region: string;
        machineType: string;
    }): Promise<ResponseWithBody<MachinesAvailabilityResponse>>;
    /** Wait for the machine with the given id to enter a certain machine state
     * @method
     * @name MachinesWaitfor
       * @param {string} machineId - Id of the machine to wait for
  * @param {string} state - Name of the state to wait for, either 'off', 'serviceready', 'ready'
     */
    MachinesWaitfor(parameters: {
        machineId: string;
        state: string;
    }): Promise<ResponseWithBody<MachinesWaitforResponse>>;
    /** List information about all machines available to either the current authenticated user or the team, if the user belongs to a team
     * @method
     * @name MachinesList
       * @param {string} [machineId] - Optional machine id to match on. Note: must be specified as "machineId", not "id".
  * @param {string} [name] - Optional name to match on
  * @param {string} [os] - Optional os to match on
  * @param {string} [ram] - Optional ram value to match on
  * @param {number} [cpus] - Optional cpu count to match on
  * @param {string} [gpu] - Optional gpu to match on
  * @param {string} [storageTotal] - Optional storageTotal value to match on
  * @param {string} [storageUsed] - Optional storageUsed value to match on
  * @param {string} [usageRate] - Optional usageRate value to match on
  * @param {number} [shutdownTimeoutInHours] - Optional shutdownTimeoutInHours value to match on
  * @param {boolean} [performAutoSnapshot] - Optional performAutoSnapshot value to match on, either true or false
  * @param {string} [autoSnapshotFrequency] - Optional autoSnapshotFrequency value to match on
  * @param {number} [autoSnapshotSaveCount] - Optional autoSnapshotSaveCount value to match on
  * @param {string} [agentType] - Optional agentType value to match on
  * @param {string} [dtCreated] - Optional datetime created value to match on
  * @param {string} [state] - Optional state value to match on
  * @param {boolean} [updatesPending] - Optional updatesPending value to match on
  * @param {string} [networkId] - Optional networkId to match on
  * @param {string} [privateIpAddress] - Optional privateIpAddress to match on
  * @param {string} [publicIpAddress] - Optional publicIpAddress to match on
  * @param {string} [region] - Optional region to match on
  * @param {string} [userId] - Optional userId to match on
  * @param {string} [teamId] - Optional teamId to match on
  * @param {string} [scriptId] - Optional scriptId to match on
  * @param {string} [dtLastRun] - Optional script datetime last run value to match on
     */
    MachinesList(parameters?: {
        machineId?: string;
        name?: string;
        os?: string;
        ram?: string;
        cpus?: number;
        gpu?: string;
        storageTotal?: string;
        storageUsed?: string;
        usageRate?: string;
        shutdownTimeoutInHours?: number;
        performAutoSnapshot?: boolean;
        autoSnapshotFrequency?: string;
        autoSnapshotSaveCount?: number;
        agentType?: string;
        dtCreated?: string;
        state?: string;
        updatesPending?: boolean;
        networkId?: string;
        privateIpAddress?: string;
        publicIpAddress?: string;
        region?: string;
        userId?: string;
        teamId?: string;
        scriptId?: string;
        dtLastRun?: string;
    }): Promise<ResponseWithBody<{
        agentType?: string | undefined;
        autoSnapshotFrequency?: number | undefined;
        autoSnapshotSaveCount?: number | undefined;
        cpus?: number | undefined;
        dtCreated?: string | undefined;
        dtLastRun?: string | undefined;
        dynamicPublicIp?: string | undefined;
        gpu?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        networkId?: string | undefined;
        os?: string | undefined;
        performAutoSnapshot?: boolean | undefined;
        privateIpAddress?: string | undefined;
        publicIpAddress?: string | undefined;
        ram?: string | undefined;
        region?: string | undefined;
        scriptId?: string | undefined;
        shutdownTimeoutForces?: boolean | undefined;
        shutdownTimeoutInHours?: number | undefined;
        state?: string | undefined;
        storageTotal?: string | undefined;
        storageUsed?: string | undefined;
        teamId?: string | undefined;
        updatesPending?: boolean | undefined;
        usageRate?: string | undefined;
        userId?: string | undefined;
    }[]>>;
    /** Get machine utilization data for the machine with the given id
     * @method
     * @name MachinesUtilization
       * @param {string} machineId - Id of the machine to get utilization data for
  * @param {string} billingMonth - Billing period to query in `YYYY-MM` format
     */
    MachinesUtilization(parameters: {
        machineId: string;
        billingMonth: string;
    }): Promise<ResponseWithBody<MachinesUtilizationResponse>>;
    /** Destroy the machine with the given id
     * @method
     * @name MachinesDestroy
       * @param {string} machineId - The id of the machine to destroy
  * @param {boolean} [releasePublicIp] - releases any assigned public ip address for the machine; defaults to false
     */
    MachinesDestroy(parameters: {
        machineId: string;
        releasePublicIp?: boolean;
    }): Promise<ResponseWithBody<any>>;
    /** Restart an individual machine
     * @method
     * @name MachinesRestart
       * @param {string} machineId - Id of the machine to restart
     */
    MachinesRestart(parameters: {
        machineId: string;
    }): Promise<ResponseWithBody<any>>;
    /** Start up an individual machine
     * @method
     * @name MachinesStart
       * @param {string} machineId - Id of the machine to start
     */
    MachinesStart(parameters: {
        machineId: string;
    }): Promise<ResponseWithBody<any>>;
    /** Stop an individual machine
     * @method
     * @name MachinesStop
       * @param {string} machineId - Id of the machine to shut down
     */
    MachinesStop(parameters: {
        machineId: string;
    }): Promise<ResponseWithBody<any>>;
    /** Update attributes of a machine
     * @method
     * @name MachinesUpdate
       * @param {string} machineId - Id of the machine to update
  * @param {number} [autoSnapshotFrequency] - One of 'hour', 'day', 'week', or null
  * @param {number} [autoSnapshotSaveCount] - Number of snapshots to save
  * @param {boolean} [dynamicPublicIp] - If true, assigns a new public ip address on machine start and releases it from the account on machine stop
  * @param {string} [machineName] - New name for the machine
  * @param {boolean} [performAutoSnapshot] - Perform auto snapshots
  * @param {boolean} [shutdownTimeoutForces] - Force shutdown at shutdown timeout, even if there is a Paperspace client connection
  * @param {number} [shutdownTimeoutInHours] - Number of hours before machine is shutdown if no one is logged in via the Paperspace client
     */
    MachinesUpdate(parameters: {
        machineId: string;
        autoSnapshotFrequency?: number;
        autoSnapshotSaveCount?: number;
        dynamicPublicIp?: boolean;
        machineName?: string;
        performAutoSnapshot?: boolean;
        shutdownTimeoutForces?: boolean;
        shutdownTimeoutInHours?: number;
    }): Promise<ResponseWithBody<any>>;
    /** List information about all networks available to either the current authenticated user or the team, if the user belongs to a team
     * @method
     * @name NetworksList
       * @param {string} [id] - Optional network id to match on
  * @param {string} [name] - Optional name to match on
  * @param {string} [region] - Optional region to match on
  * @param {string} [dtCreated] - Optional datetime created value to match on
  * @param {string} [network] - Optional network to match on
  * @param {string} [netmask] - Optional netmask to match on
  * @param {string} [teamId] - Optional teamId to match on
     */
    NetworksList(parameters?: {
        id?: string;
        name?: string;
        region?: string;
        dtCreated?: string;
        network?: string;
        netmask?: string;
        teamId?: string;
    }): Promise<ResponseWithBody<{
        dtCreated?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        netmask?: string | undefined;
        network?: string | undefined;
        region?: string | undefined;
        teamId?: string | undefined;
    }[]>>;
    /** Creates a new startup script
     * @method
     * @name ScriptsCreate
       * @param {boolean} [isEnabled] - Determines if the script is enabled or not.  Defaults to true
  * @param {string} [machineId] - Machine id of a machine that should execute this script at startup
  * @param {boolean} [runOnce] - Determines if the script is run on first boot or every boot.  Defaults to false
  * @param {string} [scriptDescription] - Description of the script
  * @param {string} [scriptFile] - File path to a file containing the script data; either scriptFile or scriptText must be provide.
  * @param {string} scriptName - A unique name for the script
  * @param {string} [scriptText] - A string containing the script text; either scriptFile or scriptText must be provide.
     */
    ScriptsCreate(parameters: {
        isEnabled?: boolean;
        machineId?: string;
        runOnce?: boolean;
        scriptDescription?: string;
        scriptFile?: string;
        scriptName: string;
        scriptText?: string;
    }): Promise<ResponseWithBody<ScriptsCreateResponse>>;
    /** Show information for the script with the given id, except for the script text
     * @method
     * @name ScriptsShow
       * @param {string} scriptId - Id of the script to show
     */
    ScriptsShow(parameters: {
        scriptId: string;
    }): Promise<ResponseWithBody<ScriptsShowResponse>>;
    /** Gets the text of the script with the given id
     * @method
     * @name ScriptsText
       * @param {string} scriptId - Id of the script to get text for
     */
    ScriptsText(parameters: {
        scriptId: string;
    }): Promise<ResponseWithBody<string>>;
    /** List information about all scripts assigned to either the current authenticated user or the team, if the user belongs to a team
     * @method
     * @name ScriptsList
       * @param {string} [id] - Optional script id to match on
  * @param {string} [ownerType] - Optional ownerType to match on, either 'user' or 'team'
  * @param {string} [ownerId] - Optional ownerId to match on, either a userId or teamId
  * @param {string} [name] - Optional name to match on
  * @param {string} [description] - Optional description to match on
  * @param {string} [dtCreated] - Optional datetime created value to match on
  * @param {boolean} [isEnabled] - Optional isEnabled value to match on, either true or false
  * @param {boolean} [runOnce] - Optional runOnce value to match on, either true or false
     */
    ScriptsList(parameters?: {
        id?: string;
        ownerType?: string;
        ownerId?: string;
        name?: string;
        description?: string;
        dtCreated?: string;
        isEnabled?: boolean;
        runOnce?: boolean;
    }): Promise<ResponseWithBody<{
        description?: string | undefined;
        dtCreated?: string | undefined;
        id?: string | undefined;
        isEnabled?: boolean | undefined;
        name?: string | undefined;
        ownerId?: string | undefined;
        ownerType?: string | undefined;
        runOnce?: boolean | undefined;
    }[]>>;
    /** Destroys the starup script with the given id
     * @method
     * @name ScriptsDestroy
       * @param {string} scriptId - The id of the script to destroy
     */
    ScriptsDestroy(parameters: {
        scriptId: string;
    }): Promise<ResponseWithBody<any>>;
    /** List information about all templates available to either the current authenticated user or the team, if the user belongs to a team
     * @method
     * @name TemplatesList
       * @param {string} [id] - Optional template id to match on
  * @param {string} [name] - Optional name to match on
  * @param {string} [label] - Optional label to match on
  * @param {string} [os] - Optional os to match on
  * @param {string} [dtCreated] - Optional datetime created value to match on
  * @param {string} [teamId] - Optional teamId to match on
  * @param {string} [userId] - Optional userId to match on
  * @param {string} [region] - Optional region to match on
     */
    TemplatesList(parameters?: {
        id?: string;
        name?: string;
        label?: string;
        os?: string;
        dtCreated?: string;
        teamId?: string;
        userId?: string;
        region?: string;
    }): Promise<ResponseWithBody<{
        dtCreated: string;
        id: string;
        label: string;
        name: string;
        os: string;
        region?: string | undefined;
        teamId?: string | undefined;
        userId?: string | undefined;
    }[]>>;
    /** List information about all users available to either the current authenticated user or the team, if the user belongs to a team
     * @method
     * @name UsersList
       * @param {string} [id] - Optional user id to match on
  * @param {string} [email] - Optional email to match on
  * @param {string} [firstname] - Optional firstname to match on
  * @param {string} [lastname] - Optional lastname to match on
  * @param {string} [dtCreated] - Optional datetime created value to match on
  * @param {string} [teamId] - Optional teamId to match on
     */
    UsersList(parameters?: {
        id?: string;
        email?: string;
        firstname?: string;
        lastname?: string;
        dtCreated?: string;
        teamId?: string;
    }): Promise<ResponseWithBody<{
        dtCreated: string;
        email: string;
        firstname: string;
        id: string;
        lastname: string;
        teamId: string;
    }[]>>;
}
