class TasksIndexController {
    tasks: ITask[];
    addOrUpdate;
    $scope;
    service;
    name: string;

    constructor($scope, private tasksService: TasksService) {
        this.$scope = $scope;
        //this.$scope.add = this.add;
        //this.$scope.check = this.check;

        this.addOrUpdate = tasksService.addOrUpdateTask;
        this.service = tasksService;


        //this.$scope.add = function() {
        //    console.log("Adding New Task: " + this.name);
        //    var task = new Task(this.name);
        //    tasksService.addOrUpdateTask(task);
        //}

        //this.$scope.update = (task: ITask) => {
        //    console.log("checking " + task.id);
        //    tasksService.addOrUpdateTask(task);
        //}


        this.$scope.tasks = [];
        this.$scope.$watchCollection(() => {
            return this.tasksService.tasks;
        }, (tasks) => {
            this.$scope.tasks = tasks;
            //console.log("got " + tasks.length + " tasks");
            });

    }

    add(name: string): void {
        console.log("Adding New Task: " + this.name);
        var task = new Task(name);
        this.tasksService.addOrUpdateTask(task);
        
    }

    check(task: ITask): void {
        console.log("checking " + task.id);
        task.Completed = true;
        this.tasksService.addOrUpdateTask(task);
    }
}

angular.module("MyApp").controller("TasksIndexController", TasksIndexController);
