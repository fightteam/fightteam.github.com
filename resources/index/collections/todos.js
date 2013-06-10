define(function(require, exports, module) {
  var Backbone, TodoModel;

  Backbone = require('backbone');
  TodoModel = require('../models/todo');
  return module.exports = new TodosCollection();
});
