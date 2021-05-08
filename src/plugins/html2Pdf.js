// 导出页面为PDF格式

import html2canvas from "html2canvas";

// import JSPDF from "jspdf";

export default {

  install(Vue) {
    Vue.prototype.ExportSavePdf = function() {
      var element = document.getElementById("app");
      html2canvas(element, {

        logging: false

      }).then(function(canvas) {
        var a4w = 841.89;
        // var a4h = 592.28; // A4大小，210mm x 297mm，四边各保留20mm的边距，显示区域170x257

        // canvas实际：宽高
        const contentWidth = canvas.width
        const contentHeight = canvas.height
        // 要打印的整图高度
        const imgWidth = a4w
        const imgHeight = a4w / contentWidth * contentHeight

        canvas.style.width = imgWidth + 'px'
        canvas.style.height = imgHeight + 'px'
        const win = window.open('', '_blank')
        win.document.body.appendChild(canvas)
        win.print()
      });
    };
  }
};



// 支持内嵌iframe打印 jquery兼容IE11写法（理解思想即可)
// 原理： 将子iframe的内容换成canvas后绘制父frame的canvas，然后区分进行打印
// step1: 引入 bluebird.min.js 和html2canvas.min.js
// step2: 确保父frame和子frame都有唯一的id可以获取Dom和contentWindow
// step3: 此方法仅处理了嵌套一层子iframe
function printWithIframe(iframeIdOrName) {
  var subIframe = $("#iframeIdOrName")[0].contentWindow
  var subIframeDocument = iframe.document
  html2canvas(subIframeDocument.body, {
    x: subIframe.pageXoffset, //页面在水平方向的滚动距离
    y: subIframe.pageYoffset, //页面在垂直方向的滚动距离
    useCORS: true // 保证跨域图片的显示，如果不添加该属性，或者为false,地图地图不显示
  }).then(function(subCanvas) {
    $(".parent .subIframeWrap").children().hide()
    $(".parent .subIframeWrap").append($(subCanvas))

    var parentDom = document.querySelector("#parent-main")
    html2canvas(parentDom, {
      x: parentDom.pageXoffset, //页面在水平方向的滚动距离
      y: parentDom.pageYoffset, //页面在垂直方向的滚动距离
      useCORS: true, // 保证跨域图片的显示，如果不添加该属性，或者为false,地图地图不显示
      allowTaint: true
    }).then(function(canvas) {
      $(".parent .subIframeWrap").children().hide()
      $(".parent .subIframeWrap").append($(subCanvas))

      var a4w = 841.89;
      // var a4h = 592.28; // A4大小，210mm x 297mm，四边各保留20mm的边距，显示区域170x257

      // canvas实际：宽高
      const contentWidth = canvas.width
      const contentHeight = canvas.height
      // 要打印的整图高度
      const imgWidth = a4w
      const imgHeight = a4w / contentWidth * contentHeight

      canvas.style.width = imgWidth + 'px'
      canvas.style.height = imgHeight + 'px'

      $(".parent .subIframeWrap").children().show()
      $(".parent .subIframeWrap canvas").detach()


      var userAgent = window.navigator.userAgent

      // 【打印功能】
      if(userAgent.indexOf("trident")>-1){
        var replacement = $(canvas)
        replacement.css('position', 'fixed')
        replacement.css('top', 0)
        replacement.css('left', 0)
        replacement.css('opacity', 1)
        replacement.css('z-index', 10000)
        $("#parent-main").css('opacity', 0)
        $("#parent-main").append(replacement)
        window.print()
        replacement.detach()
        $("#parent-main").css('opacity', 1)
      } else {
        var win = window.open("", "_blank")
        win.document.body.appendChild(canvas)
        win.print()
      }

      // 【下载功能】
      var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      if(userAgent.indexOf("trident")>-1){
        var arr = image.split(',');
        var mine = arr[0].match(/:(.*?);/)[1];
        var bstr = atob(arr[1]);
        var n = bstr.length;
        var u8arr = new Unit8Array(n);
        while(n--){
          u8arr[n] = bstr.charCodeAt(n);
        }
        window.navigator.msSaveBlob(new Blob([u8arr],{type:mime}), "download.png");
      }else{
        // webkit
        var saveLink = document.createElement('a');
        saveLink.href = image;
        saveLink.download = "download.png";
        saveLink.click();
      }

    })
  })
}
