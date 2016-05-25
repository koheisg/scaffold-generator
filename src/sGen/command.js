const $ = require('jquery');

const sGen = {};

sGen.reader = require('./reader.js');

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


sGen.Command.prototype.createArgument = function createArgument() {
  const name = sGen.reader.readNames();
  const type = sGen.reader.readTypes();

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
