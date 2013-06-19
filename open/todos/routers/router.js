define(['underscore', 'backbone', 'namespace', 'collections/todos'], function(_, Backbone, gobal, todos) {
  var Workspace;
  Workspace = Backbone.Router.extend({
    routes: {
      '*filter': 'setFilter'
    },
    setFilter: function(param) {
      gobal.app.TodoFilter = param || '';
      return todos.trigger('filter');
    }
  });
  return gobal.app.TodoRouter = new Workspace();
});
