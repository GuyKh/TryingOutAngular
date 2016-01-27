var TasksIndexController = (function () {
    function TasksIndexController($scope, tasksService) {
        var _this = this;
        this.tasksService = tasksService;
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
        this.$scope.$watchCollection(function () {
            return _this.tasksService.tasks;
        }, function (tasks) {
            _this.$scope.tasks = tasks;
            //console.log("got " + tasks.length + " tasks");
        });
    }
    TasksIndexController.prototype.add = function (name) {
        console.log("Adding New Task: " + this.name);
        var task = new Task(name);
        this.tasksService.addOrUpdateTask(task);
    };
    TasksIndexController.prototype.update = function (task) {
        console.log("checking " + task.id);
        this.tasksService.addOrUpdateTask(task);
    };
    return TasksIndexController;
})();
angular.module("MyApp").controller("TasksIndexController", TasksIndexController);
//# sourceMappingURL=TasksIndexController.js.map