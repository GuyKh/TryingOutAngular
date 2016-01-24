class TasksService {
    constructor(private $q: ng.IQService, private $http: ng.IHttpService) {
    }

    getAll(): ng.IPromise<ITask[]> {

        return this.$http.get("http://localhost:4668/api/Tasks").then(response => {
            return response.data;
        });
    }

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