const $ = require('jquery');

const sGen = {};

sGen.reader = {
    readTypes: function readTypes() {
        const types = [];
        $('.type').each(function callback(i, e) {
            types.push($(e).val());
        });
        return types;
    },
    readNames: function readNames() {
        const names = [];
        $('.name').each(function callback(i, e) {
            names.push($(e).val());
        });
        return names;
    },
}

module.exports = sGen.reader;
