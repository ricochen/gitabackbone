angular.module('kirk', ['ngRoute']).controller('searchCtrl', function ($scope){

  this.speech = function() {
    console.log('Inside speech!');

  if (!('webkitSpeechRecognition' in window)) { // If browser doesn't support WebSpeech API
    console.log('Web Speech API not supported on this browser');
    return;
  } else {
    var recognition = new webkitSpeechRecognition();
    recognition.start();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognition.maxAlternatives = 1;
    console.log('speech started');
  }

  recognition.onresult = function (event) {
    if (typeof(event.results) === 'undefined') { // If users says nothing
      console.log('Please try again');
    }
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      console.log("inside loop");
       document.getElementById('textarea').value += event.results[i][0].transcript;
    }
    console.log(event); // To see how the event object looks like
  };

  // User gets 5 seconds to say the speech, will change later on
  setTimeout(function() {
    recognition.stop();
    console.log('speech ended');
  }, 5000);

};

})