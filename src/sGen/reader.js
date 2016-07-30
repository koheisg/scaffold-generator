import $ from 'jquery';

export default {
  readWhichRails: function readWhichRails() {
    return $('#which_rails option:selected').val();
  },
  readMethodType: function readMethodType() {
    return $('#method option:selected').val();
  },
  readObjectType: function readObjectType() {
    return $('#argument option:selected').val();
  },
  readObjectName: function readObjectName() {
    return $('#model_name').val();
  },
  readTypes: function readTypes() {
    const types = [];
    $('.type').each((i, e) => {
      types.push($(e).val());
    });
    return types;
  },
  readNames: function readNames() {
    const names = [];
    $('.name').each((i, e) => {
      names.push($(e).val());
    });
    return names;
  },
};
