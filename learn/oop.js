class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log('Name : ', this.name);
    console.log('Age :', this.age);
  }
}

class Student extends Person {
  constructor(name, age, university){
    super(name, age);
    this.university = university;
  }
  study() {
    console.log(this.name + ' is studying');
  }
  print() {
    super.print();
    console.log('University :', this.university);
  }
}

class Worker extends Person {
  constructor(name, age, work_place){
    super(name, age);
    this.work_place = work_place;
  }
  work() {
    console.log(this.name + ' is working');
  }
  print() {
    super.print();
    console.log('Working place :', this.work_place);
  }
}

module.exports.Student = Student;