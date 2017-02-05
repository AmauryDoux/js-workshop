'use strict'
angular.module("studentApp").component("studentList", {
  template: `
      <table id="students">
      <thead>
        <tr>
          <!-- sorted by name by default -->
          <th data-sort="lastname">Nom</th>
          <th data-sort="firstname">Prénom</th>
          <th data-sort="age">Age</th>
          <th data-sort="gender">Genre</th>
          <th data-sort="address">Adresse</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="student in $ctrl.students">
          <td>{{student.lastname}}</td>
          <td>{{student.firstname}}</td>
          <td>{{student.age}}</td>
          <td>{{student.gender}}</td>
          <td>{{student.address}}</td>
          <td><a href="#" data-id="{{student.id}}" class="btn delete-student">Delete</a></td>
        </tr>
      </tbody>
    </table>
  `,
  controller: "studentListController"
})