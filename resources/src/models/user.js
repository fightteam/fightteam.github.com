define(function(require, exports, module) {
  var Backbone, UserModel;

  Backbone = require('backbone');
  UserModel = Backbone.Model.extend({
    defaults: {
      id: '',
      avatar_url: '',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organzations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: '',
      name: '',
      company: '',
      blog: '',
      location: '',
      email: '',
      hireable: true,
      bio: '',
      public_repos: 0,
      fllowers: 0,
      following: 0,
      created_at: '',
      updated_at: '',
      public_gists: 0
    }
  });
  return module.exports = UserModel;
});
