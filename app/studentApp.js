'use strict'
angular.module('studentApp', [
  'studentList'
]);



(function() {
  console.log("Hello");
  let studentsJSON;

  // equivalent: get("/students.json").then(JSON.parse)
  getJSON("/students.json").then(function(students) {
    studentsJSON = students;

    return Promise.all(
      students.map(function(student) {
        return getJSON(`/details_info_${student.id}.json`);
      })
    )
  }).then(function(students){
    console.log(students)
    students.forEach(function(student){
      console.log(student)
    })
  }).catch(function(error) {
    console.log("Failed ! ", error)
  })

})()

function getJSON(url) {
  return get(url).then(JSON.parse);
}

function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}