const sGen = {};

sGen.reader = require('./reader.js');

sGen.Command = function Command() {
  this.rails = 'bin/rails';
  this.method = 'g';
};

sGen.Command.prototype.generateRails = function generateRails() {
  return sGen.reader.readWhichRails();
}

sGen.Command.prototype.generateType = function generateType() {
  return sGen.reader.readObjectType();
};

sGen.Command.prototype.createModelName = function createModelName() {
  return sGen.reader.readObjectName();
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
  return `${this.generateRails()} ${this.method} `
    + `${this.generateType()} ${this.createModelName()} ${this.createArgument()}`;
};

module.exports = sGen.Command;
