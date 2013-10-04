require.config({
  urlArgs: (new Date()).getTime(),
  baseUrl: "./",
  paths: {
    'jquery': 'components/jquery/jquery',
    'underscore': 'components/underscore-amd/underscore',
    'backbone': 'components/backbone-amd/backbone',
    'backbone.localStorage': 'components/backbone.localStorage/backbone.localStorage',
    'text': 'components/requirejs-text/text',
    'bootstrap': 'components/bootstrap/docs/assets/js/bootstrap.min',
    'base64': 'components/base64/base64'
  },
  shim: {
    backbone: {
      des: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    bootstrap: {
      des: ['jquery'],
      exports: '$.Bootstrap'
    },
    base64: {
      des: ['underscore'],
      exports: 'Base64'
    }
  }
});
