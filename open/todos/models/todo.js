define(['backbone'], function(Backbone) {
  var Todo;
  return Todo = Backbone.Model.extend({
    defaults: {
      content: '空的内容...',
      done: false
    },
    initialize: function() {},
    toggle: function() {
      return this.save({
        done: !this.get('done')
      });
    }
  });
});
