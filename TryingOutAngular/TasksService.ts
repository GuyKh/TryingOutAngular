class TasksService {
    http : angular.IHttpService;
    timeout: angular.ITimeoutService;
    public tasks: Array<ITask>;

    constructor(private $http: ng.IHttpService, private $interval: ng.IIntervalService) {
        this.tasks = [];

        var that = this;
        this.$interval(() => {
            this.$http.get("http://localhost:4668/api/Tasks").then((response: any) => {
                that.tasks = <ITask[]>response.data;
            }).catch((error) => { console.log("Error " + error) });
        }, 3000);
    }
    
    //getAll(): ng.IPromise<ITask[]> {
    //return this.$http.get("http://localhost:4668/api/Tasks").then(response => {
    //        return response.data;
    //    });
    //}

    addOrUpdateTask(task: ITask) {
        var jsonString = JSON.stringify(task);
        this.$http.post("http://localhost:4668/api/Tasks", jsonString);
    }
}

interface ITask {
    id: number;
    Name: string;
    Completed: boolean;
}

angular.module("MyApp").service("tasksService", TasksService);
//angular.module("MyApp").service("tasksService", TasksService);