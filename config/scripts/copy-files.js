'use strict';

import { argv } from 'yargs';
import fs from 'fs';
import { root } from'../scripts/helpers';

// path where config files are
const src = 'env/';
const dest = '../src/app/global/';
const env = argv.env || 'dev';

console.log('from',root(`${ src + env }.config.js`));
console.log('to',root(`${ dest }config.js`));

// copy config file
fs.createReadStream(root(`${ src + env }.config.js`)).pipe(fs.createWriteStream(root(`${ dest }config.js`)));
