angular.module('app', [
  'app.speech',
  'app.requestFactory',
  'app.request',
  'ngRoute'
])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home/home.html',
      controller: 'RequestController'
    });
});