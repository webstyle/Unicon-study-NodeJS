// let data = {
//   name: "John Doe",
//   age: 21,
//   lang: ["English", "German"],
//   getData: () => {
//
//   }
// }
// function someFunc({ name = "None", age = 20, email = "s@s", email }) {
//   console.log(name);
//   console.log(age);
//   console.log(email);
//
//   return { name, age };
// }

let list = [];

function createContact({name, lastName = "", email, phone}) {
  if (!name || !email || !phone) return console.log("name, email, phone required !!!");
  list.push({name, lastName, email, phone});
}

function updateContact(index, { name, lastName = "", email, phone }) {
  if (!name || !email || !phone, index === undefined) return console.log("index, name, email, phone required !!!");
  list[index] = { name, lastName, email, phone, edited: true }
}

function deleteContact(index) {
  if (index === undefined) return console.log("index required");
  list.splice(index, 1);
}

function printContant(i) {
  console.log("Index : ", i);
  console.log("Name : ", list[i].name);
  console.log("LastName : ", list[i].lastName);
  console.log("Email : ", list[i].email);
  console.log("Phone : ", list[i].phone);
  if (list[i].edited) {
    console.log("Edited", list[i].edited);
  }
  console.log("=======================")
}


function printContactList() {
  for (let i = 0; i < list.length; i++) {
    printContant(i)
  }
}

// createContact({
//   email: "22@a",
//   phone: "21312321321"
// })
createContact({
  name: "Farrukh",
  email: "22@a",
  phone: "21312321321",
  text: "fdafadsfdasf"
})

createContact({
  name: "Abdullo",
  email: "22@a",
  phone: "21312321321"
})

updateContact(0, {
  name: "Alisher",
  email: "22@a",
  phone: "21312321321"
})
//
deleteContact(0)

printContactList()

