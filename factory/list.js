'use strict';

var chalk    = require('chalk'),
    inquirer = require('inquirer'),
    post     = require('./post'),
    reader   = require('./reader');

function constructChoices(posts) {
  var choices = [],
      space = ' ',
      separator = ' - ';

  posts.forEach(function (post, index) {
    var line = '',
        number   = (index + 1) + '.',
        headline = '"' + post.headline + '"';

    // Construct the message of the article
    line += chalk.gray(number) + space;
    line += chalk.yellow(headline) + space;

    var choice = {
      'name': line,
      'short': post.headline,
      'value': post.url
    };

    choices.push(choice);
  });

  return choices;
}

function listTrendingPosts(posts) {
  var choices = constructChoices(posts);

  inquirer.prompt([
    {
      type: 'list',
      name: 'url',
      message: 'Select the article to read :',
      choices: choices,
      pageSize: 20
    }
  ], function (answers) {
      reader.show(answers.url);
  });
}

function top(count) {
  post.getTrending(count).then(function (posts) {
    listTrendingPosts(posts);
  }, function (err) {
    console.log('Oops! Something went wrong! %s', err);
  });
}

module.exports = {
  top: top
};
