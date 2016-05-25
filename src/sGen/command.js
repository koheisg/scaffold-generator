const $ = require('jquery');

const sGen = {};

sGen.Command = function Command() {
  this.rails = 'bin/rails';
  this.method = 'g';
};

sGen.Command.prototype.generateType = function generateType() {
    return $('#argument option:selected').val();
};

sGen.Command.prototype.createModelName = function createModelName() {
  return $('#model_name').val();
};

sGen.Command.prototype.getNames = function getNames() {
  const names = [];
  $('.name').each(function callback(i, e) {
    names.push($(e).val());
  });
  return names;
}

sGen.Command.prototype.getTypes = function getTypes() {
  const types = [];
  $('.type').each(function callback(i, e) {
    types.push($(e).val());
  });
  return types;
}

sGen.Command.prototype.createArgument = function createArgument() {
  const name = this.getNames();
  const type = this.getTypes();
  return name.map(function callback(num, i) {
    const entity = ` \\\n${num}:${type[i]}`;
    return entity;
  }).join(' ');
};

sGen.Command.prototype.create = function create() {
  return `${this.rails} ${this.method} `
    + `${this.generateType()} ${this.createModelName()} ${this.createArgument()}`;
};

module.exports = sGen.Command;
