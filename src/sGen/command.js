import reader from './reader.js'

export default class Command {
  constructor() {
    this.reader = reader
  }

  generateRails() {
    return this.reader.readWhichRails();
  }

  getMethodType() {
    return this.reader.readMethodType();
  }

  generateType() {
    return this.reader.readObjectType();
  }

  createModelName() {
    return this.reader.readObjectName();
  }


  createArgument() {
    const name = this.reader.readNames();
    const type = this.reader.readTypes();

    return name.map(function callback(num, i) {
      const entity = ` \\\n${num}:${type[i]}`;
      return entity;
    }).join(' ');
  }

  create() {
    return `${this.generateRails()} ${this.getMethodType()} `
    + `${this.generateType()} ${this.createModelName()} ${this.createArgument()}`;
  }
};
