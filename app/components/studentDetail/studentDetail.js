"use strict"
angular.module('studentDetail', [
  'studentService',
  'ui.router'
]);

angular.module('studentDetail').component('studentDetail', {
  templateUrl: '/app/components/studentDetail/studentDetail.html',
  controller: ['studentFactory', '$stateParams',
    function studentDetailController(studentFactory, $stateParams) {
      console.log("Hello")
      this.studentId = $stateParams.id;

      /*studentFactory.get({id: $stateParams.id}, (student) => {
        this.student = new Student(student)
        console.log(student);
      })*/

      let quest;

      studentFactory.quest({id: $stateParams.id}).$promise.then((studentQuest) => {
        console.log(studentQuest)
        quest = studentQuest;
        return studentFactory.get({id: $stateParams.id}).$promise
      }).then((student) => {
        this.student = new Student(student)
        this.student.initializeQuests(quest);
        console.log(this.student);
      })

      // ou via les promesses :


      /*
      $http.get('/students/' + this.studentId + '.json').then((response) => {
        this.student = new Student(response.data);
      })*/
    }
  ]
});