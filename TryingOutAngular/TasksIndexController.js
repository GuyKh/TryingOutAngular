var TasksIndexController = (function () {
    function TasksIndexController($scope, tasksService) {
        var _this = this;
        this.tasksService = tasksService;
        this.$scope = $scope;
        this.$scope.add = this.add;
        this.$scope.check = this.check;
        this.refresh();
        this.$scope.tasks = [];
        this.$scope.$watchCollection(function () {
            return _this.tasksService.tasks;
        }, function (tasks) {
            _this.$scope.tasks = tasks;
            //console.log("got " + tasks.length + " tasks");
        });
    }
    TasksIndexController.prototype.add = function () {
        console.log("Adding New Task: " + name);
        var task = new Task(name);
        this.tasksService.addOrUpdateTask(task);
        this.refresh();
    };
    TasksIndexController.prototype.check = function (task) {
        console.log("checking " + task.id);
        this.tasksService.addOrUpdateTask(task);
        this.refresh();
    };
    TasksIndexController.prototype.refresh = function () {
        //this.tasksService.getAll().then(tasks => {
        //    this.$scope.tasks = tasks;
        //    console.log("got " + tasks.length + " tasks");
        //}).catch(err => {
        //    console.log(err);
        //    alert("ERROR: " + err.statusText);
        //});
    };
    return TasksIndexController;
})();
angular.module("MyApp").controller("TasksIndexController", TasksIndexController);
