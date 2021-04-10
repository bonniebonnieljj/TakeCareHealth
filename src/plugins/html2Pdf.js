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
