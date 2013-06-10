define(function(require, exports, module) {
  var Backbone, MenuView, tel;

  Backbone = require('backbone');
  tel = require('tpl/common/menu.tpl');
  MenuView = Backbone.View.extend({
    tagName: 'div',
    className: 'menu',
    template: _.template(tel),
    initialize: function() {
      return this;
    },
    events: {
      "click": "animateToTop",
      "mouseleave": "show"
    },
    render: function() {
      return this;
    }
  });
  return module.exports = MenuView;
});
