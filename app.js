
var app = angular.module('kirk');



app.config(function($routeProvider, $httpProvider) {
  $routeProvider.when(
    '/', {
      templateUrl: '/Search/searchTemplate.html',
      controller: 'searchCtrl',
      controllerAs: 'search'
    })
  
});