import chalk from 'chalk';

import getProdConfig from '../config/webpack.prod';
import { createCompiler } from '../utils';

console.log(chalk.underline('Creating an optimized production build...'));

const compiler = createCompiler(getProdConfig());

compiler.run((error, stats) => {
  chalk.redBright('→ Configuration Error!');
  if (error !== null) {
    console.error(error.stack || error);

    // if (error.details) {
    //   console.error(error.details);
    // }

    return;
  }

  const info = stats.toString({
    colors: true,
    hash: true,
    version: true,
    env: true,
    modules: false,
    entrypoints: false,
  });

  if (stats.hasErrors()) {
    console.log(chalk.redBright('→ Error!'));
    console.error(info);
    return;
  }

  if (stats.hasWarnings()) {
    console.log(chalk.yellowBright('→ Warning!'));
    console.warn(info);
    return;
  }

  console.log(info);
  console.log(chalk.greenBright('✓ Build completed'));
});
