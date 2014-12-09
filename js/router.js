Todos.Router.map(function() {
  // when the url path matches '/', use the 'todos' template.
  this.resource('todos', {path: '/'}, function() {
    // additional child routes will go here
    this.route('active');
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

Todos.TodosActiveRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});