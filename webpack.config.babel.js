import { dev, prod } from './config/webpack/';
import { argv } from 'yargs';

let wpConfig;

switch (argv.env) {
  case 'prod':
  case 'production': {
    wpConfig = prod;
    break;
  }

  case 'st':
  case 'stage': {
    // TODO
    break;
  }

  default: {
    wpConfig = dev;
  }

}

export default wpConfig;
