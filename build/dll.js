const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: "production",
  entry: {
    vendor: ['element-ui', 'echarts'],
    vue: ['vue/dist/vue.esm.js', 'vue-router', 'vuex']
  },
  output: {
    path: path.join(__dirname, '../public/static'),
    filename: "[name].dll.js",
    library: "[name]_library"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname,".","[name]_manifest.json"),
      name: "[name]_library"
    })
  ]
}