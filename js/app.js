define(['jquery', 'underscore', 'backbone', 'router', 'namespace'], function($, _, Backbone, appRouter, global) {
  var initialize;

  initialize = function() {
    global.app = {
      router: appRouter,
      view: null
    };
    return Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
