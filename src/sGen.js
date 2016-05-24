"use strict";

var $ = require('jquery');
var _ = require('underscore');

var sGen = sGen || {};

sGen.Command = require('./sGen/command.js');
sGen.form = require('./sGen/form.js');

sGen.removeText = function removeText() {
    var result = $('#result');
    var command = new sGen.Command();
    result.val('');
    result.val(command.create());
}

sGen.writeText = function writeText() {
    var result = $('#result');
    var command = new sGen.Command();
    result.val('');
    result.val(command.create());
}

module.exports = sGen;
