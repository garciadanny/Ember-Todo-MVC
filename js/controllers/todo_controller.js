Todos.TodoController = Ember.ObjectController.extend({
  actions: {
    editTodo: function() {
      this.set('isEditing', true);
    },
    acceptChanges: function() {
      this.set('isEditing', false);

      if(Ember.isEmpty(this.get('model.title'))) {
        this.send('removeTodo');
      }
      else {
        this.get('model').save();
      }
    },
    removeTodo: function() {
      var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    }
  },

  isEditing: false,

  isCompleted: function(key, value) {
    // key is the name of the property that this computed property depends on. i.e. `model.isCompleted`
    var model = this.get('model');

    if (value === undefined) {
      // if the checkbox hasn't been clicked
      // i.e. if there is no value
      return model.get('isCompleted');
    }
    else {
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
});