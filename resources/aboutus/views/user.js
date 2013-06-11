define(function(require, exports, module) {
  var Backbone, UserView, tel;

  Backbone = require('backbone');
  tel = require('tpl/common/user.tpl');
  UserView = Backbone.View.extend({
    tagName: 'section',
    className: 'a',
    template: _.template(tel),
    initialize: function() {
      return this;
    },
    events: {
      "click .title": "toggleContent",
      "click .toolbar": "showContent"
    },
    render: function() {
      this.$el.append(this.template(this.model.toJSON()));
      return this;
    }
  });
  return module.exports = UserView;
});
