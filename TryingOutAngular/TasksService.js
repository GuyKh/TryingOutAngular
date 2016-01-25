var TasksService = (function () {
    function TasksService($q, $http) {
        this.$q = $q;
        this.$http = $http;
    }
    TasksService.prototype.getAll = function () {
        return this.$http.get("http://localhost:4668/api/Tasks").then(function (response) {
            return response.data;
        });
    };
    TasksService.prototype.addOrUpdateTask = function (task) {
        var jsonString = JSON.stringify(task);
        this.$http.post("http://localhost:4668/api/Tasks", jsonString);
    };
    return TasksService;
})();
angular.module("MyApp").service("tasksService", TasksService);
//# sourceMappingURL=TasksService.js.map