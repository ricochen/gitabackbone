angular.module('app.request', [])

.controller('RequestController', function($scope, request, speech) {
  $scope.data = {};

  if (speech.checkRecognition()) {
    var recognition = speech.createRecognition();
    speech.speechToText(recognition, $scope.data, function(data) {
      request.sendRequest(data);
    });
  }

});