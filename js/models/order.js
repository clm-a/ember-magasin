App.Order = DS.Model.extend({
  finalizedAt: DS.attr('date'),
  cancelledAt: DS.attr('date'),
  name: DS.attr('string'),
  cart: DS.hasMany('orderLine',{ async: true }),
  finalizedAgoInWords: function() {
    var date = this.get('finalizedAt');
    return moment(date).fromNow();
  }.property('finalizedAt')
});
App.Order.FIXTURES = 
 [{
   id: 1,
   finalizedAt: moment().subtract('days', 7),
   cart:[
     1, 2
   ]
 },{
   id: 2,
   finalizedAt: moment().subtract('hours', 2),
   cart:[3]
 }];
