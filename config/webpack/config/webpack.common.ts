import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import { APP_INDEX, BUILD_DIRECTORY, BUILD_JS, BUILD_JS_CHUNK } from '../utils';
import * as modules from '../modules';

export default (): Configuration => {
  return merge(
    {
      entry: [APP_INDEX],
      output: {
        path: BUILD_DIRECTORY,
        filename: BUILD_JS,
        chunkFilename: BUILD_JS_CHUNK,
        publicPath: '/',
        hashDigestLength: 8,
      },
      target: 'web',
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
    modules.loadJavascript(),
    modules.loadSvg(),
    modules.loadFonts(),
    modules.loadImages(),
    modules.setupHtml(),
    modules.splitChunks(),
  );
};
