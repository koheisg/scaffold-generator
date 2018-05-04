const entityTemplate = require('./views/entity.html');

export default {
  render: function render() {
    document.getElementById('field').innerHTML = entityTemplate;
  },
  appendAfter: function appendAfter(target) {
    target.parentNode.insertAdjacentHTML('afterend', entityTemplate);
  },
};
