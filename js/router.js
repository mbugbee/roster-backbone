define([
  'jquery',
  'underscore',
  'backbone',
  'views/PlayerFormView',
  'views/RosterView'
], function($, _, Backbone, PlayerFormView, RosterView){
  var Router = Backbone.Router.extend({
    routes: {
      "": "list", 
      "add": "form",
      "edit/:id": "form",      
      }
  });

  var initialize = function(){
    var playerFormView = new PlayerFormView();
    var rosterView = new RosterView();
    var router = new Router();
        router.on('route:list', function() {
          rosterView.render();
        });
        router.on('route:form', function(id) {
          playerFormView.render({id: id});
        });
    console.log('Router Initialized')
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});