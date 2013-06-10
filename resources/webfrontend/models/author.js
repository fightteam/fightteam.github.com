define(function(require, exports, module) {
  var AuthorModel, Backbone;

  Backbone = require('backbone');
  AuthorModel = Backbone.Model.extend({
    defaults: {
      name: 'excalibur',
      img: 'resources/img/author/excalibur.jpeg',
      url: 'https://github.com/excalibur'
    }
  });
  return module.exports = AuthorModel;
});
