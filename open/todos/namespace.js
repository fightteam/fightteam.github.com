define(['underscore', 'backbone'], function(_, Backbone) {
  var global;
  global = {};
  _.extend(global, Backbone.Events);
  global.app = {
    ENTER_KEY: 13,
    TodoFilter: ''
  };
  return global;
});
