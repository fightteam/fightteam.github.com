define(['jquery', 'backbone', 'collections/blogs', 'views/blog', 'namespace', 'models/blog'], function($, Backbone, blogs, BlogView, gobal, BlogModel) {
  var HeaderView;
  HeaderView = Backbone.View.extend({
    el: '#header',
    events: {
      'keypress #search': 'searchOnEnter',
      'click .navbar-form button': 'search',
      'click #toggle-all': 'toggleAllComplete'
    },
    render: function() {
      return this;
    },
    initialize: function() {
      this.$input = this.$('#search');
      this.$front = this.$('#front');
      this.$java = this.$('#java');
      this.$other = this.$('#other');
      return this.listenTo(blogs, 'add', this.addOne);
    },
    searchOnEnter: function(e) {
      if (e.which === 13) {
        return this.search();
      }
    },
    search: function() {
      if (!$.trim(this.$input.val())) {
        return;
      }
      console.log(this.$input.val());
      return false;
    },
    addOne: function(blog) {
      if (blog.get('type') === 1) {
        this.addLi(this.$front, blog);
      }
      if (blog.get('type') === 2) {
        this.addLi(this.$java, blog);
      }
      if (blog.get('type') === 3) {
        return this.addLi(this.$other, blog);
      }
    },
    addLi: function(el, blog) {
      return el.append('<li><a href="#">' + blog.get('title') + '</a></li>');
    }
  });
  return new HeaderView();
});
