require(['models/todo'], function(TodoModel) {
  module('测试Models的Todo', {
    setup: function() {
      return this.todoModel = new TodoModel();
    }
  });
  test('测试Model的content', function() {
    this.todoModel.set({
      content: 'test-content'
    });
    return equal('test-content', this.todoModel.get('content'), 'todo的content属性设置获取正常');
  });
  test('测试Model的done', function() {
    this.todoModel.set({
      done: true
    });
    return ok(this.todoModel.get('done'), 'todo的done属性设置获取正常');
  });
  return test('测试Model的toggle方法', function() {
    this.todoModel.localStorage = new Store('test-todos');
    this.todoModel.toggle();
    ok(this.todoModel.get('done'), 'todo的toggle()方法正常');
    return this.todoModel.destroy();
  });
});
