import { Configuration } from 'webpack';

import { BUILD_FONTS, BUILD_IMAGES } from '../utils';

export const loadSvg = (): Configuration => ({
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
});

export const loadImages = (): Configuration => ({
  module: {
    rules: [
      {
        test: /\.(bmp|gif|jpe?g|png)$/,
        type: 'asset',
        generator: {
          filename: BUILD_IMAGES,
        },
      },
    ],
  },
});

export const loadFonts = (): Configuration => ({
  module: {
    rules: [
      {
        test: /\.(woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: BUILD_FONTS,
        },
      },
    ],
  },
});
