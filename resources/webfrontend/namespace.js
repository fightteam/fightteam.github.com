define(function(require, exports, module) {
  var BlogsCollection, about_web_tpl, gobal;

  BlogsCollection = require('./collections/blogs');
  gobal = require('namespace');
  gobal.blogs = new BlogsCollection();
  about_web_tpl = require('tpl/excalibur/about_web.tpl');
  gobal.blogs.add({
    title: '我的前端技术选型2'
  });
  gobal.blogs.add({
    title: '我的前端技术选型3',
    contentTpl: about_web_tpl
  });
  gobal.blogs.add({
    title: '我的前端技术选型4',
    contentTpl: about_web_tpl
  });
  gobal.blogs.add({
    title: '我的前端技术选型5',
    contentTpl: about_web_tpl
  });
  gobal.blogs.add({
    title: '我的前端技术选型6',
    contentTpl: about_web_tpl
  });
  gobal.blogs.add({
    title: '我的前端技术选型7',
    contentTpl: about_web_tpl
  });
  return module.exports = gobal;
});
