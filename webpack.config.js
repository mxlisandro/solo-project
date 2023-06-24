const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
          publicPath: 'build/bundle.js'
        },
        compress: true,
        port: 8080,
      },
      plugins: [new HtmlWebpackPlugin()],
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
            test: /\.s[ac]ss$/i,
            // exclude: /node_modules/,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
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