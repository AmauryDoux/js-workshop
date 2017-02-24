"use strict"
angular.module("studentList").controller("studentListController", ["studentFactory", function studentListController(studentFactory) {
  let studentsCollection;
  this.orderProp = 'age'

  this.students = studentFactory.query();
  /*
  $http.get("/students/all.json").then((response) => {
    studentsCollection = new Students(response.data)
    this.students = studentsCollection.data;
  })*/

  this.add = () => {
    if (this.student.lastname){
      this.students.push(new Student(this.student))
    } else {
      alert("Lastname can't be empty")
    }
  }

  this.reset = () => {
    this.student = undefined
  }

}])