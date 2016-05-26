'use strict';

var openUrl = require('open');

function open(url, app) {
  openUrl(url, app);
}

module.exports = {
  open: open
};