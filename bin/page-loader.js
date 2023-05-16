#!/usr/bin/env node
import { Command } from 'commander';
import loadpage from '../src/index.js';

const program = new Command();

program
  .name('page-loader')
  .description('Page loader utility')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-o, --output [dir]', 'output dir (default: "/home/user/current-dir")')
  .arguments('<url>')
  .action((url) => {
    const options = program.opts();
    loadpage(url, options.output);
  });

program.parse();
