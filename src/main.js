import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {
  Button,
  Select,
  Row,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  Submenu,
  MenuItem,
} from 'element-ui';
import { Steps } from 'ant-design-vue';
import axios from 'axios';
Vue.config.productionTip = false;
import './assets/css/global.css';
// 在 request 拦截器中，展示进度条 Nprogress.start()
axios.interceptors.request.use((config) => {
  console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem('token');
  // 在最后必须 return config
  return config;
});
//element-ui
Vue.use(Button);
Vue.use(Select);
Vue.use(Row);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
//antd
Vue.use(Steps);
Vue.prototype.$message = Message;
Vue.prototype.$http = axios;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
