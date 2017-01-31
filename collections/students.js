'use strict'
class Students {

  // studentsJSON === tableau fichier students.json
  constructor(studentsJSON) {
    // On crée la propriété "students" contenant notre liste d'étudiants
    // Ce sera un tableau d'objets "Student"
    this.data = [];
    this.lastId = 0;

    // Pour chaque étudiant en format JSON récupéré de notre tableau dans students.json
    /*
      for (let sJSON of studentsJSON){

      }
    */
    studentsJSON.sort((cur, next) => {
      return cur.id - next.id;
    }).forEach((sJSON) => {
      // La fonction fléchée permet de garder le "this" de l'objet englobant

      // Je crée un nouvel objet Student en fournissant un étudiant en format JSON
      let student = new Student(sJSON);

      // Je stocke ce nouvel objet Student dans ma collection
      this.data.push(student);

      // Le tableau d'étudiant étant trié par ids, this.lastId contiendra, in fine,
      // le plus grand id de nos étudiants
      this.lastId = student.id;
    })

    this.unfilteredData = this.data;
  }

  addStudent(student) {
    this.lastId++;
    student.id = this.lastId;
    this.data.push(student);
  }

  removeStudent(studentId){
    let studentIndex = this.unfilteredData.findIndex((student) => {
      return student.id === Number(studentId)
    })
    this.unfilteredData.splice(studentIndex, 1)
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
      /*
      if (studentLongestName === undefined ||
          studentLongestName.fullname().length < student.fullname().length) {
        studentLongestName = student;
      } else {
        studentLongestName = stu
      }*/
      studentLongestName = ((!studentLongestName ||
        studentLongestName.fullname().length < student.fullname().length) ? student : studentLongestName);
     })

     return studentLongestName;
  }

  filterStudents(searchedString) {
    if (searchedString === "" || searchedString === undefined) {
      this.data = this.unfilteredData;
    } else {
      this.data = this.unfilteredData.filter((student) => {
        return student.doesStudentContains(searchedString);
      });
    }

  }

}
