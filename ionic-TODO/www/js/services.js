angular.module('starter.services')
.factory('Tasks', function() {
	return {
		all: function() {
			var taskString = window.localStorage['tasks'];
			if(taskString) {
				return angular.fromJson(taskString);
			}
			return [];
		},
    delete:function(task){
      var tasks = [];
      var taskString = window.localStorage['tasks'];
      if(taskString) {
        tasks = angular.fromJson(taskString);
      }

      for(var loc=0; loc<tasks.length; loc++) {
        if(tasks[loc].title == task.title && tasks[loc].st == task.st) {
          tasks.splice(loc, 1);
          break;
        }
      }
      window.localStorage['tasks'] = angular.toJson(tasks);
      return [];
    },
		save: function(task) {
			var tasks = [];
			var taskString = window.localStorage['tasks'];
			if(taskString) {
				tasks = angular.fromJson(taskString);
			}
			tasks.push(task);
			window.localStorage['tasks'] = angular.toJson(tasks);
		},

	}
})
