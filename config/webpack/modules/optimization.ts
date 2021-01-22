import { Configuration } from 'webpack';

export const splitChunks = (): Configuration => ({
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          name: false,
        },
      },
    },
  },
});
