'use strict'

function refreshTable(table, students) {
  for (let link of table.querySelectorAll(".delete-student")) {
    link.removeEventListener("click", deleteStudent);
  }

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

    line.querySelector(".delete-student").addEventListener("click", deleteStudent)

    table.appendChild(line);
  }

  function deleteStudent(event){
    let filterAddressInput = document.querySelector("#address-filter");
    let clickedLink = event.currentTarget;
    let studentId  = clickedLink.getAttribute("data-id");

    event.preventDefault();

    students.removeStudent(studentId);

    if (filterAddressInput.value && filterAddressInput.value !== "") {
      students.filterStudents(filterAddressInput.value);
    }

    refreshTable(table, students);
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
        let filterAddressInput = document.querySelector("#address-filter");
        let form  = document.querySelector('form#add-student');

        if (filterAddressInput.value && filterAddressInput.value !== "") {
          students.filterStudents(filterAddressInput.value);
        }

        refreshTable(table, students);

        filterAddressInput.addEventListener("keyup", (event) => {
          let searched = event.currentTarget.value;

          if (searched && searched !== ""){
            students.filterStudents(searched);
          } else {
            students.data = students.unfilteredData;
          }
          refreshTable(table, students);
        });

        form.querySelector("#send-form").addEventListener("click", (event) => {
          event.preventDefault();
          let inputs = form.querySelectorAll("input, select");
          let data = {};

          for (let input of inputs){
            if (input.name) {
              data[input.name] = input.value;
            }
          }

          let student = new Student(data);

          students.addStudent(student);
          refreshTable(table, students);
        })

        form.querySelector("button#clear").addEventListener("click", (event) => {
          event.preventDefault();
          form.reset();
        });

      } else {
        alert(`Status: ${req.status} - Could not load ${url}`);
      }
    } else {
      console.log("Loading");
    }
  }

  req.send();
})();
