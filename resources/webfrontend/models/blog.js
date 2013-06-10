define(function(require, exports, module) {
  var AuthorModel, Backbone, BlogModel;

  Backbone = require('backbone');
  AuthorModel = require('./author.js');
  BlogModel = Backbone.Model.extend({
    initialize: function() {
      return this.set({
        id: _.uniqueId('blog-')
      });
    },
    defaults: {
      author: new AuthorModel(),
      id: 'blog-0',
      title: '我的前端技术选型',
      time: '2013年6月9日',
      intro: '学习开发已经三年了！突然发现学的东西越多，总有东西会遗忘。所以我想起了写blog来整理自己学习所得。',
      contentTpl: 'tpl/excalibur/aa.tpl',
      show: false
    },
    toggle: function() {
      return this.set({
        show: !this.get('show')
      });
    }
  });
  return module.exports = BlogModel;
});
