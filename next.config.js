const withSass = require('@zeit/next-sass');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
require('dotenv').config();

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[folder]___[hash:base64:5]",
  },
  webpack: (config) => {
    config.resolve.plugins.push(new TsconfigPathsWebpackPlugin());
    return config;
  },
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
  }
});
