define(function(require, exports, module) {
  var Backbone, BlogView, tel;

  Backbone = require('backbone');
  tel = require('tpl/common/blog.tpl');
  BlogView = Backbone.View.extend({
    tagName: 'article',
    className: 'blog',
    template: _.template(tel),
    initialize: function() {
      return this;
    },
    events: {
      "click": "animateToTop",
      "mouseleave": "show"
    },
    render: function() {
      console.log(this.model.toJSON());
      this.$el.append(this.template(this.model.toJSON()));
      return this;
    }
  });
  return module.exports = BlogView;
});
