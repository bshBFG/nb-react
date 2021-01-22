import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import getCommonConfig from './webpack.common';
import * as modules from '../modules';

export default (): Configuration => {
  return merge(
    getCommonConfig(),
    {
      mode: 'production',
      devtool: false,
    },
    modules.loadCss('production'),
    modules.loadCssModules('production'),
    modules.cleanDirectories(),
    modules.connectProgressBar(),
    modules.connectBundleAnalyzer(),
  );
};
