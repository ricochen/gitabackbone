angular.module('app.request', [])

.controller('RequestController', function($scope, $sce, request, speech) {
  $scope.data = {};

  if (speech.checkRecognition()) {
    var recognition = speech.createRecognition();
    speech.speechToText(recognition, $scope.data, function(data) {

      request.sendRequest(data)
        .then(function(APIdata) {
          $scope.renderAPIdata = function() {
            return $sce.trustAsHtml(APIdata.data);
          };
          console.log('Client side APIdata: ' + APIdata); // APIdata not logging to console correctly, needs fix
        })
        .catch(function (error) {
          console.error('Rendering HTML for APIdata unsuccessful ' + error);
        });

    });
  }

});