angular.module('app', [
  'app.speech',
  'app.requestFactory',
  'app.request',
  'ngRoute'
])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'RequestController'
    })

});