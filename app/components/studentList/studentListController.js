angular.module("studentList").controller("studentListController", ["$http", function studentListController($http) {
  this.orderProp = 'age'

  $http.get("/students.json").then((response) => {
    this.students = response.data
  })

  this.add = (student) => {
    this.students.push(student)
  }

  this.reset = () => {
    this.student = undefined
  }

}])