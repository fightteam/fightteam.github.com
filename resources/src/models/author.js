define(function(require, exports, module) {
  var AuthorModel, Backbone;

  Backbone = require('backbone');
  AuthorModel = Backbone.Model.extend({
    defaults: {
      name: 'excalibur',
      img: 'https://secure.gravatar.com/avatar/a61d1f8569ef9b0e516833908b3e1afb?s=420&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png',
      url: 'https://github.com/excalibur'
    }
  });
  return module.exports = AuthorModel;
});
