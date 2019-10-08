'use strict';

// angular.js main app initialization
var app = angular.module('myCtl', ['ngRoute']).
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when('/', { templateUrl: 'pages/about.html', activetab: 'about' }).
       
        when('/about', {
          templateUrl: 'pages/about.html',
          
          activetab: 'about'
        }).
        
        
        otherwise({ redirectTo: '/' });
        
        
    }]).run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {

        $scope.$on("$routeChangeSuccess", function (scope, next, current) {
          $scope.part = $route.current.activetab;
        });

      
  }]);

app.config(['$locationProvider', function($location) {
    $location.hashPrefix('!');
}]);


app.controller('myCtl', function($scope,$timeout) {
	
          

});