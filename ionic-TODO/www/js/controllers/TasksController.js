angular.module('starter.controllers')
.controller('TasksController', function ($rootScope, $scope, Tasks) {

	$scope.tasks = Tasks.all();
	$scope.complete = function(task){

  	var temp = task;
  	Tasks.delete(task);
  	temp.st = "text-decoration:line-through" ;
  	Tasks.save(temp);
  	$scope.tasks = Tasks.all();

  };

});
