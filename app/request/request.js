angular.module('app.request', [])

.controller('RequestController', function($scope, $sce, request, speech) {
  $scope.data = {};
  $scope.home = 'Hi, I\'m kirk!';
  $scope.home2 = 'What can I do for you?';
  jQuery('#waves').show();
  jQuery('body').toggleClass('bg');

  if (speech.checkRecognition()) {
    var recognition = speech.createRecognition();
    speech.speechToText(recognition, $scope.data, function(data) {

      request.sendRequest(data)
        .then(function(APIdata) {
          $scope.home = '';
          $scope.home2 = '';
          jQuery('#waves').hide();
          jQuery('body').toggleClass('bg');
          $scope.APIdata = $sce.trustAsHtml(APIdata.data);
        })
        .catch(function (error) {
          console.error('Rendering HTML for APIdata unsuccessful ' + error);
        });

    });
  }

});