'use strict';

import path  from 'path';
import fs from 'fs';

const _root = path.resolve(__dirname, '..');

export function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

/**
 * Get subdirectories names
 */
// export const getFolders = (src) => fs.readdirSync(src).filter(file => fs.statSync(path.join(src, file)).isDirectory());

// const srcPages = './src/app/pages';
// const src = 'src';
/**
 * Get Obj with pages
 * TODO: refactor
 */
// export const getEntries = () => {
//   const folders = getFolders(srcPages),
//         pages = {};

//   folders.map((v) => {
//     pages[v] = `${ srcPages }/${ v }/${ v }.js`;
//   });

//   pages.main = './src/main.js';

//   console.log(pages);

//   return pages;
// };
