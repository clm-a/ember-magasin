App.OrderLineController = Ember.ObjectController.extend({
  needs: ['currentOrder'],
  actions:{
    increment: function(item){
      this.get("model").incrementProperty('quantity');
      this.get("model").save();
    },
    decrement: function(item){
      var model = this.get("model");
      var order = model.get("order");
      var currentQuantity = model.get('quantity');
      if(currentQuantity -1 <= 0){
        if(confirm("Êtes-vous sûr ?"))
          model.deleteRecord();
          order.save();
          
      }
      else{
        model.decrementProperty('quantity');
      }
      this.get("model").save();
    }
  }
})
