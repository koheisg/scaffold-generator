import $ from 'jquery';
import _ from 'underscore';

const initializeTemplate = require('../../templates/initialize.html');

export default {
  template: function template() {
    return _.template(initializeTemplate);
  },
  render: function render() {
    $('#body').html(this.template());
  },
};
