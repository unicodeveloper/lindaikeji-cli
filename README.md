lindaikeji-cli [![npm version](https://badge.fury.io/js/lindaikejicli.svg)](https://www.npmjs.com/package/lindaikejicli) [![npm](https://img.shields.io/npm/dt/lindaikejicli.svg)](https://www.npmjs.com/package/lindaikejicli)
==========

Linda Ikeji for Men, HR Managers and Associates, Even Husbands that don't want to be caught - A CLI for reading [Linda Ikeji's Blog](http://www.lindaikejisblog.com) Stories.

It helps you read awesome linda ikeji articles right in your terminal.

![](https://cloud.githubusercontent.com/assets/2946769/15586607/3dc86296-237d-11e6-8875-f859b37ee1a9.png)

Installation
------------

`$ npm install -g lindaikeji`

Docs
----
    Usage: medium [options] [command]

    Commands:

    top [options]         List Linda Ikeji Top Stories
    read <url>            Read the story right in your terminal
    open [options] <url>  Opens it in your browser

    Options:

    -h, --help     output usage information
    -V, --version  output the version number

    top [options]
    n, --number <int>", "specify number of stories

    open [options] <url>
    -a, --app <application>  specify app to open the url. Eg: firefox

Usage
-----
There are three commands available: `lindaikeji top`, `lindaikeji read`, `lindaikeji open`

#### top command
`$ lindaikeji top`

List Linda Ikeji Top Stories

`$ lindaikeji top -n 5`

List only top 5 Linda Ikeji Stories

#### read command
`$ lindaikeji read <url>`

Read the story right in your terminal

#### open command
`$ lindaikeji open <url>`

Opens it in your browser

`$ lindaikeji open -a firefox <url>`

Opens it in the given application, like it opens the url using firefox in above example.

Issues
------

Feel free to submit issues and enhancement requests.


Contributing
------------

lindaikeji-cli is written in NodeJs and would love to accept pull requests for any issues or feature request.

[Read more on contributing](./CONTRIBUTING.md).


License
-------

Copyright (c) 2016 Prosper Otemuyiwa
Licensed under the [MIT license](http://opensource.org/licenses/MIT).
