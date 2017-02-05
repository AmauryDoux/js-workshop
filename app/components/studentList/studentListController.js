angular.module("studentList").controller("studentListController", function studentListController() {
  this.students = [{
    "lastname": "Mendy",
    "firstname": "Bénédicte",
    "age": 30,
    "gender": "F",
    "address":"31 rue Jacques Gabriel 33160 Saint Médard en Jalles",
    "id": 0
  }, {
      "lastname": "Delgado  ",
      "firstname": "  Elsa",
      "age": 43,
      "gender": "F",
      "address":"1 place du Gart  33610   CESTAS",
      "id": 1
  }]

  this.orderProp = 'age'
})