define(['jquery', 'views/app'], function($, AppView) {
  module('测试Views的AppViews', {
    setup: function() {}
  });
  return test('views的render方法', function() {
    return ok(true, '测试');
  });
});
