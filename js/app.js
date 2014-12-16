// Make the ember app available to the browser's javascript environment.
window.Todos = Ember.Application.create();

// This indicates that our app's ApplicationAdapter is an extension of DS.FixtureAdapter
// Adapters are responsible for communicating with a source of data. i.e. APIs
// Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

// Persit data on the browser via `localstorage`
Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});