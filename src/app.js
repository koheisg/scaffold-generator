const $ = require('jquery');
const _ = require('underscore');
const sGen = require('./sGen');

(function app() {
  const template = _.template($('#greeting-template').text());
  sGen.form.append($('#field'), template);

  const writer = new sGen.Writer(new sGen.Command(), $('#result'));
  writer.write();

  $(document).on('click', '.plus', function clickPlusCallback() {
    target = $(this).parent();
    sGen.form.appendAfter(target, template);
  });

  $(document).on('click', '.minous', function clickMinusCallback() {
    sGen.form.remove($(this).parent());
    writer.write();
  });

  $('#method, #which_rails, #argument, #model_name').on('change', function changeFromCallback() {
    writer.write();
  });

  $(document).on('change', '.name, .type', function changeFromCallback() {
    writer.write();
  });
}());
