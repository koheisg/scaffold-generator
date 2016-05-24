"use strict";

var $ = require('jquery');
var _ = require('underscore');

var sGen = sGen || {};

sGen.Writer = function(command, result) {
    this.command = command;
    this.result = result
}

sGen.Writer.prototype.write = function() {
    this.result.val(this.command.create());
}

module.exports = sGen.Writer;
