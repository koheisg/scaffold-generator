export default {
  readWhichRails: function readWhichRails() {
    return document.querySelector('#which_rails option:checked').value;
  },
  readMethodType: function readMethodType() {
    return document.querySelector('#method option:checked').value;
  },
  readObjectType: function readObjectType() {
    return document.querySelector('#argument option:checked').value;
  },
  readObjectName: function readObjectName() {
    return document.querySelector('#model_name').value;
  },
  readTypes: function readTypes() {
    const types = [];
    const elements = document.querySelectorAll('.type');
    const num = elements.length;

    for (let i = 0; i < num; i++) {
      const element = elements[i];
      types.push(element.value);
    }
    return types;
  },
  readNames: function readNames() {
    const names = [];
    const elements = document.querySelectorAll('.name');
    const num = elements.length;

    for (let i = 0; i < num; i++) {
      const element = elements[i];
      names.push(element.value);
    }
    return names;
  },
};
