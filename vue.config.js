// const path = require("path");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
  configureWebpack: (config) => {
    return {
      plugins: [new WebpackBundleAnalyzer()]
      /*
      * File                                 Size               Gzipped

        dist/js/about.37aef562.js            980.05 KiB         313.97 KiB
        dist/js/chunk-vendors.49a2ff51.js    824.70 KiB         219.58 KiB
        dist/js/app.81bf0997.js              6.95 KiB           2.87 KiB
        dist/css/app.9b65c3cd.css            206.23 KiB         32.47 KiB
        dist/css/about.dabe94d4.css          1.53 KiB           0.52 KiB*/
    }
  }
}