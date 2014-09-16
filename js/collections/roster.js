define([
  'underscore',
  'backbone',
  'models/player'
], function(_, Backbone, PlayerModel){
  var Roster = Backbone.Collection.extend({
        model: PlayerModel,
        url: '/players'
      });

  return Roster;
});