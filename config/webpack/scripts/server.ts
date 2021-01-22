import DevServer from 'webpack-dev-server';
import chalk from 'chalk';

import getDevConfig from '../config/webpack.dev';

import { createCompiler, choosePort, HOST, PORT } from '../utils';

console.log(chalk.underline('Launching the development server...'));

const compiler = createCompiler(getDevConfig());

(async () => {
  try {
    const choosenPort = await choosePort(HOST, PORT);

    if (choosenPort === null) {
      throw new Error(chalk.yellowBright('→ Application cannot be launched'));
    }

    const server = new DevServer(compiler, {
      host: HOST,
      port: choosenPort,
      historyApiFallback: true,
      overlay: true,
      quiet: true,
      clientLogLevel: 'info',
      noInfo: true,
      hot: true,
    });

    server.listen(choosenPort, HOST, () => {
      console.log(
        `${chalk.greenBright('✓ Server listening on')} ${chalk.blueBright(
          `http://${HOST}:${choosenPort}`,
        )}`,
      );
    });
  } catch (error) {
    throw new Error(`
      ${chalk.redBright('→ Error!')}
      ${error.message || error}
    `);
  }
})();
