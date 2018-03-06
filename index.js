const jayson = require("jayson/promise");
const requireMethods = require('require-dir');
const _ = require('lodash');

const collapse = require('./utils/collapse');

const methods = requireMethods('./methods', {recurse: true});

const map = _.reduce(methods, collapse('', '.'), {});

const server = jayson.Server(map);

server.http().listen(3000);
console.info("Server is run on port 3000");