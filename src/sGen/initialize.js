const initializeTemplate = require('../../templates/initialize.html');

export default {
  render: function render() {
    document.getElementById('body').innerHTML = initializeTemplate;
  },
};
