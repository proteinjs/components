var path = require('path');
var webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');

// if there are module resolution issues, verify assumptions about pathing
// console.log(`__dirname in webpack.config: ${__dirname}`);

// see  https://github.com/webpack/webpack/issues/11467#issuecomment-808618999/
// for details
const webpack5esmInteropRule = {
  test: /\.m?js/,
  resolve: {
    fullySpecified: false
  }
};

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  // entry provided dynamically in startServer.initializeHotReloading
  // entry: {
  //   app: ['webpack-hot-middleware/client', './generated/index.ts'],
  // },
  output: {
    filename: '[name].js',
    // path and publicPath provided in startServer.initializeHotReloading
    // path: path.join(__dirname, 'dist'),
    library: '[name]'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      'react': path.join(__dirname, '../node_modules/react'),
      'process': 'process/browser',
      '@mui/joy': path.join(__dirname, '../node_modules/@mui/joy'),
      '@mui/material': path.join(__dirname, '../node_modules/@mui/material'),
      '@mui/icons-material': path.join(__dirname, '../node_modules/@mui/icons-material'),
      'webpack-hot-middleware': path.join(__dirname, '../node_modules/webpack-hot-middleware'),
    },
    // provide shims for node libraries for webpack >= 5
    fallback: { 
      'crypto': require.resolve('crypto-browserify'),
      'util': require.resolve('util/'),
      'events': require.resolve('events/'),
      'url': require.resolve('url/'),
      'buffer': require.resolve('buffer/'),
      'stream': require.resolve('stream-browserify'),
      'process/browser': require.resolve('process/browser'),
    },
  },
  // since this webpack.config is invoked via webpack-dev-middleware in the process of the consuming server package (not this package)
  // we need to let webpack know where to look for loaders like: file-loader and ts-loader
  // it's ideal to keep those dependencies within this package instead of requiring them installed by the consumer
  resolveLoader: {
    modules: [path.resolve(__dirname, '../node_modules'), 'node_modules'],
  },
  module: {
    rules: [
      webpack5esmInteropRule,
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      // this will only transpile (to integrate with babel via ReactRefreshTypeScript); rely on the ide for compiler checks
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              getCustomTransformers: () => ({
                before: [ReactRefreshTypeScript()],
              }),
              transpileOnly: true,
            },
          },
        ],
      },
      // image files
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // This line will keep the original path and filename
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,  // Matches node_modules folder
          name: 'vendor',
          chunks: 'all',
          priority: -10
        }
      }
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
        process: 'process/browser',                 
        Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
};