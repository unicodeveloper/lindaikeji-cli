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

  return content;
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
