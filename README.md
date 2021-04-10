## 启动
* 安装依赖包 npm install
* 测试 dll npm run dll  想跳过这一步，需要将public里面的引用dll去除
* 启动 npm run serve


## 打包优化
### 输出webpack配置
* 开发环境： npm inspect > webpack.dev.config.js --mode=development
* 研发环境： npm inspect > webpack.pro.config.js --mode=production

## 开发环境优化
* 编译速度  
  - [X] hmr

## 生产环境优化
* - [ ] 文件拆分
      splitchunk
* - [ ] 冗余文件去除
      uglifyjs-webpack-plugin
      esModule
* - [ ] 第三方包单独打包
* - [ ] css拆分
* - [ ] 利用缓存
* - [ ] 去除不必要的预加载

## 小功能
* - 自动打印当前页面 html2canvas
    - 点击用户图标
