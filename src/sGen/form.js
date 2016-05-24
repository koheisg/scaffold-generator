const $ = require('jquery');
const _ = require('underscore');

const sGen = {};

sGen.form = {
  append: function append() {
    const template = $('#greeting-template').text();
    $('#field').append(_.template(template));
  },
  remove: function remove(target) {
    target.remove();
  },
};

module.exports = sGen.form;
