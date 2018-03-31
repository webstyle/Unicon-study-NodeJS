const knex = require("knex");
const config = require("../knexfile");

class BaseDao {
  constructor(knex) {
    this.knex = knex;
  }
}

module.exports = new BaseDao(knex(config));