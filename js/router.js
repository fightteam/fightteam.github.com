define(['jquery', 'underscore', 'backbone', 'utils/logConfig', 'namespace'], function($, _, Backbone, log, global) {
  var AppRouter;

  AppRouter = Backbone.Router.extend({
    initialize: function() {
      log.debug('initialize router!');
      return _.bindAll(this, 'show');
    },
    routes: {
      '': 'show'
    },
    show: function() {
      return log.debug('初始化appView!');
    }
  });
  return new AppRouter();
});
