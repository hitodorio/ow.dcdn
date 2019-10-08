'use strict';

// angular.js main app initialization
var app = angular.module('myCtl', ['ngRoute']);

app.config(['$locationProvider', function($location) {
    $location.hashPrefix('!');
}]);


app.controller('myCtl', function($scope) {
	  $scope.data = {"angular.js":{"1.4.2":["ang142route.js","ang142.js"]},"bootstrap":{"3.3.4":["bootstrap3.css"],"4.3.1":["bootstrap4.css","bootstrap4.js"]},"jquery":{"3.3.1":["jquery.js"]},"ng-table":{"2.0.2":["ng-table.css","ng-table.min.js"]} };
	  });