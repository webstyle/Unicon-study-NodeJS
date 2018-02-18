const knex = require("knex");
const jayson = require("jayson/promise");

const server = jayson.Server({
  add: (args) => {
    return Promise.resolve({ message: "this is some data from database" })
  }
});

server.http().listen(3000);