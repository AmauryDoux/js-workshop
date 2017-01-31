'use strict'

function refreshTable(table, students) {
  table.innerHTML = "";

  students.data.forEach((student) => {
    appendTableRow(table, student);
  })

  document.querySelector("#averrage b").innerHTML = students.getMiddleAge();
  if (students.getLongestName()) {
    document.querySelector("#longName b").innerHTML = students.getLongestName().fullname();
  }
  students.refreshPercents();
  document.querySelector("#percentM b").innerHTML = students.percentMen + "%";
  document.querySelector("#percentF b").innerHTML = students.percentWomen + "%";

  function appendTableRow(table, student) {
    let line = document.createElement('tr');

    line.innerHTML = `<td>${student.lastname}</td>
                    <td>${student.firstname}</td>
                    <td>${student.age}</td>
                    <td>${student.gender}</td>
                    <td>${student.address}</td>
                    <td><a href="#" data-id="${student.id}" class="btn delete-student">Delete</a></td>`;

    table.appendChild(line);
  }
}

(function() {
  // Create HttpRequest
  let req = new XMLHttpRequest();

  let url = "/students.json";

  req.open('GET', url, true);

  req.onreadystatechange = function(event) {
    // 0:UNSENT 1:OPENED 2:HEADERS_RECEIVED 3:LOADING 4:DONE
    if (req.readyState === 4){
      if (req.status === 200){

        let studentsJSON = JSON.parse(req.responseText);
        let students = new Students(studentsJSON);

        let table = document.querySelector('#students > tbody');

        refreshTable(table, students);

      } else {
        alert(`Status: ${req.status} - Could not load ${url}`);
      }
    } else {
      console.log("Loading");
    }
  }

  req.send();
})();
