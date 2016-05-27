lindaikeji-cli [![npm version](https://badge.fury.io/js/lindaikeji.svg)](https://www.npmjs.com/package/lindaikeji) [![npm](https://img.shields.io/npm/dt/lindaikeji.svg)](https://www.npmjs.com/package/lindaikeji)
==========

Linda Ikeji for Men, HR Managers and Associates, Even Husbands that don't want to be caught opening the website on their browsers. - A CLI for reading [Linda Ikeji's Blog](http://www.lindaikejisblog.com) Stories.

It helps you read awesome Linda Ikeji articles right in your terminal.

![](https://cloud.githubusercontent.com/assets/2946769/15586607/3dc86296-237d-11e6-8875-f859b37ee1a9.png)

## Installation
------------

`$ npm install -g lindaikeji`

## Docs
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

## Usage
-----
There are three commands available: `lindaikeji top`, `lindaikeji read`, `lindaikeji open`.

#### top command
`$ lindaikeji top`

List Linda Ikeji Top Stories

`$ lindaikeji top 5`

List only top 5 Linda Ikeji Stories

#### read command
`$ lindaikeji read <url>`

Read the story right in your terminal

#### open command
`$ lindaikeji open <url>`

Opens it in your browser

`$ lindaikeji open -a firefox <url>`

Opens it in the given application, like it opens the url using firefox in above example.



## Contributing
------------

Please feel free to fork this package and contribute by submitting a pull request to add more features or fix bugs.
[Read more on contributing](./CONTRIBUTING.md).


## How can I thank you?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or HackerNews? Spread the word!

Don't forget to [follow me on twitter](https://twitter.com/unicodeveloper)!

Thanks!
Prosper Otemuyiwa.



## License
-------

The source code is open-sourced software licensed under the [MIT License](http://opensource.org/licenses/MIT).
