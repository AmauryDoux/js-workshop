'use strict'
class Students {

  constructor(studentsJSON) {
    this.data = [];

    studentsJSON.sort((cur, next) => {
      return cur.id - next.id;
    }).forEach((sJSON) => {
      let student = new Student(sJSON);

      this.data.push(student);
    })

    // Important for "filter" exercise - little hint here ;)
    this.unfilteredData = this.data;
  }

  refreshPercents() {
    let countMen = 0,
        countWomen = 0;

    this.data.forEach((student) => {
      if (student.gender === "M"){
        countMen++;
      } else {
        countWomen++;
      }
    })

    this.percentMen = (countMen / this.data.length * 100).toFixed(2);
    this.percentWomen = (countWomen / this.data.length * 100).toFixed(2);
  }

  getStudentsByAge() {
    return this.data.sort((cur, next) => {
      if (cur.age < next.age) return -1;
      if (cur.age > next.age) return 1;
      return 0;
    })
  }

  getMiddleAge() {
    let ageTotal = 0;

    this.data.forEach((student) => {
      ageTotal += student.age;
    })

    return ageTotal / this.data.length;
  }

  getLongestName(){
    let studentLongestName;
     this.data.forEach((student) => {
      studentLongestName = ((!studentLongestName ||
        studentLongestName.fullname().length < student.fullname().length) ? student : studentLongestName);
     })

     return studentLongestName;
  }
}
