define(function(require, exports, module) {
  var Backbone, OtherresourceView, tpl;

  Backbone = require('backbone');
  tpl = require('tpl/otherresource.tpl');
  OtherresourceView = Backbone.View.extend({
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
  return module.exports = new OtherresourceView();
});
