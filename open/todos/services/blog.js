define(['jquery', 'backbone', 'models/blog', 'collections/blogs', 'base64'], function($, Backbone, BlogModel, blogs) {
  var decodeContent;
  decodeContent = function(input) {
    return this.Base64.decode(input);
  };
  return {
    getBlogs: function() {
      return $.get("https://api.github.com/repos/fightteam/fightteam.github.com/issues", function(data) {
        var blog, type_template, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = data.length; _i < _len; _i++) {
          blog = data[_i];
          if (blog.state === "open") {
            type_template = $(blog.body).attr('data').split(",");
            _results.push(blogs.add({
              title: blog.title,
              commentsNum: blog.comments,
              commentsUrl: "https://github.com/fightteam/fightteam.github.com/issues/" + blog.number,
              author: blog.user.login,
              authorImg: blog.user.avatar_url,
              type: parseInt(type_template[0]),
              content: $(blog.body).html(),
              templateUrl: type_template[1]
            }));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      });
    }
  };
});
