var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/pages/app.js',
    article: './src/pages/article.js',
    vendor: [
      'zepto',
      'vue',
      'lib/static/sm.js',
      'lib/static/sm-extend.js',
      'lib/static/sm.css',
      'lib/static/sm-extend.css'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'lib': path.resolve(__dirname, '../lib'),
      'zepto': 'lib/static/zepto.js'
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    //preLoaders: [
    //  {
    //    test: /\.vue$/,
    //    loader: 'eslint',
    //    exclude: /node_modules/
    //  },
    //  {
    //    test: /\.js$/,
    //    loader: 'eslint',
    //    exclude: /node_modules/
    //  }
    //],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel?compact=false',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer?browsers=last 2 version')
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel',
      css: ExtractTextPlugin.extract('vue-style', 'css!autoprefixer?browsers=last 2 version')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Vue: 'vue'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['common', 'vendor'],
      minChunks: 2
    })
  ],
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}
