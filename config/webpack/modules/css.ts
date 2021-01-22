import { Configuration, RuleSetRule, WebpackPluginInstance } from 'webpack';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BUILD_CSS, BUILD_CSS_CHUNK } from '../utils';

const postcssLoader = (sourceMap = false, minify = false): RuleSetRule => {
  const plugins = [
    postcssPresetEnv({
      stage: 0,
    }),
  ];

  if (minify) {
    plugins.push(cssnano);
  }

  return {
    loader: 'postcss-loader',
    options: {
      sourceMap,
      postcssOptions: {
        plugins,
      },
    },
  };
};

interface CLO {
  sourceMap?: boolean;
  modules?: boolean | string | { [index: string]: string };
}

const cssLoader = (modules = false, sourceMap = false): RuleSetRule => {
  const options: CLO = {
    sourceMap,
  };

  if (modules) {
    options.modules = {
      localIdentName: '[path][name]__[local]--[hash:base64:5]',
    };
  }

  return {
    loader: 'css-loader',
    options,
  };
};

interface MCE {
  loader: { [index: string]: unknown };
  plugin: WebpackPluginInstance;
}

const miniCssExtract = (): MCE => ({
  loader: {
    loader: MiniCssExtractPlugin.loader,
  },
  plugin: new MiniCssExtractPlugin({
    filename: BUILD_CSS,
    chunkFilename: BUILD_CSS_CHUNK,
  }),
});

const loaderCss = (env = 'development', modules = false): Configuration => {
  const isDev = env === 'development';
  const isProd = env === 'production';

  const config: Configuration = {
    module: {
      rules: [],
    },
  };

  const rule: RuleSetRule = {};

  if (!modules) {
    rule.test = /\.css$/;
    rule.exclude = /\.module\.css$/;
  } else {
    rule.test = /\.module\.css$/;
  }

  rule.use = [
    isDev ? 'style-loader' : miniCssExtract().loader,
    cssLoader(modules, isDev),
    postcssLoader(isDev, isProd),
  ];

  config.module.rules.push(rule);

  if (isProd) {
    config.plugins = [miniCssExtract().plugin];
  }

  return config;
};

export const loadCss = (env = 'development'): Configuration => loaderCss(env);
export const loadCssModules = (env = 'development'): Configuration =>
  loaderCss(env, true);
