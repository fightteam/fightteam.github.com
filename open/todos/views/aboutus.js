define(['jquery', 'backbone', 'text!templates/aboutus.html'], function($, Backbone, TplAboutus) {
  var AppAboutUsView;
  AppAboutUsView = Backbone.View.extend({
    tagName: 'li',
    template: _.template(TplAboutus),
    events: {
      'keypress #new-todo': 'createOnEnter',
      'click #clear-completed': 'clearCompleted',
      'click #toggle-all': 'toggleAllComplete'
    },
    render: function() {
      this.$el.html(this.template({}));
      return this;
    },
    initialize: function() {
      return console.log('AppAboutUsView');
    }
  });
  return new AppAboutUsView();
});
