const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build'),
    publicPath: './',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    require('postcss-preset-env'),
                    // {
                    //   // 其他选项
                    // },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        //
        test: /\.(jpeg|jpg|png|gif)$/,
        loader: 'url-loader',
        type: 'javascript/auto', // 阻止webpack5中的assert，如果用webpack5，直接改type就行了

        options: {
          // 图片大小小于8kb，就会被base64处理
          // 优点，减少请求数量（减轻服务器压力）
          // 缺点：图片体积会更大（文件请求速度更慢）
          limit: 8 * 1024,
          // 问题：因为url—loader 默认使用es6模块解析，而html-loader 引入图片是commonjs
          // 解析时会出问题：[object Module]
          // 解决：关闭 url-loader 的es6模块化，使用commonjs解析
          esModule: false,
          outputPath: 'imgs',
          name: '[hash:10].[ext]',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        exclude: /\.(html|js|css|less|jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css',
    }),
    // 压缩css资源
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  mode: 'production',
  devServer: {
    static: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
  },
};
