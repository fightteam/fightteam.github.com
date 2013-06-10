define(function(require, exports, module) {
  var Backbone, JavaeeView, tpl;

  Backbone = require('backbone');
  tpl = require('tpl/javaee.tpl');
  JavaeeView = Backbone.View.extend({
    tagName: 'div',
    className: 'a',
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
  return module.exports = new JavaeeView();
});
