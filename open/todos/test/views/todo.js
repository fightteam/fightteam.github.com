define(['jquery', 'models/todo', 'views/todo'], function($, TodoModel, TodoView) {
  module('测试Views的TodoViews', {
    setup: function() {
      this.todoModel = new TodoModel({
        content: "test one"
      });
      return this.todoView = new TodoView({
        model: this.todoModel
      });
    }
  });
  test('views的render方法', function() {
    return ok(true, this.todoView.render().el);
  });
  test('views的toggleVisible方法', function() {
    return ok(true, this.todoView.toggleVisible().el);
  });
  test('views的clear方法', function() {
    this.todoView.clear();
    return ok(true, '测试clear');
  });
  return test('views的updateOnEnter方法', function() {
    this.todoView.updateOnEnter($('#new-todo'));
    return ok(true, '测试updateOnEnter');
  });
});
