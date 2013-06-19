define(['collections/todos'], function(Todos) {
  module('测试Collections的Todos', {
    setup: function() {
      this.todos = Todos;
      this.todos.reset();
      this.todos.localStorage = new Store('test-todos2');
      this.todos.add({
        content: 'list one'
      });
      this.todos.add({
        content: 'list two',
        done: true
      });
      this.todos.add({
        content: 'list three'
      });
      this.todos.add({
        content: 'list four'
      });
      this.todos.add({
        content: 'list five',
        done: true
      });
      this.todos.add({
        content: 'list six'
      });
      this.todos.add({
        content: 'list seven'
      });
      this.todos.add({
        content: 'list eight',
        done: true
      });
      return this.todos.add({
        content: 'list nine',
        done: true
      });
    }
  });
  test('测试Collections的done方法', function() {
    return equal(4, this.todos.done().length, "todos集合done()方法正常");
  });
  return test('测试Collections的notDone方法', function() {
    return equal(5, this.todos.notDone().length, "todos集合notDone()方法正常");
  });
});
