import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackBar from 'webpackbar';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const cleanDirectories = (): Configuration => ({
  plugins: [new CleanWebpackPlugin()],
});

export const setupHtml = (): Configuration => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/template.html',
      title: 'React from Webpack',
      filename: 'index.html',
    }),
  ],
});

export const connectProgressBar = (): Configuration => ({
  plugins: [new WebpackBar({})],
});

export const connectBundleAnalyzer = (): Configuration => ({
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      openAnalyzer: false,
      generateStatsFile: true,
    }),
  ],
});
