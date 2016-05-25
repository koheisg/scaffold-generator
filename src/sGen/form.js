const sGen = {};

sGen.form = {
  append: function append(target, template) {
    target.append(template);
  },
  appendAfter: function appendAfter(traget, template) {
    target.after(template);
  },
  remove: function remove(target) {
    target.remove();
  },
};

module.exports = sGen.form;
