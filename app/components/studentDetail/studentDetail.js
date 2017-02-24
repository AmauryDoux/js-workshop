"use strict"
angular.module('studentDetail', [
  'ngRoute'
]);

angular.module('studentDetail').component('studentDetail', {
  template: '<h1>Student ID: {{$ctrl.studentId}}</h1><a href="#!/students">Back to list</a>',
  controller: ['$routeParams',
    function studentDetailController($routeParams) {
      console.log("Hello")
      this.studentId = $routeParams.studentId;
    }
  ]
});