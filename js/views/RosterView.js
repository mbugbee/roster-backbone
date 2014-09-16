define([
  'jquery',
  'underscore',
  'backbone',
  "collections/roster",
  'text!../../templates/rosterTemplate.html'
], function($, _, Backbone, Roster, rosterTemplate){
  var RosterView = Backbone.View.extend({
        el: $('.viewContainer'),
        render: function()
        {
          var that = this;
          var roster = new Roster();
              roster.fetch({
                success: function (roster) 
                {
                  var template = _.template(rosterTemplate, { roster: roster.models });
                  that.$el.html( template );
                }
              });
        }
      });
  return RosterView;
});