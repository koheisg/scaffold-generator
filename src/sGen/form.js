const sGen = {};

const $ = require('jquery');
const _ = require('underscore');

const entity_template = require('../../templates/entity.html');

sGen.form = {
  template: function template() {
    return _.template(entity_template);
  },
  render: function render() {
    this.append($('#field'), this.template());
  },
  append: function append(target, template) {
    target.append(template);
  },
  appendAfter: function appendAfter(target) {
    target.after(this.template());
  },
  remove: function remove(target) {
    target.remove();
  },
};

module.exports = sGen.form;
