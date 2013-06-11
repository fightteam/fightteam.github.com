define(function(require, exports, module) {
  var Users, gobal;

  gobal = require('namespace');
  Users = require('src/collections/users');
  gobal.users = new Users();
  gobal.users.url = 'https://api.github.com/orgs/fightteam/members';
  return module.exports = gobal;
});
