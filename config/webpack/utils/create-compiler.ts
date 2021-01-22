import webpack, { Compiler, Configuration } from 'webpack';
import chalk from 'chalk';

export const createCompiler = (config: Configuration): Compiler => {
  try {
    return webpack(config);
  } catch (error) {
    console.log(chalk.redBright('→ Fatal Error!'));
    console.error(error.stack || error);

    if (error.details) {
      console.error(error.details);
    }

    return process.exit(-1);
  }
};
