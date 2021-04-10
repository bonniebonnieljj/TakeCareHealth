import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/zh-CN";
import "./styles.scss";
import "@/style/index.scss";
import "@/plugins"
import { registAllComponents } from "@/components";
Vue.use(ElementUI, { locale });
// import echarts from 'echarts/lib/echarts'
// import * as echarts from 'echarts/lib/echarts'
// Vue.prototype.$echarts = echarts.default

registAllComponents(Vue);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


