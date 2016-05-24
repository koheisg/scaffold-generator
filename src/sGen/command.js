const $ = require('jquery');

const sGen = {};

sGen.Command = function Command() {
  this.rails = 'bin/rails';
  this.method = 'g';
  this.generateType = function generateType() {
    return $('#argument option:selected').val();
  };
  this.createModelName = function createModelName() {
    return $('#model_name').val();
  };
  this.createArgument = function createArgument() {
    const name = [];
    const type = [];
    $('.name').each(function callback(i, e) {
      name.push($(e).val());
    });
    $('.type').each(function callback(i, e) {
      type.push($(e).val());
    });
    return name.map(function callback(num, i) {
      const entity = ` \\\n${num}:${type[i]}`;
      return entity;
    }).join(' ');
  };
  this.create = function create() {
    return `${this.rails} ${this.method} `
      + `${this.generateType()} ${this.createModelName()} ${this.createArgument()}`;
  };
};
module.exports = sGen.Command;
