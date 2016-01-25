var TasksIndexController = (function () {
    function TasksIndexController($scope, tasksService) {
        this.tasksService = tasksService;
        this.$scope = $scope;
        this.refresh();
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
        var _this = this;
        var self = this;
        this.tasksService.getAll().then(function (tasks) {
            _this.$scope.tasks = tasks;
            console.log("got " + tasks.length + " tasks");
        }).catch(function (err) {
            console.log(err);
            alert("ERROR: " + err.statusText);
        });
    };
    return TasksIndexController;
})();
angular.module("MyApp").controller("TasksIndexController", TasksIndexController);
//# sourceMappingURL=TasksIndexController.js.map