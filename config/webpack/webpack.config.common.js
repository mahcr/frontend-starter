'use strict';
import { getEntries, root }           from '../scripts/helpers';

import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin';
import ExtractTextPlugin  from 'extract-text-webpack-plugin';
import LoaderOptionsPlugin        from 'webpack/lib/NoErrorsPlugin';
import HotModuleReplacementPlugin from 'webpack/lib/HotModuleReplacementPlugin';
import HtmlWebpackPlugin    from 'html-webpack-plugin';
import ProvidePlugin        from 'webpack/lib/ProvidePlugin';


export const common = {
  context: root('..' ,'src/'),
  // js pages
  entry: {
    vendors: './vendors.js',
    home: './app/pages/home/home.js'
  },

  output: {
    filename: '[name].js'
  },

  resolve: {
    // make webpack understand imports
    extensions: [ '.js', '.css', '.scss' ],
    modules: [ 'node_modules' ]
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: 'file-loader?name=assets/imgs/[name].[hash].[ext]'
      },
      {
        test: /\.(woff|woff2|ttf|eot|ico)$/,
        use: 'file-loader?name=assets/fonts/[name].[hash].[ext]'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [ 'es2015' ]
          }
        }
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-compiled-loader'
      }
    ]
  },

  plugins: [
    /**
     * find shared dependecies and remove them from left to right
     * if app -> share dependecies with vendor they will be removed from app
     * */
    new CommonsChunkPlugin({
      name: 'common',
      chunks: ['vendors', 'home']
    }),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Starter Kit',
      template: 'index.ejs'
    }),
    // jQuery, Tether
    new ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        'Tether': 'tether',
        'window.Tether': 'tether'
    })
  ]

};
