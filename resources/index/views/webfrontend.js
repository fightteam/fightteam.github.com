define(function(require, exports, module) {
  var Backbone, TopView, WebfrontendView, tpl;

  Backbone = require('backbone');
  tpl = require('tpl/webfrontend.tpl');
  TopView = require('./common/top.js');
  WebfrontendView = Backbone.View.extend({
    tagName: 'div',
    className: 'wrapper',
    template: _.template(tpl),
    events: {
      'click a': 'a'
    },
    render: function() {
      if (this.renderIt === true) {

      } else {
        this.$el.append(this.template({}));
        this.addTop();
        this.renderIt = true;
      }
      return this;
    },
    addTop: function() {
      this.top = new TopView({
        model: {
          nav: [
            {
              title: 'FighteTeam',
              url: '#'
            }, {
              title: 'a',
              url: 'b'
            }, {
              title: 'a',
              url: 'b'
            }
          ]
        }
      });
      return $('body').append(this.top.render().el);
    }
  });
  return module.exports = new WebfrontendView();
});
