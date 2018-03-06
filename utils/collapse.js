const _ = require('lodash');

function collapse(stem, sep) {
  return function(map, value, key) {
    let prop = stem ? stem + sep + key : key;
    if(_.isFunction(value)) map[prop] = value;
    else if(_.isObject(value)) map = _.reduce(value, collapse(prop, sep), map);
    return map;
  }
}

module.exports = collapse;