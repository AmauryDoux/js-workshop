'use strict'
class Student {

  constructor(json){
    this.avatar = json.avatar;
    this.likes = json.likes;
    this.lastname = json.lastname.toUpperCase();
    this.firstname = json.firstname;
    this.age = json.age;
    this.gender = json.gender;
    this.address = json.address;
    this.id = json.id;
  }

  fullname () {
    return this.firstname + " " + this.lastname;
  }

  titleize(string, charSep=/\s+/g) {
    return string.trim().replace(charSep, ' ').toLowerCase().split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ")
  }

  initializeQuests(quests) {
    this.quests = quests;
  }
}