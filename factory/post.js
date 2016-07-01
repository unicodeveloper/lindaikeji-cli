'use strict';

var request = require('request'),
    Q = require('q'),
    _ = require('lodash');

var BLOGGER_HOST = 'https://www.blogger.com/feeds/9174986572743472561/posts/default?alt=json&max-results=';

// Fetches data from linda Ikeji's blog
function fetchTopStories(count, cb) {
  request(BLOGGER_HOST + count, function (err, res) {
    if (!err && res.statusCode == 200) {
      var data = JSON.parse(res.body);
      cb(data);
    }
  });
}

// Pre processing all the data from the platform
function processContent(data) {
  var entries = data.feed.entry,
      stories = [];

  for (var i = 0; i < entries.length; i++) {
    var item = entries[i],
        postTitle = item.title.$t,
        content   = item.content.$t,
        // Do not assume the link will always remain item 4 in the array
        url       = _.filter(item.link, function (link) {
          return link.rel === 'alternate' && link.type === 'text/html';
        })[0].href,
        timePublished = item.published.$t,
        timeUpdated = item.updated.$t;

    var story = {
      url: url,
      headline: postTitle,
      content: content,
      timePublished: timePublished,
      timeUpdated: timeUpdated
    };

    stories.push(story);
  }

  return stories;
}

function getTrending(count) {
  var deferred = Q.defer();

  fetchTopStories(count, function (res) {
    if (!res) {
      return deferred.reject();
    }

    deferred.resolve(processContent(res));
  });

  return deferred.promise;
}

module.exports = {
  getTrending: getTrending
};
