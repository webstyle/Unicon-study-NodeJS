const dao = require('./base');

class ContactsDao {
  static async addContact({ name, last_name, tel, email }) {
    return dao.knex
      .insert({ name, last_name, tel, email })
      .from('contacts')
  }

  static async getList() {
    return dao.knex
      .select()
      .from('contacts');
  }
}

module.exports = ContactsDao;
