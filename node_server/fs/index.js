var fs = require("fs")
exports.write = function() {
  console.log(fs)
}

// 只有同步和异步 fs.xxx(args)  fs.xxxSync(args, callBack)

// 文件写入
// 手动步骤：
/*  1. 打开文件 fs.openSync()
*   2. 写文件
*   3. 关闭文件
* */
