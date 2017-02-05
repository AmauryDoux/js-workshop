let studentApp = angular.module('studentApp', []);

function studentListController($scope) {
  $scope.greetings = "Hello World"
}

studentApp.controller("studentListController", studentListController)