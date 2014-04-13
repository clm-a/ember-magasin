App.ApplicationController = Ember.Controller.extend({
  currentOrder: null,
  actions:{
    cancelCurrentOrder: function(){
      var order = this.get("currentOrder") ;
      order.set('cancelledAt', new Date());
      order.save();
      this.set("currentOrder", null);
      this.transitionToRoute("index");
    }    
  }
})
