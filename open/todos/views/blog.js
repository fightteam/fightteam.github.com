define(['jquery', 'backbone', 'text!templates/blog.html', 'namespace', 'services/blog', 'base64'], function($, Backbone, TplBlog, gobal, blogData, Base64) {
  var BlogView;
  BlogView = Backbone.View.extend({
    tagName: 'li',
    template: _.template(TplBlog),
    events: {
      'click header>h2': 'toggleShow',
      'click .toolbar a[href="#detail"]': 'setShow',
      'click .toolbar a[href="#back"]': 'setHide'
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    initialize: function() {
      this.model.view = this;
      _.bind(this.decodeContent, this);
      _.bind(this.render, this);
      this.listenToOnce(this.model, 'change', this.loadTemplate);
      return this.listenTo(this.model, 'change', this.render);
    },
    toggleShow: function(e) {
      return this.model.toggle();
    },
    setShow: function() {
      this.model.set({
        show: true
      });
      return false;
    },
    setHide: function() {
      this.model.set({
        show: false
      });
      return false;
    },
    loadTemplate: function(blog) {
      return $.ajax(this.model.get('templateUrl'), {
        headers: {
          Accept: "application/vnd.github.full+json"
        },
        context: this,
        success: this.decodeContent
      });
    },
    decodeContent: function(input) {
      return this.model.set({
        template: Base64.decode(input.content)
      });
    }
  });
  return BlogView;
});
