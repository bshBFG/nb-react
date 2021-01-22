import prompts, { PromptObject } from 'prompts';
import detect from 'detect-port-alt';
import chalk from 'chalk';

export const choosePort = async (
  host: string,
  defaultPort: number,
): Promise<number | null> => {
  try {
    const port: number = await detect(defaultPort, host);

    if (port === defaultPort) {
      return defaultPort;
    }

    const message = `Something is already running on port ${defaultPort}.`;

    if (process.stdout.isTTY) {
      const question: PromptObject = {
        type: 'confirm',
        name: 'shouldChangePort',
        message: chalk.yellowBright(
          `${message}\nWould you like to run the app on another port instead?`,
        ),
        initial: true,
      };

      const response = await prompts(question);

      if (response.shouldChangePort) {
        return port;
      }

      console.log(chalk.redBright(message));
      return null;
    }

    console.log(chalk.redBright(message));
    return null;
  } catch (err) {
    console.log(chalk.redBright('→ Error!'));
    console.error(err.message || err);
    return null;
  }
};
