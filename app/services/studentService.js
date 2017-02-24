angular.module('studentService', ['ngResource'])
.factory('studentFactory', ['$resource', function($resource) {
  return $resource("students/:id.json", {}, {
    query: {
      method: 'GET',
      params: {id: 'all'},
      isArray: true
    },
    quest: {
      method: 'GET',
      url: "/students/quests/:id.json"
    }
  })
}])