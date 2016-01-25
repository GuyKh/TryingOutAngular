class TasksIndexController {
    tasks: ITask[];
    $scope;

    constructor($scope, private tasksService: TasksService) {
        this.$scope = $scope;
        this.$scope.add = this.add;
        this.$scope.check = this.check;
        this.refresh();
        this.$scope.tasks = [];
        this.$scope.$watchCollection(() => {
            return this.tasksService.tasks;
        }, (tasks) => {
            this.$scope.tasks = tasks;
            //console.log("got " + tasks.length + " tasks");
        });
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
        //this.tasksService.getAll().then(tasks => {
        //    this.$scope.tasks = tasks;
        //    console.log("got " + tasks.length + " tasks");
        //}).catch(err => {
        //    console.log(err);

        //    alert("ERROR: " + err.statusText);
        //});
    }
}

angular.module("MyApp").controller("TasksIndexController", TasksIndexController);
