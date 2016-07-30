export default class Writer {
  constructor(command, result) {
    this.command = command;
    this.result = result;
  }
  write() {
    this.result.val(this.command.create());
  };
};
