const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: "production",
  entry: {
    vendor: ['element-ui', 'echarts'],
    vue: ['vue/dist/vue.esm.js', 'vue-router', 'vuex']
  },
  output: {
    // 由于copyPlugin会直接把public下的文件直接copy到dist里面去，所有生成dll后
    path: path.join(__dirname, '../src/components/static'),
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