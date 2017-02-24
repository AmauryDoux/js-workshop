"use strict"
angular.module('studentDetail', [
  'ui.router'
]);

angular.module('studentDetail').component('studentDetail', {
  templateUrl: '/app/components/studentDetail/studentDetail.html',
  controller: ['$http', '$stateParams',
    function studentDetailController($http, $stateParams) {
      console.log("Hello")
      this.studentId = $stateParams.id;

      $http.get('/data/details_info_' + this.studentId + '.json').then((response) => {
        this.student = new Student(response.data);
      })
    }
  ]
});