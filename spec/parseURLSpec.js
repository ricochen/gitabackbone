describe("parseURL", function() {
  var parseURL = require('../server/parseURL');
  var text;

  beforeEach(function() {
    text = [];
  });

  it("should return a URL string", function() {
    var URL;
    if (parseURL.parseURL(text).includes("http://")) {
      URL = "http://";
    } else if (parseURL.parseURL(text).includes("https://")) {
      URL = "https://";
    }
    expect(parseURL.parseURL(text)).toContain(URL);
  });

  it("should return the URL for the corresponding API keyword", function() {
    text = ["i", "love", "reddit", "askreddit"];
    expect(parseURL.parseURL(text)).toEqual("https://www.reddit.com/r/" + text[text.indexOf('reddit') + 1]);

    text = ["youtube", "best", "song", "ever"];
    expect(parseURL.parseURL(text)).toEqual("https://www.youtube.com/results?search_query=" + text.slice(text.indexOf('youtube') + 1).join('+'));

    text = ["twitter", "tori", "kelly"];
    expect(parseURL.parseURL(text)).toEqual("https://twitter.com/search?f=tweets&vertical=default&q=" + text.slice(text.indexOf('twitter') + 1).join('+'));

    text = ["yelp", "food"];
    expect(parseURL.parseURL(text)).toEqual("http://www.yelp.com/search?find_desc=" + text[text.indexOf('yelp') + 1]);

    text = ["can", "i", "see", "technology", "news"];
    expect(parseURL.parseURL(text)).toEqual("http://abcnews.go.com/" + text[text.indexOf('news') - 1]);

    text = ["wikipedia", "javascript"];
    expect(parseURL.parseURL(text)).toEqual("https://en.wikipedia.org/wiki/" + text.slice(text.indexOf('wikipedia') + 1).join('_'));

    text = ["what", "is", "google's", "stock", "price"];
    expect(parseURL.parseURL(text)).toEqual("http://finance.yahoo.com/q?s=" + text[text.indexOf('stock') - 1]);

    text = ["stackoverflow", "how", "to", "reverse", "a", "string"];
    expect(parseURL.parseURL(text)).toEqual("http://stackoverflow.com/search?q=" + text.slice(text.indexOf('stackoverflow') + 1).join('+'));
  });

  it("should do a google search if API keyword is not in text", function() {
    text = ["what's", "the", "weather"];
    expect(parseURL.parseURL(text)).toEqual("https://www.google.com/search?q=" + text.join(' '));
  });

  it("should parse out unwanted text if doing a google search", function() {
    text = ["find", "us", "inception", "movie", "times"];
    expect(parseURL.parseURL(text)).not.toContain("find");
    expect(parseURL.parseURL(text)).not.toContain("us");
  });

});
