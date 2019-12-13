import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from '@/config'
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import {Button,Container,Header,Aside,Main,Footer,Row,Col,Message,Icon} from 'element-ui';
Vue.prototype.$message=Message;
Vue.prototype.$config = config;
Vue.config.productionTip = false;
Vue.use(elementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
