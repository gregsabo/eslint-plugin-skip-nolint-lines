/**
 * @fileoverview Suppress eslint messages from lines which contain nolint comments.
 * @author Greg Sabo
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require('requireindex');
var ignoreNolint = require('./processors/ignoreNolint');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------




// import processors
module.exports.processors = {
  ".js": ignoreNolint
};
