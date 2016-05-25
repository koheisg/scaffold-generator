const sGen = {};

sGen.form = {
  append: function append(target, template) {
    target.append(template);
  },
  remove: function remove(target) {
    target.remove();
  },
};

module.exports = sGen.form;
