const $ = require('jquery');
const sGen = require('./sGen');

(function initialize() {
  sGen.appendForm();
  sGen.writeText();

  $(document).on('click', '.plus', function clickPlusCallback() {
      sGen.appendForm();
  });

  $(document).on('click', '.minous', function clickMinusCallback() {
      sGen.removeForm($(this).parent());
      sGen.removeText();
  });

  $('#argument, #model_name').on('change', function changeFromCallback() {
      sGen.writeText();
  });

  $(document).on('change', '.name, .type', function changeFromCallback() {
      sGen.writeText();
  });
}());
