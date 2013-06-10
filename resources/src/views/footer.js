define(function(require, exports, module) {
  var Backbone, TopView, tpl;

  Backbone = require('backbone');
  tpl = require('tpl/common/top.tpl');
  TopView = Backbone.View.extend({
    tagName: 'div',
    className: 'navbar navbar-fixed-top',
    template: _.template(tpl),
    events: {
      'click a': 'a'
    },
    render: function() {
      this.$el.append(this.template({
        nav: [
          {
            title: 'FighteTeam',
            url: '/'
          }, {
            title: 'Web前端学习记录',
            url: '/webfrontend.html'
          }, {
            title: 'Java后端学习记录',
            url: '/javaee.html'
          }, {
            title: 'Github开源项目',
            url: '/opensource.html'
          }, {
            title: '其他相关资源',
            url: '/otherresource.html'
          }, {
            title: '关于我们',
            url: '/aboutus.html'
          }
        ]
      }));
      $('body').append(this.$el);
      return this;
    }
  });
  return module.exports = TopView;
});
