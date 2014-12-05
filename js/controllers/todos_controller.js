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
    }
  },

  remaining: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  }.property('remaining')
});