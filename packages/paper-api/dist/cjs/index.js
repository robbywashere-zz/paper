"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var superagent_1 = __importDefault(require("superagent"));
var Api = /** @class */ (function () {
    function Api(baseUrl, apiKey) {
        var _this = this;
        this.apiKey = apiKey;
        this.baseUrl = "https://api.paperspace.io/";
        this.request = function (req, skipAuth) {
            if (skipAuth === void 0) { skipAuth = false; }
            if (!_this.apiKey && !skipAuth) {
                throw new Error("No api key, try #.SetToken(apiKey: string)");
            }
            var R = superagent_1.default(req.method, _this.baseUrl + req.path);
            if (req.bodyParams)
                R = R.send(req.bodyParams);
            if (req.queryParams)
                R = R.query(req.queryParams);
            return skipAuth
                ? R
                : R.set("x-api-key", _this.apiKey).set("accept", "json");
        };
        if (baseUrl)
            this.baseUrl = baseUrl;
    }
    Api.prototype.SetRequestMethod = function (fn) {
        this.request = fn.bind(this);
    };
    Api.prototype.SetToken = function (apiKey) {
        this.apiKey = apiKey;
    };
    Api.prototype.pick = function (list, params) {
        if (!params)
            return;
        return list.reduce(function (p, n) {
            var _a;
            return (__assign({}, p, (_a = {}, _a[n] = params[n], _a)));
        }, {});
    };
    Api.prototype.checkParams = function (list, params) {
        return list.forEach(function (p) {
            if (!(p in params)) {
                throw new Error('Missing parameter: ' + p);
            }
        });
    };
    /** Logs in the user and acquires an api key
     * @method
     * @name LoginUser
       * @param {string} [apiToken] - Optional name of an existing API token for the user's account
  * @param {string} email - Email address of the paperspace user to log in
  * @param {string} password - Password for the specified email address
     */
    Api.prototype.LoginUser = function (parameters) {
        this.checkParams(["email", "password"], parameters);
        return this.request({
            path: '/apiTokens/createPublic',
            method: 'POST',
            bodyParams: this.pick(["apiToken", "email", "password"], parameters),
            queryParams: undefined
        }, true);
    };
    /** Get the artifacts files for the job with the given id
     * @method
     * @name JobsArtifactsGet
       * @param {string} jobId - Id of the job to get artifacts for
  * @param {string} [files] - Optional; if getting only certain files, a wildcard pattern to match against, e.g., "myfiles*".  Note: if you include a wildcard you must double-quote the files argument.
  * @param {string} [dest] - Optional; an existing directory to copy the artifacts files to.
     */
    Api.prototype.JobsArtifactsGet = function (parameters) {
        this.checkParams(["jobId"], parameters);
        return this.request({
            path: '/jobs/artifactsGet',
            method: 'GET',
            bodyParams: undefined,
            queryParams: this.pick(["jobId", "files", "dest"], parameters)
        }, false);
    };
    /** List job artifact files for the specified job
     * @method
     * @name JobsArtifactsList
       * @param {string} jobId - Id of the job to list artifacts for
  * @param {string} [files] - Optional; wildcard expression of file(s) to list, e.g., "myfiles*".  Note: if you include a wildcard you must double-quote the files argument.
  * @param {boolean} [size] - Optional; include file size in bytes.  '--size' with no value is equivalent to true.
  * @param {boolean} [links] - Optional; include https links to artifacts.  Note: links are only valid for 8 hours. '--links' with no value is equivalent to true.
     */
    Api.prototype.JobsArtifactsList = function (parameters) {
        this.checkParams(["jobId"], parameters);
        return this.request({
            path: '/jobs/artifactsList',
            method: 'GET',
            bodyParams: undefined,
            queryParams: this.pick(["jobId", "files", "size", "links"], parameters)
        }, false);
    };
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
    Api.prototype.JobsCreate = function (parameters) {
        this.checkParams(["container"], parameters);
        return this.request({
            path: '/jobs/createJob',
            method: 'POST',
            bodyParams: this.pick(["cluster", "clusterId", "codeCommit", "command", "container", "dataset", "json", "machineType", "name", "nodeAttrs", "ports", "project", "projectId", "registryPassword", "registryUsername", "sharedMemMBytes", "tail", "workspace", "workspacePassword", "workspaceUsername"], parameters),
            queryParams: undefined
        }, false);
    };
    /** Return a list of available cluster machine types
     * @method
     * @name JobsMachineTypes
       * @param {string} [region] - Optional region to match on
  * @param {string} [cluster] - Optional cluster to match on
  * @param {string} [machineType] - Optional machine type to macth on
  * @param {boolean} [isBusy] - Optional busy status value to match on
     */
    Api.prototype.JobsMachineTypes = function (parameters) {
        return this.request({
            path: '/jobs/getClusterAvailableMachineTypes',
            method: 'GET',
            bodyParams: undefined,
            queryParams: this.pick(["region", "cluster", "machineType", "isBusy"], parameters)
        }, false);
    };
    /** Wait for the job with the given id to enter a certain job state
     * @method
     * @name JobsWaitfor
       * @param {string} jobId - Id of the job to wait for
  * @param {string} state - Name of the state to wait for
     */
    Api.prototype.JobsWaitfor = function (parameters) {
        this.checkParams(["jobId", "state"], parameters);
        return this.request({
            path: '/jobs/getJob',
            method: 'GET',
            bodyParams: undefined,
            queryParams: this.pick(["jobId", "state"], parameters)
        }, false);
    };
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
    Api.prototype.JobsList = function (parameters) {
        return this.request({
            path: '/jobs/getJobs',
            method: 'GET',
            bodyParams: undefined,
            queryParams: this.pick(["project", "projectId", "name", "machineType", "state", "container", "command", "workspace", "dataset"], parameters)
        }, false);
    };
    /** Stream the logs for the job with the given id, while the job is running or after it has stopped
     * @method
     * @name JobsLogs
       * @param {string} jobId - Id of the job to logs
  * @param {boolean} [tail] - Optional; if tail is specified logs will be streamed until the job stops.
  * @param {number} [line] - Optional; if line is specified logs only logs after that line will be returned (up to limit).
  * @param {number} [limit] - Optional; number of log lines to retrieve on each request; default limit is 2000.
     */
    Api.prototype.JobsLogs = function (parameters) {
        this.checkParams(["jobId"], parameters);
        return this.request({
            path: '/jobs/logs',
            method: 'GET',
            bodyParams: undefined,
            queryParams: this.pick(["jobId", "tail", "line", "limit"], parameters)
        }, false);
    };
    /** Destroy artifact files of the job with the given id
     * @method
     * @name JobsArtifactsDestroy
       * @param {string} jobId - The id of the job to destroy artifacts for
  * @param {string} [files] - Optional; if destroying only certain files, a wildcard pattern to match against, e.g., "myfiles*".  Note: if you include a wildcard you must double-quote the files argument.
     */
    Api.prototype.JobsArtifactsDestroy = function (parameters) {
        this.checkParams(["jobId"], parameters);
        return this.request({
            path: "/jobs/" + parameters.jobId + "/artifactsDestroy",
            method: 'POST',
            bodyParams: this.pick(["files"], parameters),
            queryParams: undefined
        }, false);
    };
    /** Clone an exiting job and queue the cloned copy to run
     * @method
     * @name JobsClone
       * @param {string} jobId - Id of the job to clone
     */
    Api.prototype.JobsClone = function (parameters) {
        this.checkParams(["jobId"], parameters);
        return this.request({
            path: "/jobs/" + parameters.jobId + "/clone",
            method: 'POST',
            bodyParams: undefined,
            queryParams: undefined
        }, false);
    };
    /** Destroy the job with the given id
     * @method
     * @name JobsDestroy
       * @param {string} jobId - The id of the job to destroy
     */
    Api.prototype.JobsDestroy = function (parameters) {
        this.checkParams(["jobId"], parameters);
        return this.request({
            path: "/jobs/" + parameters.jobId + "/destroy",
            method: 'POST',
            bodyParams: undefined,
            queryParams: undefined
        }, false);
    };
    /** Stop an individual job
     * @method
     * @name JobsStop
       * @param {string} jobId - Id of the job to shut down
     */
    Api.prototype.JobsStop = function (parameters) {
        this.checkParams(["jobId"], parameters);
        return this.request({
            path: "/jobs/" + parameters.jobId + "/stop",
            method: 'POST',
            bodyParams: undefined,
            queryParams: undefined
        }, false);
    };
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
    Api.prototype.MachinesCreate = function (parameters) {
        this.checkParams(["region", "machineType", "size", "billingType", "machineName", "templateId"], parameters);
        return this.request({
            path: '/machines/createSingleMachinePublic',
            method: 'POST',
            bodyParams: this.pick(["assignPublicIp", "billingType", "dynamicPublicIp", "email", "firstName", "lastName", "machineName", "machineType", "networkId", "notificationEmail", "password", "region", "scriptId", "size", "teamId", "templateId", "userId"], parameters),
            queryParams: undefined
        }, false);
    };
    /** Get machine availability for the given region and machine type
     * @method
     * @name MachinesAvailability
       * @param {string} region - Name of the region: either 'East Coast (NY2)', 'West Coast (CA1)', or 'Europe (AMS1)'
  * @param {string} machineType - Machine type: either 'GPU+', 'P4000', 'P5000', 'P6000', or 'V100'<p>
     */
    Api.prototype.MachinesAvailability = function (parameters) {
        this.checkParams(["region", "machineType"], parameters);
        return this.request({
            path: '/machines/getAvailability',
            method: 'GET',
            bodyParams: undefined,
            queryParams: this.pick(["region", "machineType"], parameters)
        }, false);
    };
    /** Wait for the machine with the given id to enter a certain machine state
     * @method
     * @name MachinesWaitfor
       * @param {string} machineId - Id of the machine to wait for
  * @param {string} state - Name of the state to wait for, either 'off', 'serviceready', 'ready'
     */
    Api.prototype.MachinesWaitfor = function (parameters) {
        this.checkParams(["machineId", "state"], parameters);
        return this.request({
            path: '/machines/getMachinePublic',
            method: 'GET',
            bodyParams: undefined,
            queryParams: this.pick(["machineId", "state"], parameters)
        }, false);
    };
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
    Api.prototype.MachinesList = function (parameters) {
        return this.request({
            path: '/machines/getMachines',
            method: 'GET',
            bodyParams: undefined,
            queryParams: this.pick(["machineId", "name", "os", "ram", "cpus", "gpu", "storageTotal", "storageUsed", "usageRate", "shutdownTimeoutInHours", "performAutoSnapshot", "autoSnapshotFrequency", "autoSnapshotSaveCount", "agentType", "dtCreated", "state", "updatesPending", "networkId", "privateIpAddress", "publicIpAddress", "region", "userId", "teamId", "scriptId", "dtLastRun"], parameters)
        }, false);
    };
    /** Get machine utilization data for the machine with the given id
     * @method
     * @name MachinesUtilization
       * @param {string} machineId - Id of the machine to get utilization data for
  * @param {string} billingMonth - Billing period to query in `YYYY-MM` format
     */
    Api.prototype.MachinesUtilization = function (parameters) {
        this.checkParams(["machineId", "billingMonth"], parameters);
        return this.request({
            path: '/machines/getUtilization',
            method: 'GET',
            bodyParams: undefined,
            queryParams: this.pick(["machineId", "billingMonth"], parameters)
        }, false);
    };
    /** Destroy the machine with the given id
     * @method
     * @name MachinesDestroy
       * @param {string} machineId - The id of the machine to destroy
  * @param {boolean} [releasePublicIp] - releases any assigned public ip address for the machine; defaults to false
     */
    Api.prototype.MachinesDestroy = function (parameters) {
        this.checkParams(["machineId"], parameters);
        return this.request({
            path: "/machines/" + parameters.machineId + "/destroyMachine",
            method: 'POST',
            bodyParams: this.pick(["releasePublicIp"], parameters),
            queryParams: undefined
        }, false);
    };
    /** Restart an individual machine
     * @method
     * @name MachinesRestart
       * @param {string} machineId - Id of the machine to restart
     */
    Api.prototype.MachinesRestart = function (parameters) {
        this.checkParams(["machineId"], parameters);
        return this.request({
            path: "/machines/" + parameters.machineId + "/restart",
            method: 'POST',
            bodyParams: undefined,
            queryParams: undefined
        }, false);
    };
    /** Start up an individual machine
     * @method
     * @name MachinesStart
       * @param {string} machineId - Id of the machine to start
     */
    Api.prototype.MachinesStart = function (parameters) {
        this.checkParams(["machineId"], parameters);
        return this.request({
            path: "/machines/" + parameters.machineId + "/start",
            method: 'POST',
            bodyParams: undefined,
            queryParams: undefined
        }, false);
    };
    /** Stop an individual machine
     * @method
     * @name MachinesStop
       * @param {string} machineId - Id of the machine to shut down
     */
    Api.prototype.MachinesStop = function (parameters) {
        this.checkParams(["machineId"], parameters);
        return this.request({
            path: "/machines/" + parameters.machineId + "/stop",
            method: 'POST',
            bodyParams: undefined,
            queryParams: undefined
        }, false);
    };
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
    Api.prototype.MachinesUpdate = function (parameters) {
        this.checkParams(["machineId"], parameters);
        return this.request({
            path: "/machines/" + parameters.machineId + "/updateMachinePublic",
            method: 'POST',
            bodyParams: this.pick(["autoSnapshotFrequency", "autoSnapshotSaveCount", "dynamicPublicIp", "machineName", "performAutoSnapshot", "shutdownTimeoutForces", "shutdownTimeoutInHours"], parameters),
            queryParams: undefined
        }, false);
    };
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
    Api.prototype.NetworksList = function (parameters) {
        return this.request({
            path: '/networks/getNetworks',
            method: 'GET',
            bodyParams: undefined,
            queryParams: this.pick(["id", "name", "region", "dtCreated", "network", "netmask", "teamId"], parameters)
        }, false);
    };
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
    Api.prototype.ScriptsCreate = function (parameters) {
        this.checkParams(["scriptName"], parameters);
        return this.request({
            path: '/scripts/createScript',
            method: 'POST',
            bodyParams: this.pick(["isEnabled", "machineId", "runOnce", "scriptDescription", "scriptFile", "scriptName", "scriptText"], parameters),
            queryParams: undefined
        }, false);
    };
    /** Show information for the script with the given id, except for the script text
     * @method
     * @name ScriptsShow
       * @param {string} scriptId - Id of the script to show
     */
    Api.prototype.ScriptsShow = function (parameters) {
        this.checkParams(["scriptId"], parameters);
        return this.request({
            path: '/scripts/getScript',
            method: 'GET',
            bodyParams: undefined,
            queryParams: this.pick(["scriptId"], parameters)
        }, false);
    };
    /** Gets the text of the script with the given id
     * @method
     * @name ScriptsText
       * @param {string} scriptId - Id of the script to get text for
     */
    Api.prototype.ScriptsText = function (parameters) {
        this.checkParams(["scriptId"], parameters);
        return this.request({
            path: '/scripts/getScriptText',
            method: 'GET',
            bodyParams: undefined,
            queryParams: this.pick(["scriptId"], parameters)
        }, false);
    };
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
    Api.prototype.ScriptsList = function (parameters) {
        return this.request({
            path: '/scripts/getScripts',
            method: 'GET',
            bodyParams: undefined,
            queryParams: this.pick(["id", "ownerType", "ownerId", "name", "description", "dtCreated", "isEnabled", "runOnce"], parameters)
        }, false);
    };
    /** Destroys the starup script with the given id
     * @method
     * @name ScriptsDestroy
       * @param {string} scriptId - The id of the script to destroy
     */
    Api.prototype.ScriptsDestroy = function (parameters) {
        this.checkParams(["scriptId"], parameters);
        return this.request({
            path: "/scripts/" + parameters.scriptId + "/destroy",
            method: 'POST',
            bodyParams: undefined,
            queryParams: undefined
        }, false);
    };
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
    Api.prototype.TemplatesList = function (parameters) {
        return this.request({
            path: '/templates/getTemplates',
            method: 'GET',
            bodyParams: undefined,
            queryParams: this.pick(["id", "name", "label", "os", "dtCreated", "teamId", "userId", "region"], parameters)
        }, false);
    };
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
    Api.prototype.UsersList = function (parameters) {
        return this.request({
            path: '/users/getUsers',
            method: 'GET',
            bodyParams: undefined,
            queryParams: this.pick(["id", "email", "firstname", "lastname", "dtCreated", "teamId"], parameters)
        }, false);
    };
    return Api;
}());
exports.default = Api;
