"use strict";

var $ = require('jquery');
var _ = require('underscore');

function Command() {
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


function appendForm() {
    var template = $("#greeting-template").text();
    $("#field").append(_.template(template));
}

function removeForm(target) {
    target.remove();
}

function removeText() {
    var result = $('#result');
    var command = new Command();
    result.val('');
    result.val(command.create());
}

function writeText() {
    var result = $('#result');
    var command = new Command();
    result.val('');
    result.val(command.create());
}

$(document).on('click', '.plus', function(){
    appendForm();
});

$(document).on('click', '.minous', function(){
    removeForm($(this).parent());
    removeText();
});

$('#argument, #model_name').on('change', function(){
    writeText();
});

$(document).on('change', '.name, .type', function(){
    writeText();
});

(function () {
    appendForm();
    writeText();
}());
