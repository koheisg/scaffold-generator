import $ from 'jquery';
import _ from 'underscore';

const entityTemplate = require('../../templates/entity.html');

export default {
  template: function template() {
    return _.template(entityTemplate);
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
