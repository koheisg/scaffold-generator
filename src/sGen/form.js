"use strict";

var $ = require('jquery');
var _ = require('underscore');

var sGen = sGen || {};

sGen.form = {
    append: function() {
        var template = $("#greeting-template").text();
        $("#field").append(_.template(template));
    },
    remove: function(target) {
        target.remove();
    }
}

module.exports = sGen.form;
