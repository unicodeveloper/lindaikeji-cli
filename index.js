#!/usr/bin/env node
'use strict';

var path    = require('path'),
    program = require('commander'),
    list    = require('./factory/list'),
    reader  = require('./factory/reader'),
    op      = require('./factory/opener'),
    pkg     = require(path.join(__dirname, 'package.json'));

program
  .version(pkg.version)
  .description(pkg.description);

program
  .command('top [articleCount]')
  .description('List Linda Ikeji Top Stories')
  .action(function(articleCount) {
    var count = parseInt(articleCount) || 20;

    // Prevent negative values
    if (count < 0) {
      count = 20;
    }

    // Todo: consider using a logger, to enable setting the verbosity of the program
    console.log("List top " + count + " Linda Ikeji Stories");
    list.top(count);
  });


program
  .command('read <url>')
  .description('Read the story right in your terminal')
  .action(function(url){
    reader.show(url);
  });

program
  .command('open <url>')
  .description('Opens it in your default browser')
  .option('-a, --app <application>', 'specify app to open the url. Eg: firefox')
  .action(function(url, options){
    var app = options.app || '';
    op.open(url, app);
  });

program.parse(process.argv);

if (process.argv.length <= 2) {
  program.outputHelp();
}
