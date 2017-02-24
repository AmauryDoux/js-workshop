'use strict'
angular.module('studentApp', [
  'studentList',
  'studentDetail',
  'ui.router'
]).config(['$stateProvider', '$urlRouterProvider',
  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/students');

    $stateProvider
      .state('students', {
        url: '/students',
        template: '<student-list></student-list>'
      })
      .state('detail', {
        url: '/students/:id',
        template: '<student-detail></student-detail>'
      })

  }
])