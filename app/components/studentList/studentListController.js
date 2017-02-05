angular.module("studentList").controller("studentListController", ["$http", function studentListController($http) {

  let studentsCollection; 
  this.orderProp = 'age'

  $http.get("/students.json").then((response) => {
    studentsCollection = new Students(response.data)
    this.students = studentsCollection.data;
  })

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
