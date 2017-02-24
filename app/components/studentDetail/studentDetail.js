"use strict"
angular.module('studentDetail', [
  'ngRoute'
]);

angular.module('studentDetail').component('studentDetail', {
  templateUrl: '/app/components/studentDetail/studentDetail.html',
  controller: ['$http', '$routeParams',
    function studentDetailController($http, $routeParams) {
      console.log("Hello")
      this.studentId = $routeParams.studentId;

      $http.get('/data/details_info_' + this.studentId + '.json').then((response) => {
        this.student = new Student(response.data);
      })
    }
  ]
});