class TasksService {
    constructor(private $q: ng.IQService, private $http: ng.IHttpService) {
    }

    getAll(): ng.IPromise<Task[]> {

        return this.$http.get("http://localhost:4668/api/Tasks").then(response => {
            return response.data;
        });

        //var deferred = this.$q.defer();

        //setTimeout(() => {
        //    deferred.resolve([
        //        { id: 1, name: "Ori" },
        //        { id: 2, name: "Roni" },
        //    ]);
        //}, 2000);

        //return deferred.promise;

        //return this.$q.when([
        //    { id: 1, name: "Ori" },
        //    { id: 2, name: "Roni" },
        //]);
    }
}

interface Task {
    id: number;
    Name: string;
    Completed: boolean;
}

angular.module("MyApp").service("tasksService", TasksService);