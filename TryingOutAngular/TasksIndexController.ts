class TasksIndexController {
    tasks: Task[];
    $scope;

    constructor($scope, private tasksService: TasksService) {
        this.$scope = $scope;

        this.tasksService.getAll().then(tasks => {
            this.tasks = tasks;
            console.log("got " + tasks.length + " tasks");  
        }).catch(err => {
            console.log(err);

            alert("ERROR: " + err.statusText);
        });
    }
}

angular.module("MyApp").controller("TasksIndexController", TasksIndexController);