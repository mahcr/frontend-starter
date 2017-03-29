# Webpack starter kit for NG2

## Features
| Feature                   | Status               | Test |
|---------------------------|----------------------|------|
| Webpack 2                 | done                 | ✔️    |
| Uglify                    | done                 | ✔️    |
| ESlint                    | done (missing rules) | ✔️    |
| SASS                      | done                 | ✔️    |
| Autoprefix                | done                 | ✔️ ️   |
| Mockdata                  | done                 | ✔️ ️ ️ ️ |
| webpack-md5-hash          | done                 | ✔️ ️ ️ ️ |
| Config envpoints          | done                 | ✔️ ️ ️ ️ |


## Get Started
* nvm install 6.9.1
* npm install

## NPM commands
* `build:prod` - create build for production
* `build:stage` - create build with stage endpoints
* `build:dev` - create build for dev endpoints
* `clean:dist` - remove dist folder
* `mockdata` - remove existent files and create new mockdata files using schema
* `server:dev` - start dev server
* `server:prod` - start server pointing to dist/
* `start` - run server:dev
* `tslint` - run typescript lint
* `rimraf` - remove folder 

TODO: implement json loader
