define(['backbone', 'text!templates/todo.html', 'namespace'], function(Backbone, TodoTpl, gobal) {
  var TodoView;
  return TodoView = Backbone.View.extend({
    tagName: 'li',
    template: _.template(TodoTpl),
    initialize: function() {
      console.log('44');
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
      return this.listenTo(this.model, 'visible', this.toggleVisible);
    },
    events: {
      'click .toggle': 'toggleDone',
      'dblclick label': 'edit',
      'click .destroy': 'clear',
      'keypress .edit': 'updateOnEnter',
      'blur .edit': 'close'
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.toggleClass('completed', this.model.get('done'));
      this.$input = this.$('.edit');
      return this;
    },
    toggleVisible: function() {
      return this.$el.toggleClass('hidden', this.isHidden());
    },
    isHidden: function() {
      var isDone;
      isDone = this.model.get('done');
      return (!isDone && gobal.app.TodoFilter === 'completed') || (isDone && gobal.app.TodoFilter === 'active');
    },
    toggleDone: function() {
      return this.model.toggle();
    },
    edit: function() {
      this.$el.addClass('editing');
      return this.$input.focus();
    },
    clear: function() {
      return this.model.destroy();
    },
    updateOnEnter: function(e) {
      if (e.keyCode === gobal.app.ENTER_KEY) {
        return this.close();
      }
    },
    close: function() {
      var value;
      value = this.$input.val().trim();
      if (value) {
        this.model.save({
          content: value
        });
      } else {
        this.clear();
      }
      return this.$el.removeClass('editing');
    }
  });
});
