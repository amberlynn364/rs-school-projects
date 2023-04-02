const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development'
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist/main'),
      },
      port: 3000,
      open: true,
      hot: true,
    },
      entry: {
        main: path.resolve(__dirname, 'src/main', 'script.js'),
        pets: path.resolve(__dirname, 'src/pets', 'script.js')
      }, 
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: './[name]/script.js',
        chunkFilename: './[name]/chunkFilename.js',
        assetModuleFilename: 'assets/img/[name][ext]'
    },
    
    plugins: [
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/main', 'index.html'),
        filename: 'main/index.html',
        chunks: ['main'],
        }),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'src/pets', 'index.html'),
          filename: 'pets/index.html',
          chunks: ['pets'],
          }),
        new MiniCssExtractPlugin({
            filename: '[name]/style.css',
            chunkFilename: '[name]/[name].[id].css',
            ignoreOrder: false,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                      loader: 'postcss-loader',
                      options: {
                        postcssOptions: {
                          plugins: [require('postcss-preset-env')],
                        }
                      }
                    },
                    'sass-loader'
                ],
            },
            {
              test: /\.woff2?$/i,
              type: 'asset/resource',
              generator: {
                filename: 'assets/fonts/[name].[ext]'
              } 
            },
        ]
    }
}