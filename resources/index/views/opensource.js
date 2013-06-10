define(function(require, exports, module) {
  var Backbone, OpensourceView, tpl;

  Backbone = require('backbone');
  tpl = require('tpl/opensource.tpl');
  OpensourceView = Backbone.View.extend({
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
  return module.exports = new OpensourceView();
});
