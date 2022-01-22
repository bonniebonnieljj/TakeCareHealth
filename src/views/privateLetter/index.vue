<template>
  <div>
    <!--  (1) npm install print-js -S-->
    <el-button type="primary" @click="clickPrint">点击打印iframe</el-button>
  </div>

</template>
<script>
import printJS from "print-js";

export default {
  data() {
    return {};
  },
  created() {
    const iframe = document.createElement("IFRAME");
    iframe.setAttribute("src", "http://localhost:8080/home");
    iframe.setAttribute("id", "myIframe");
    iframe.setAttribute("name", "myIframe");
    iframe.setAttribute("style", "width: 300px;height: 300px;");
    document.body.appendChild(iframe);
  },
  methods: {
    clickPrint() {
      console.log([document.getElementById("myIframe").contentDocument], frames);
      // const blob = ''
      // const BlobData = window.blob([blob], { contentType: 'pdf...'});
      // this.printSomething({ printable: window.URL.createObjectURL(BlobData), () => {
      this.printSomething({ printable: "app", function(){
        console.log("在这里做一些关闭弹窗后的事情")
      }})
    },
    printSomething({ printable, onPrintDialogClose }) {
      // 此处的style即为打印时的样式
      const style = "@page {  } " + "@media print { .print-div{ padding:8px;background-color:#cccccc;line-height:12px } .red{ color:#f00} .green{color:green}";
      printJS({
        // 如果type为pdf，printable就应该是pdf对应的文件地址或者URL
        printable,
        // 默认是pdf
        type: "html",
        style: style,// 亦可使用引入的外部css;
        scanStyles: false,
        onPrintDialogClose
      });
    }

  }
};
</script>
