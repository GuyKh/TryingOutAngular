var TasksIndexCtrl = (function () {
    function TasksIndexCtrl($scope, tasksService) {
        var _this = this;
        this.tasksService = tasksService;
        this.$scope = $scope;
        this.tasksService.getAll().then(function (tasks) {
            alert("Success; Count: " + tasks.length);
            _this.tasks = tasks;
        }).catch(function (err) {
            console.log(err);
            alert("ERROR: " + err.statusText);
        });
    }
    return TasksIndexCtrl;
})();
angular.module("MyApp").controller("TasksIndexCtrl", TasksIndexCtrl);
//# sourceMappingURL=TasksIndexCtrl.js.map