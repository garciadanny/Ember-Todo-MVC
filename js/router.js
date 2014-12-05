Todos.Router.map(function() {
  // when the url path matches '/', use the 'todos' template.
  this.resource('todos', {path: '/'});
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});