define(['underscore', 'backbone'], function(_, Backbone) {
  var global;

  global = {};
  _.extend(global, Backbone.Events);
  return global;
});
