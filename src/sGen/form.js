const $ = require('jquery');

const sGen = {};

sGen.form = {
  append: function append(template) {
    $('#field').append(template);
  },
  remove: function remove(target) {
    target.remove();
  },
};

module.exports = sGen.form;
