'use strict';

var rp = require('request-promise'),
    cheerio = require('cheerio'),
    htmlToText = require('html-to-text'),
    Stream = require('string-stream'),
    pager = require('default-pager'),
    urlParser = require('url');

function getTextFromHtml(html) {
  return htmlToText.fromString(html);
}

function printArticle(content) {
  var readStream = new Stream(content);
  readStream.pipe(pager(function () {
    console.log('This is the (END)');
  }));
}

function parseContent(html) {
  var $ = cheerio.load(html),
      articleMarkup = $('.post-outer div.post.hentry').html(),
      content = getTextFromHtml(articleMarkup);
      
      //@dfasoro added this.
      var comments = [], authors = [], body = [], time = [];
      var commentsNode = $('#comments');
      comments.push($('H4', commentsNode).first().text());
      
      try {
        $('#comments-block DT.comment-author', commentsNode).each(function () {
          var authorText = $(this).text().trim();
          //the -7 is essentially to remove the 'said...' suffix
          authorText = authorText.substr(0, authorText.length - 7).trim();
          authors.push(authorText);
        });
        $('#comments-block DD.comment-body', commentsNode).each(function () {
          var bodyText = getTextFromHtml($(this).html()).trim();
          body.push(bodyText);
        });
        $('#comments-block DD.comment-footer SPAN.comment-timestamp > A', commentsNode).each(function () {
          var timeText = $(this).text().trim();
          time.push(timeText);
        });
      }
      catch (parseException) {
        //any yawa that gas should not make the original post not to show up right?
        console.log(parseException)
      }
      
      authors.forEach(function (value, index, array) {
        var text = `${index + 1}) ${authors[index]} @ ${time[index]} said:\n${body[index]}\n`;
        comments.push(text);
      });
      
  return content + "\n\n" + comments.join("\n");
}

function requestContent(url) {
  return rp(url);
}

// Show the content of the blog post to Hackers/Developers/HR Associates/HR Managers 😂😂😂😂
function showContent(url) {
  requestContent(url).then(function (body) {
    var content = parseContent(body);
    printArticle(content);
  }, function () {
    console.log('Oops! Something went wrong!');
  });
}

function validateUrl (url) {
  if (urlParser.parse(url).host === 'lindaikejisblog.com') {
    return true;
  }

  return false;
}

function show(url) {
  showContent(url);
}

module.exports = {
  show: show
};
