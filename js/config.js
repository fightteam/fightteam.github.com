require.config({
  deps: ['main'],
  paths: {
    "jquery": "../libs/jquery/1.9.1/jquery",
    "browser": "../libs/jquery/1.9.1/jquery.mb.browser",
    "underscore": "../libs/underscore/1.4.4/underscore",
    "backbone": "../libs/backbone/1.0.0/backbone",
    "bootstrap": "../libs/bootstrap/2.3.1/bootstrap",
    "text": "../libs/requirejs/plugins/text",
    "domReady": "../libs/requirejs/plugins/domReady",
    "fractionslider": "../libs/fractionslider/0.8.3/jquery.fractionslider",
    "fractionsliderCSS": "../libs/fractionslider/0.8.3/css/fractionslider",
    "modernizr": "../libs/modernizr/3.0.0pre/modernizr",
    "sidr": "../libs/sidr/1.1.1/jquery.sidr",
    "sidrCSS": "../libs/sidr/1.1.1/stylesheets/jquery.sidr.dark",
    "easing": "../libs/easing/1.3/easing",
    "lettering": "../libs/textillate/0.1/jquery.lettering",
    "textillate": "../libs/textillate/0.1/jquery.textillate",
    "snippet": "../libs/snippet/jquery.snippet",
    "snippetCSS": "../libs/snippet/jquery.snippet",
    "prettify": "../libs/google-code-prettify/prettify",
    "prettifyCSS": "../libs/google-code-prettify/prettify",
    "json2": "../libs/json/json2",
    "json": "../libs/json/json",
    "templates": "../tpl",
    "css": "../libs/requirejs/plugins/css",
    "root": "../",
    "libs": "../libs"
  },
  shim: {
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'bootstrap': {
      deps: ['jquery']
    },
    'sidr': {
      deps: ['jquery']
    },
    'fractionslider': {
      deps: ['jquery']
    },
    'textillate': {
      deps: ['jquery', 'lettering']
    },
    'json2': {
      deps: ['jquery']
    },
    'json': {
      deps: ['jquery']
    },
    'snippet': {
      deps: ['jquery', 'browser']
    }
  }
});
