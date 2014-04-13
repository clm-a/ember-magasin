App.Router.map(function() {

  this.resource('orders', function(){
    this.route('new');
    this.route('current');
  });
});

App.OrdersIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('order');
  }
});
App.IndexRoute = Ember.Route.extend({
  setupController: function(){
    var currentOrder = this.controllerFor("application").get("currentOrder");
    if(currentOrder)
      this.controllerFor("currentOrder").set("model", currentOrder); 
  }

});


/*App.OrdersCurrentRoute = Ember.Route.extend({
  beforeModel: function() {
    if(!this.controllerFor("application").get("currentOrder"))
      this.transitionTo('index');
    //else return true;
  },
  setupController: function(controller, model){
    console.log(model);
       controller.set("model", model);
       // do some controller setup here - can be omitted if no setup is needed
       // this will run only after the promise has been resolved.
   },

  model: function(){ return this.controllerFor("applicatiooon").get("currentOrder")}

});*/
