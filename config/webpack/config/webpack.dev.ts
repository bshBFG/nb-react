import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import getCommonConfig from './webpack.common';
import * as modules from '../modules';

export default (): Configuration => {
  return merge(
    getCommonConfig(),
    {
      mode: 'development',
      devtool: 'eval-cheap-module-source-map',
    },
    modules.loadCss(),
    modules.loadCssModules(),
  );
};
