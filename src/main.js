import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router'
import App from './App.vue'
// import env from './env'


const mock = false;
if(mock){
  require('./mock/api')
}


// GET 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 5000;
// axios.defaults.baseURL = env.baseURL;


// GET 相应拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login';
  }else{
    alert(res.msg)
  }
})

Vue.use(VueAxios, axios)   // GET 使用this调用axios
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
