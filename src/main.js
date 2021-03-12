import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// axios
import Axios from 'axios'
// import { 引入的组件 export 出来的 变量} from 'vue-i18n'
import VueI18n from './language'

// 设置全局 svgIcon
import SvgIcon from '@/components/Svgicon'

const app = createApp(App);
// vue3.0注入Axios    
app.config.globalProperties.$axios = Axios;


app
  .use(store)
  .use(router)
  .use(Antd)
  .use(VueI18n)
  .component('svg-icon', SvgIcon)
  .mount("#app");
