const $ = require('jquery');
const _ = require('underscore');
const sGen = require('./sGen');

(function app() {
  const template = _.template($('#greeting-template').text());
  sGen.form.append(template);
  const writer = new sGen.Writer(new sGen.Command(), $('#result'));
  writer.write();

  $(document).on('click', '.plus', function clickPlusCallback() {
    sGen.form.append(template);
  });

  $(document).on('click', '.minous', function clickMinusCallback() {
    sGen.form.remove($(this).parent());
    writer.write();
  });

  $('#argument, #model_name').on('change', function changeFromCallback() {
    writer.write();
  });

  $(document).on('change', '.name, .type', function changeFromCallback() {
    writer.write();
  });
}());
