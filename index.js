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
  .command('top')
  .description('List Linda Ikeji Top Stories')
  .option('-n, --number <int>", "specify number of stories')
  .action(function(options){
    var count = options.number || 20;
    list.top(count);
    console.log("List top ten Linda Ikeji Stories");
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

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
