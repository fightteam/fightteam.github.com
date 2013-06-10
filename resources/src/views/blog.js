define(function(require, exports, module) {
  var Backbone, BlogView, tel;

  Backbone = require('backbone');
  tel = require('tpl/common/blog.tpl');
  BlogView = Backbone.View.extend({
    tagName: 'article',
    className: 'blog',
    template: _.template(tel),
    initialize: function() {
      _.bind(this.toggleContent, this);
      return this;
    },
    events: {
      "click .title": "toggleContent",
      "click .toolbar": "showContent"
    },
    render: function() {
      this.$el.attr('id', this.model.get('id'));
      this.$el.append(this.template(this.model.toJSON()));
      return this;
    },
    toggleContent: function(e) {
      if (this.model.get('show')) {
        return this.hideContent(e);
      } else {
        return this.showContent(e);
      }
    },
    showContent: function(e) {
      this.$el.find('.content').show();
      this.$el.find('.toolbar').hide();
      this.model.toggle();
      return false;
    },
    hideContent: function(e) {
      this.$el.find('.content').hide();
      this.$el.find('.toolbar').show();
      this.model.toggle();
      return false;
    }
  });
  return module.exports = BlogView;
});
