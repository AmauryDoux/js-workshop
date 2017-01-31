'use strict'
class Student {

  constructor(json){
    this.lastname = json.lastname.trim().toUpperCase();
    this.firstname = json.firstname.trim();
    this.age = Math.floor(json.age);
    this.gender = json.gender;
    this.address = this.titleize(json.address);
    this.id = json.id;
  }

  fullname () {
    return this.firstname + " " + this.lastname;
  }

  titleize(string) {
    return string.trim().replace(/\s+/g, ' ').toLowerCase().split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ")
  }

  doesStudentContains(string) {
    return this.address.toLowerCase().includes(string.toLowerCase());
  }

}

// new Student(studentJSON) -> appelle forcément la méthode constructor
