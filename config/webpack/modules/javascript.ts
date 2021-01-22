import { Configuration } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export const loadJavascript = (): Configuration => {
  const isDev = process.env.NODE_ENV === 'development';

  return {
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          use: [
            isDev && {
              loader: 'babel-loader',
              options: { plugins: ['react-refresh/babel'] },
            },
            { loader: 'ts-loader', options: { transpileOnly: true } },
          ].filter(Boolean),
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      isDev && new ReactRefreshWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin(),
    ].filter(Boolean),
  };
};
