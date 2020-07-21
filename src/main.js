import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import VueRouter from 'vue-router';
import {i18n} from './i18n'
import FlagIcon from 'vue-flag-icon'



Vue.use(FlagIcon);

Vue.config.productionTip = false
Vue.use(VueRouter)



export const app=new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
