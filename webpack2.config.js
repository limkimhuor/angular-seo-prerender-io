var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: "#source-map",
  entry: ["./app/app.js", "./app/app.scss"],
  output: {
    path: path.resolve(__dirname, "public/"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader',]
        })
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoader: 1,
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              }
            },
            {
              loader: 'sass-loader',
            }
          ]
        })
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|server.js)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      // Image URL config. Generate data URI's for images smaller than 10,000 bytes
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '/images/[name].[ext]?[hash]',
            }
          }
        ]
      },
      // Inline font files smaller than 10000 bytes
      {
        test: /\.(woff2?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit:10000,
              name: '/fonts/[name].[ext]?[hash]',
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
}
