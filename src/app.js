const $ = require('jquery');
const sGen = require('./sGen');

(function initialize() {
  sGen.form.append();
  const writer = new sGen.Writer(new sGen.Command(), $('#result'));
  writer.write();

  $(document).on('click', '.plus', function clickPlusCallback() {
    sGen.form.append();
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
