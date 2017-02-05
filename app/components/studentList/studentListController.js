angular.module("studentList").controller("studentListController", ["$http", function studentListController($http) {
  this.orderProp = 'age'

  $http.get("/students.json").then((response) => {
    this.students = response.data
  })


}])