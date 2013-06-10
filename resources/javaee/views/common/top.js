define(function(require, exports, module) {
  var Backbone, TopView, tpl;

  Backbone = require('backbone');
  tpl = require('tpl/common/top.tpl');
  TopView = Backbone.View.extend({
    tagName: 'div',
    className: 'navbar navbar-blue navbar-fixed-top',
    template: _.template(tpl),
    events: {
      'click a': 'a'
    },
    render: function() {
      this.$el.append(this.template(this.model));
      return this;
    }
  });
  return module.exports = TopView;
});
