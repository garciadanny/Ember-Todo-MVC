Todos.Router.map(function() {
  // when the url path matches '/', use the 'todos' template.
  this.resource('todos', {path: '/'}, function() {
    // additional child routes will go here
  });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    // notice this is the plural version of todo.
    // Indicating this uses the same model as the TodosRoute.
    return this.modelFor('todos');
  }
});