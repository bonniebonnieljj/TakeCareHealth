const path = require("path");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// dll
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  configureWebpack: (config) => {
    // analyze
    config.plugins.push(new WebpackBundleAnalyzer())
    /*
      * File                                 Size               Gzipped

        dist/js/about.37aef562.js            980.05 KiB         313.97 KiB
        dist/js/chunk-vendors.49a2ff51.js    824.70 KiB         219.58 KiB
        dist/js/app.81bf0997.js              6.95 KiB           2.87 KiB
        dist/css/app.9b65c3cd.css            206.23 KiB         32.47 KiB
        dist/css/about.dabe94d4.css          1.53 KiB           0.52 KiB*/
    // dll优化
    config.plugins.push(new webpack.DllReferencePlugin({
      context: __dirname, //当前目录
      manifest: require('./build/vendor_manifest.json')
    }))
    config.plugins.push(new webpack.DllReferencePlugin({
      context: __dirname, //当前目录
      manifest: require('./build/vue_manifest.json')
    }))
    // 将打包出来文件动态引入index.html
    // config.plugins.push(
    //   new AddAssetHtmlPlugin({
    //     // dll文件位置
    //     filepath: path.resolve(__dirname, './public/static/vendor.dll.js'),
    //     // dll 引用路径
    //     publicPath: '/static/',
    //     outputPath: '/static/', // 输出的目录地址
    //   })
    // )
  }
}