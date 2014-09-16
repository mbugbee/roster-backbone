define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var Player = Backbone.Model.extend({
        urlRoot: '/players'
      });

  return Player;
});