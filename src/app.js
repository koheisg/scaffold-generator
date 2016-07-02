const $ = require('jquery');
const sGen = require('./sGen');

(function app() {
  sGen.form.render();

  const writer = new sGen.Writer(new sGen.Command(), $('#result'));
  writer.write();

  $(document).on('click', '.plus', function clickPlusCallback() {
      const parent = $(this).parent();
      sGen.form.appendAfter(parent);
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
