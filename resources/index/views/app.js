define(function(require, exports, module) {
  var AppView, Backbone, tpl;

  Backbone = require('backbone');
  tpl = require('tpl/app.tpl');
  AppView = Backbone.View.extend({
    tagName: 'div',
    className: 'span4 offset4',
    template: _.template(tpl),
    events: {
      'click a': 'a'
    },
    render: function() {
      if (this.renderIt === true) {

      } else {
        this.$el.append(this.template({}));
        this.renderIt = true;
      }
      return this;
    }
  });
  return module.exports = new AppView();
});
