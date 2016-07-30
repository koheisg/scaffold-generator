const sGen = {};

sGen.Writer = class Writer {
    constructor(command, result) {
        this.command = command;
        this.result = result;
    }
};

sGen.Writer.prototype.write = function write() {
  this.result.val(this.command.create());
};

module.exports = sGen.Writer;
