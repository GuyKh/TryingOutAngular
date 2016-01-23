var TasksService = (function () {
    function TasksService($q, $http) {
        this.$q = $q;
        this.$http = $http;
    }
    TasksService.prototype.getAll = function () {
        return this.$http.get("http://localhost:4668/api/Tasks").then(function (response) {
            return response.data;
        });
        //var deferred = this.$q.defer();
        //setTimeout(() => {
        //    deferred.resolve([
        //        { id: 1, name: "Ori" },
        //        { id: 2, name: "Roni" },
        //    ]);
        //}, 2000);
        //return deferred.promise;
        //return this.$q.when([
        //    { id: 1, name: "Ori" },
        //    { id: 2, name: "Roni" },
        //]);
    };
    return TasksService;
})();
angular.module("MyApp").service("tasksService", TasksService);
//# sourceMappingURL=TasksService.js.map