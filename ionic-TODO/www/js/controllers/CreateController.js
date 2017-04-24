angular.module('starter.controllers')
.controller('CreateController', function ($state, $scope, Tasks) {
  $scope.createTask = function(task) {
  	task.st = "text-decoration:none";
    Tasks.save(task);
    $state.go("tasks");
  };
});
