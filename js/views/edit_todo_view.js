// TextField is an ember class that provides DOM elements
// It comes with built in events like `didInsertElement`
// that gets called when the element is inserted into the DOM.
// Ember.TextField comes with many built in events and properties
// http://emberjs.com/api/classes/Ember.TextField.html
Todos.EditTodoView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

// Register EditiTodoView as a Handlebars helper to make it available in our template.
Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);