require(['jquery', 'views/app', 'routers/router'], function($, appView, Workspace) {
  return Backbone.history.start();
});
