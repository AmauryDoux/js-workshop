'use strict'
angular.module('studentApp', [
  'studentList',
  'ngRoute'
]).config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
      when('/students', {
        template: '<student-list></student-list>'
      }).
      otherwise('/students')
  }
])