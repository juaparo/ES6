const webpack = require("webpack");
const nodeEnv = process.env.NODE_ENV || 'production';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode : "production",
  devtool : "source-map",
  entry : "./app.js",
  output : {
    filename : "_build/bundle.js"
  },
  module : {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader : "babel-loader",
        options : {
          presets : ["@babel/preset-env"]
        }
      }
    ]
  },
  plugins : [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify('5fa3b9'),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: '1+1',
      'typeof window': JSON.stringify('object'),
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  performance: {
    hints: false
  }
}
