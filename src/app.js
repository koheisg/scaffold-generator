const $ = require('jquery');
const sGen = require('./sGen');

(function initialize() {
  sGen.form.append();
  sGen.writeText();

  $(document).on('click', '.plus', function clickPlusCallback() {
      sGen.form.append();
  });

  $(document).on('click', '.minous', function clickMinusCallback() {
      sGen.form.remove($(this).parent());
      sGen.removeText();
  });

  $('#argument, #model_name').on('change', function changeFromCallback() {
      sGen.writeText();
  });

  $(document).on('change', '.name, .type', function changeFromCallback() {
      sGen.writeText();
  });
}());
