const entityTemplate = require('./views/entity.html');

export default {
  appendAfter: function appendAfter(target) {
    target.parentNode.insertAdjacentHTML('afterend', entityTemplate);
  },
};
