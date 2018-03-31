const {Student} = require('./oop');
const fs = require('fs');

fs.readFile('./array.js1', 'utf-8',  (err, data) => {
  console.log("Error ", err);
});

fs.readFile('./array.js', 'utf-8',  (err, data) => {
  console.log("Error ", err);
  console.log("2");
});

const student = new Student("John doe", 21, "inha");
student.print();
console.log("3");