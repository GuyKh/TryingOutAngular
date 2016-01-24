class TasksIndexController {
    tasks: ITask[];
    name: string;
    $scope;

    constructor($scope, private tasksService: TasksService) {
        this.$scope = $scope;

        this.refresh();
    }

    add(): void {
        console.log("Adding New Task: " + name);
        var task = new Task(name);
        this.tasksService.addOrUpdateTask(task);
        this.refresh();
    }

    check(task: ITask): void {
        console.log("checking " + task.id);
        this.tasksService.addOrUpdateTask(task);
        this.refresh();
    }

    refresh(): void {
        var self = this;
        this.tasksService.getAll().then(tasks => {
            this.tasks = tasks;
            console.log("got " + tasks.length + " tasks");
            setTimeout(function () { self.$scope.$apply(); });
        }).catch(err => {
            console.log(err);

            alert("ERROR: " + err.statusText);
        });
    }
}

angular.module("MyApp").controller("TasksIndexController", TasksIndexController);