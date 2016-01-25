var TasksService = (function () {
    function TasksService($http, $interval) {
        var _this = this;
        this.$http = $http;
        this.$interval = $interval;
        this.tasks = [];
        var that = this;
        this.$interval(function () {
            _this.$http.get("http://localhost:4668/api/Tasks").then(function (response) {
                that.tasks = response.data;
            }).catch(function (error) { console.log("Error " + error); });
        }, 1000);
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
//angular.module("MyApp").service("tasksService", TasksService); 
