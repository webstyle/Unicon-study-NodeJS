const knex = require("knex");
const { development } = require("../knexfile");

class base {
  constructor(knex) {
    this.knex = knex;
  }
}

module.exports = new base(knex(development));