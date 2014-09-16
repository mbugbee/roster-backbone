define([
  'jquery',
  'underscore',
  'backbone',
  'models/player',
  'text!../../templates/playerFormTemplate.html'
], function($, _, Backbone, Player, playerFormTemplate){
  var PlayerFormView = Backbone.View.extend({
        el: $('.viewContainer'),
        events: 
        {
          'submit .player-form': 'savePlayer',
          'click .delete': 'deletePlayer'
        },
        savePlayer: function (ev)
        {
          console.log('savePlayer called');
          var playerDetails = $(ev.currentTarget).serializeObject();
          var player = new Player();
              player.save(playerDetails, {
                success: function (player)
                {
                  console.log('Player Saved');
                  Backbone.history.navigate('', {trigger:true});
                }
              });
              return false;
        },
        deletePlayer: function(ev)
        {
          this.player.destroy({
            success: function ()
            {
              console.log('Player Removed');
              Backbone.history.navigate('', {trigger:true});
            }
          });
          return false;
        },
        render: function (options) {
          var that = this;
          if (options.id)
          {
            that.player = new Player({id: options.id});
            that.player.fetch({
              success: function (player)
              {
                console.log(player);
                var template = _.template(playerFormTemplate, {player: player});
                that.$el.html(template);
              }
            })
          }
          else
          {
            var template = _.template(playerFormTemplate, {player: null});
            that.$el.html(template);
          }
        }

      });
  return PlayerFormView;
});