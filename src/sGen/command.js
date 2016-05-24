"use strict";

var $ = require('jquery');
var _ = require('underscore');

var sGen = sGen || {};

sGen.Command = function Command() {
    this.rails = 'bin/rails';
    this.method = 'g';
    this.generateType = function() {
        return $('#argument option:selected').val();
    }
    this.createModelName = function() {
        return $('#model_name').val();
    }
    this.createArgument = function() {
        var name = [];
        var type = [];
        $('.name').each(function(i, e){
            name.push($(e).val());
        });
        $('.type').each(function(i, e){
            type.push($(e).val());
        });
        return name.map(function(num, i){
            return ' \\\n' + num + ':' + type[i];
        }).join(' ');
    }
    this.create = function() {
        return this.rails + ' ' + this.method + ' ' + this.generateType() + ' ' + this.createModelName() + ' ' + this.createArgument();
    }
}
module.exports = sGen.Command;
