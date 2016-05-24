angular.module('app.requestFactory', [])

.factory('request', function($http) {

  return {
    sendRequest: sendRequest
  };

  function sendRequest(data) {
    return $http({
      method: 'POST',
      url: '/',
      data: data
    })
  }
});