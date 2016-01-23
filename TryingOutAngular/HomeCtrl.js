function HomeCtrl($scope) {

    load();

    $scope.add = function() {
        var task = {
            id: -1,
            name: $scope.name,
            checked: false,
    };

        $scope.tasks.push(task);

        save;
    }

    function save() {
        var json = JSON.stringify($scope.tasks);
        localStorage.setItem("tasks", json);
    }


    function load() {
        var tasksJson = localStorage.getItem("tasks");
        if (tasksJson) {
            $scope.tasks = JSON.parse(tasksJson);
        } else {
            $scope.tasks = [
                { id: 1, name: "Task1", checked: true },
                { id: 2, name: "Task2", checked: false },
            ];
        }
    }
}

angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
