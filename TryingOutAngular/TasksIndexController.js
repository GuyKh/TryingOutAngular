var TasksIndexController = (function () {
    function TasksIndexController($scope, tasksService) {
        var _this = this;
        this.tasksService = tasksService;
        this.$scope = $scope;
        this.tasksService.getAll().then(function (tasks) {
            _this.tasks = tasks;
            console.log("got " + tasks.length + " tasks");
        }).catch(function (err) {
            console.log(err);
            alert("ERROR: " + err.statusText);
        });
    }
    return TasksIndexController;
})();
angular.module("MyApp").controller("TasksIndexController", TasksIndexController);
//# sourceMappingURL=TasksIndexController.js.map