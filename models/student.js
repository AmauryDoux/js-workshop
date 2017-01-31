'use strict'
class Student {

  constructor(json){
    this.lastname = json.lastname.trim().toUpperCase();
    this.firstname = json.firstname.trim();
    this.age = json.age;
    this.gender = json.gender;
    this.address = this.titleize(json.address);
  }

  fullname () {
    return this.firstname + " " + this.lastname;
  }

  titleize(string) {
    return string.trim().replace(/\s+/g, ' ').toLowerCase().split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ")
  }

}

// new Student(studentJSON) -> appelle forcément la méthode constructor
