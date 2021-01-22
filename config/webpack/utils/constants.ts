import { resolve } from 'path';
import { path as PROJECT_ROOT } from 'app-root-path';

export { PROJECT_ROOT };
export const SOURCE_DIRECTORY = resolve(PROJECT_ROOT, 'src');
export const BUILD_DIRECTORY = resolve(PROJECT_ROOT, 'build');
export const APP_INDEX = resolve(PROJECT_ROOT, 'src/index.tsx');

export const HOST = 'localhost';
export const PORT = 3000;

export const BUILD_ASSETS = 'static';
export const BUILD_JS = `${BUILD_ASSETS}/js/[name].[chunkhash].js`;
export const BUILD_JS_CHUNK = `${BUILD_ASSETS}/js/[name].[chunkhash].chunk.js`;
export const BUILD_CSS = `${BUILD_ASSETS}/css/[name].[contenthash].css`;
export const BUILD_CSS_CHUNK = `${BUILD_ASSETS}/css/[name].[contenthash].chunk.css`;
export const BUILD_IMAGES = `${BUILD_ASSETS}/images/[name].[contenthash][ext][query]`;
export const BUILD_FONTS = `${BUILD_ASSETS}/fonts/[name][ext][query]`;
