const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
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
  ],
  mode: 'development',
  devtool: 'nosources-source-map',
  devServer: {
    static: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
  },
};
