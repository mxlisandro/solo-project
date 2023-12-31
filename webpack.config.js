const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    entry: './index.js',
    //output will create folder if it doesn't exist
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
      },
      devServer: {
        static: {
          directory: path.resolve(__dirname, 'build'),
          publicPath: '/'
        },
        compress: true,
        port: 8080,
        proxy: {
          '/api': 'http://localhost:3000'
        }
      },
      plugins: [new HtmlWebpackPlugin({
        title: 'development',
        template: path.join(__dirname, './client/index.html')
        // templateContent: ({HtmlWebpackPlugin}) => '<html><head></head><body><h1>Solo Project Dev</h1><div id="react-root"></div></body></html>'
      }),
      new MomentLocalesPlugin(),

        // Or: To strip all locales except “en”, “es-us” and “ru”
        // (“en” is built into Moment and can’t be removed)
        new MomentLocalesPlugin({
            localesToKeep: ['es-us', 'ru'],
        })],
      //webpacks default is production
      mode: 'production',
      module: {
        rules: [
        {
          test: /\.js|\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }],
                ['@babel/preset-react', { targets: "defaults" }]
              ]
            }
          }
        },
        {
            test: /\.css$/i,
            // exclude: /node_modules/,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              // "sass-loader",
            ],
          },
          {
            test: /\.png|svg|jpg|gif$/,
            use: [
              'file-loader'
            ]
          }
      ]
    }
}