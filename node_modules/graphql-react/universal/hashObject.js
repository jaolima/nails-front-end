'use strict';

var fnv1a = require('fnv1a');

function hashObjectReplacer(key, value) {
  var originalValue = this[key];

  if (typeof FormData !== 'undefined' && originalValue instanceof FormData) {
    var signature = '';
    var fields = originalValue.entries();
    var field = fields.next();

    while (!field.done) {
      var _field$value = field.value,
        name = _field$value[0],
        _value = _field$value[1];
      signature += '' + name + _value;
      field = fields.next();
    }

    return signature;
  }

  return value;
}

module.exports = function hashObject(object) {
  return fnv1a(JSON.stringify(object, hashObjectReplacer)).toString(36);
};
