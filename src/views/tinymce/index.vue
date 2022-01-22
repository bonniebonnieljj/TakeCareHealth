<template>
  <div id="tinymce-wrap">
    <Editor :id="tinymceId" v-model="myValue" :init="init"></Editor>
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce' //tinymce默认hidden，
import Editor from '@tinymce/tinymce-vue' //编辑器引入
import 'tinymce/themes/silver/theme' //编辑器主题
import 'tinymce/icons/default' //引入编辑器图标icon

import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
import plugins from './plugins'
import toolbar from './toolbar'
export default {
  name: "tinymce",
  model: {
    prop: 'myValue',
    event: 'change'
  },
  components: {
    Editor
  },
  props: {
    props: {
      id: {
        type: String,
        default: function() {
          return 'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
        }
      },
      value: {
        type: String,
        default: ''
      },
      toolbar: {
        type: Array,
        required: false,
        default() {
          return []
        }
      },
      menubar: {
        type: String,
        default: 'file edit insert view format table'
      },
      height: {
        type: [Number, String],
        required: false,
        default: 360
      },
      width: {
        type: [Number, String],
        required: false,
        default: 'auto'
      }
    },
  },
  data() {
    return {
      myValue: '',
      tinymceId: this.id,
      toolbar: 'bold italic underline forecolor fontselect fontsizeselect | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | tiny_mce_wiris_formulaEditor image screencapture',
      init: {
        selector: this.tinymceId,
        //汉化,路径是自定义的，一般放在public或static里面，汉化文件要自己去下载
        language_url: '/assets/tinymce/lang/zh_CN.js',
        language: 'zh_CN',
        //皮肤
        skin: 'oxide',
        skin_url: `/assets/tinymce/skins/ui/oxide`,
        //隐藏技术支持
        branding: false,
        //隐藏底栏的元素路径
        elementpath: false,
        //关闭菜单
        menubar: false,
        //隐藏状态栏
        statusbar: false,
        //第三方插件
        external_plugins: {
        },
        //插件
        plugins: plugins,
        //工具栏
        toolbar: toolbar,
        // //高度
        // height: 200,
        //粘贴data格式的图像
        paste_data_images: true,
        // images_upload_handler: function (blobInfo, success, failure) {
        //   //将图片转码为base64格式
        //   success('data:' + blobInfo.blob().type + ';base64,' + blobInfo.base64())
        // },
        // images_upload_url: this.post_img_url,
    }
  }
  },
  mounted() {
    tinymce.init({});
  },
  watch: {
    value(newVal) {
      this.myValue = newVal
    },
    myValue(newVal) {
      this.$emit('change', newVal)
    }
  }
}
</script>
<style scoped lang="scss">

</style>
