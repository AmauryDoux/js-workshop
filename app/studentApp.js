'use strict'
angular.module('studentApp', [
  'studentList'
]);



(function() {
  console.log("Hello");
  let req1 = new XMLHttpRequest();
  req1.open("GET", "/students.json");
  req1.onload = function(){
    if (req1.status === 200) {
      let req2 = new XMLHttpRequest();
      req2.open("GET", "/details_info_1.json");
      req2.onload = function(){
        if (req2.status === 200) {
          console.log(req1.response)
          console.log(req2.response)
        }
      }
      req2.send();
    }
  }
  req1.send()
})()