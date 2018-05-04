const initializeTemplate = require('./views/initialize.html');

export default {
  render: function render() {
    document.getElementById('body').innerHTML = initializeTemplate;
  },
};
