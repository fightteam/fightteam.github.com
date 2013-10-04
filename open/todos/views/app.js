define(['jquery', 'backbone', 'namespace', 'text!templates/stats.html', 'collections/todos', 'views/todo'], function($, Backbone, gobal, statsTemplate, todos, TodoView) {
  var AppView;
  AppView = Backbone.View.extend({
    el: '#todoapp',
    statsTemplate: _.template(statsTemplate),
    events: {
      'keypress #new-todo': 'createOnEnter',
      'click #clear-completed': 'clearDoned',
      'click #toggle-all': 'toggleAllComplete'
    },
    render: function() {
      this.$footer.html(this.statsTemplate({
        remaining: todos.notDone().length,
        completed: todos.done().length
      }));
      this.$('#filters li a').removeClass('selected').filter('[href="#/' + (gobal.app.TodoFilter || '') + '"]').addClass('selected');
      this.$allCheckbox.checked = !todos.notDone().length;
      return this;
    },
    initialize: function() {
      this.$input = this.$('#new-todo');
      this.$list = this.$('#todo-list');
      this.$allCheckbox = this.$('#toggle-all')[0];
      this.$footer = this.$('#footer');
      this.listenTo(todos, 'add', this.addOne);
      this.listenTo(todos, 'reset', this.addAll);
      this.listenTo(todos, 'change:done', this.filterOne);
      this.listenTo(todos, 'filter', this.filterAll);
      this.listenTo(todos, 'all', this.render);
      return todos.fetch();
    },
    addOne: function(todo) {
      var todoView;
      todoView = new TodoView({
        model: todo
      });
      return this.$list.append(todoView.render().el);
    },
    addAll: function() {
      this.$list.html('');
      return todos.each(this.addOne, this);
    },
    createOnEnter: function(e) {
      if (e.which !== gobal.app.ENTER_KEY || !this.$input.val().trim()) {
        return;
      }
      todos.create(this.newAttributes());
      return this.$input.val('');
    },
    newAttributes: function() {
      return {
        content: this.$input.val().trim(),
        done: false
      };
    },
    toggleAllComplete: function() {
      var done;
      done = this.$allCheckbox.checked;
      return todos.each(function(todo) {
        return todo.save({
          done: done
        });
      });
    },
    filterOne: function(todo) {
      return todo.trigger('visible');
    },
    filterAll: function() {
      return todos.each(this.filterOne, this);
    }
  });
  return new AppView();
});
