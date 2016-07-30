import $ from 'jquery';
import * as sGen from './sGen/sGen';

(() => {
  sGen.initialize.render();
  sGen.form.render();

  const writer = new sGen.Writer(new sGen.Command(), $('#result'));
  writer.write();

  $(document).on('click', '.plus', event => {
    const $parent = $(event.target).parent();
    sGen.form.appendAfter($parent);
  });

  $(document).on('click', '.minous', event => {
    const $parent = $(event.target).parent();
    sGen.form.remove($parent);
    writer.write();
  });

  $(document).on('change', '.name, .type, #method, #which_rails, #argument, #model_name', () => {
    writer.write();
  });
})();
