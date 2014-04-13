App.OrderLine = DS.Model.extend({
  order: DS.belongsTo('order'),
  name: DS.attr('string'),
  quantity: DS.attr('number')
});
App.OrderLine.FIXTURES = 
 [{
   id: 1,
   name: "Item 1",
   quantity: 1
 },{
   id: 2,
   name: "Item 2",
   quantity: 1
 },{
   id: 3,
   name: "Item 1",
   quantity: 1
 }];
