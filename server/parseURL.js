function parseText(text) {
  var pronouns = 'imemymineweusouroursyouyouryourshesheithimherhishersitstheythemtheirtheirstheofforfindgivegetsearchgoogle';

  for (var i = 0; i < text.length; i++) {
    if (pronouns.indexOf(text[i]) !== -1) {
      text.splice(i, 1);
    }
  }
  return text;
}

exports.parseURL = function(text) {
  var APIs = {
    reddit: 'https://www.reddit.com/r/' + text[text.indexOf('reddit') + 1],
    youtube: 'https://www.youtube.com/results?search_query=' + text.slice(text.indexOf('youtube') + 1).join('+'),
    twitter: 'https://twitter.com/search?f=tweets&vertical=default&q=' + text.slice(text.indexOf('twitter') + 1).join('+'),
    yelp: 'http://www.yelp.com/search?find_desc=' + text[text.indexOf('yelp') + 1],
    news: 'http://abcnews.go.com/' + text[text.indexOf('news') - 1],
    wikipedia: 'https://en.wikipedia.org/wiki/' + text.slice(text.indexOf('wikipedia') + 1).join('_'),
    stock: 'http://finance.yahoo.com/q?s=' + text[text.indexOf('stock') - 1],
    stackoverflow: 'http://stackoverflow.com/search?q=' + text.slice(text.indexOf('stackoverflow') + 1).join('+')
  };

  for (var key in APIs) {
    if (text.indexOf(key) !== -1) {
      return APIs[key];
    }
  }

  // If text not in APIs, parse unwanted text and do google search
  text = parseText(text);
  return 'https://www.google.com/search?q=' + text.join(' ');
}