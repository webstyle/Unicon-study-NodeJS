const ContactsDao = require('./dao/Contacts');

(async () => {

  await ContactsDao.addContact({
    name: "John",
    last_name: "Doe",
    tel: "1111111",
    email: "johdoe@gmail.com"
  });
  console.log(await ContactsDao.getList());


})();

const person = {
  id:"serial",
  name: "string",
  date_of_birth: "date",
  address: "string",
  country: "string",
  email: "string"
}

person.create({
  id:"serial",
  name: "string",
  date_of_birth: "date",
  address: "string",
  country: "string",
  email: "string"
});
person.getList(); // ==> []
person.getById(id); // {id:"serial",name: "string", date_of_birth: "date", address: "string",country: "string",email: "string"}
person.update(1, { person }) // ==> id
person.delete(id);
person.batch([person,person]); // ==> {}
person.getByCountry('Country_name');
person.getByMinAge(18);
