App.IndexController = Ember.Controller.extend({
  needs: ['application'],
  currentOrder: Ember.computed.alias('controllers.application.currentOrder'),
  actions:{
    createOrder: function(){
      var order = this.store.createRecord("order", {name: "Commande test"});
      order.save();
      this.set("currentOrder", order);
      //this.transitionToRoute("orders.current");
    },    
    addItem: function(/* item */){
      var self= this;
      var order= this.get("currentOrder");
      var line = self.store.createRecord('order-line', {
        order: order,
        name: 'Lorem ipsum',
        quantity: 1
      });
      line.save();
      order.get("cart").addObject(line);
      order.save();

    }
  }
})
