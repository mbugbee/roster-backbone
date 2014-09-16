require.config({
  paths:
  {
    jquery: 'http://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min',
    underscore: 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.2/underscore-min',
    backbone: 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min'
  },
  shim: {
          'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
          },
          'underscore': {
            exports: '_'
          }
        }
});

require(['app',], function(App){
  App.initialize();
});