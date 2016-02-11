#!/usr/bin/env node

/* eslint no-process-exit:0 */

var flags = [];
var platform = process.platform;
var arch = require("../../").system();
var enclose = require("../../").exec;
var windows = (platform === "win32");
var exe = windows ? ".exe" : "";
var x64 = (arch === "x64");
if (x64) flags.push("--x64");

try {
  require.resolve("browserify");
} catch(error) {
  console.log("Failed to require('browserify')");
  console.log("Please run 'npm install' here");
  process.exit(1);
}

flags.push("--output", "./browserify" + exe);
flags.push("./index.js");
enclose(flags);
