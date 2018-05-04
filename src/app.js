import * as sGen from './sGen/sGen';

(() => {
  sGen.initialize.render();
  sGen.form.render();

  const writer = new sGen.Writer(new sGen.Command(), document.getElementById('result'));
  writer.write();

  document.addEventListener('click', (e) => {
    if (e.target && e.target.className === 'plus btn btn-default') {
      sGen.form.appendAfter(event.target);
      writer.write();
    }

    if (e.target && e.target.className === 'minous btn btn-default') {
      e.target.parentNode.remove();
      writer.write();
    }
  });

  document.addEventListener('change', (e) => {
    const ids = ['method', 'which_rails', 'argument', 'model_name'];
    const classes = ['name form-control', 'type form-control'];
    if (e.target && (ids.indexOf(e.target.id) >= 0 || classes.indexOf(e.target.className) >= 0)) {
      writer.write();
    }
  });
})();
