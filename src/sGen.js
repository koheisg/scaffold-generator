"use strict";

var $ = require('jquery');
var _ = require('underscore');

var sGen = sGen || {};

sGen.Command = require('./sGen/command.js');
sGen.form = require('./sGen/form.js');
sGen.Writer = require('./sGen/writer.js')

module.exports = sGen;
