Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    // read more about controller actions
    // http://emberjs.com/guides/templates/actions/
    // http://emberjs.com/guides/templates/input-helpers/
    createTodo: function() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      // If the title is an empty string, simply return.
      if (!title.trim()) { return; }

      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      // Clear the new todo text field
      this.set('newTitle', '');

      // Save the model to the RecordArray object
      todo.save();
    },
    clearCompleted: function() {
      // ArrayController#filterby
      // => EmberArray containing items for which the cb returned `true`
      var completed = this.filterBy('isCompleted', true);
      completed.invoke('deleteRecord');
      completed.invoke('save');
    }
  },

  remaining: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  }.property('remaining'),

  completed: function() {
    return this.filterBy('isCompleted', true).get('length');
  }.property('@each.isCompleted'),

  hasCompleted: function() {
    return this.get('completed') > 0;
  }.property('completed'),

  allAreDone: function(key, value) {
    // key is the name of the property that this computed property depends on. i.e. `model.isCompleted`
    // return `true` if we have any todos & they're all completed
    return !!this.get('length') && this.isEvery('isCompleted');
  }.property('@each.isCompleted')
});