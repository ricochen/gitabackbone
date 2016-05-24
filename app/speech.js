angular.module('app.speech', [])

.factory('speech', function() {

  return {
    checkRecognition: checkRecognition,
    createRecognition: createRecognition,
    speechToText: speechToText
  };

  function checkRecognition() {
    if (!('webkitSpeechRecognition' in window)) { // If browser doesn't support WebSpeech API
      console.log('Web Speech API not supported on this browser');
      return false;
    }
    return true;
  }

  function createRecognition() {
    var recognition = new webkitSpeechRecognition();
    recognition.start();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognition.maxAlternatives = 1;
    console.log('speech started');
    return recognition;
  }

  function speechToText(recognition, data, callback) {
    data.text = '';
    recognition.onresult = function (event) {
       if (typeof(event.results) === 'undefined') { // If users says nothing
        console.log('Please try again');
      }
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        data.text += event.results[i][0].transcript;
      }
      console.log(event); // To see the text in the event object
      recognition.stop();
      callback(data);
    };
  }

});