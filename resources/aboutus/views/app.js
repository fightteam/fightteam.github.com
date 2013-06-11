define(function(require, exports, module) {
  var AppView, Backbone, gobal, users;

  Backbone = require('backbone');
  gobal = require('../namespace');
  users = gobal.users;
  AppView = Backbone.View.extend({
    el: '#container',
    initialize: function() {
      console.log('aaaa');
      return this.listenTo(users, 'add', this.addOne);
    },
    events: {
      'click a': 'a'
    },
    render: function() {
      var app;

      app = this;
      users.fetch();
      return this;
    },
    addOne: function(user) {
      var UserView, userView;

      UserView = require('./user');
      userView = new UserView({
        model: user
      });
      return this.$el.append(userView.render().el);
    },
    getUser: function(name) {
      console.log(name);
      return $.get('https://api.github.com/users/' + name, function(data) {
        users.set(data);
        return console.log(users);
      });
    }
  });
  return module.exports = AppView;
});
