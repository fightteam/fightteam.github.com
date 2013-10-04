define(['backbone', 'models/todo', 'backbone.localStorage'], function(Backbone, TodoModel, LocalStorage) {
  var Todos;
  Todos = Backbone.Collection.extend({
    model: TodoModel,
    localStorage: new Store('todos'),
    initialize: function() {},
    done: function() {
      return this.filter(function(todo) {
        return todo.get('done');
      });
    },
    notDone: function() {
      return this.without.apply(this, this.done());
    }
  });
  return new Todos();
});
