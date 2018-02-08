#! /usr/bin/env node
const path = require('path');
const commander = require('commander');
const jsbuild = require('./main');
const cwd = path.resolve(process.cwd());

commander
  .version('0.0.1')
  .description('JSBuild one-step/one-stop JavaScript build tool')
  .option('-w, --cwd', 'Working Directory', cwd)
  .parse(process.argv);

jsbuild({cwd});



