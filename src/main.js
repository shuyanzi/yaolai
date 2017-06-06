// import Vue from 'vue'
// import App from './App.vue'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })


import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store/'
import axios from 'axios'

import App from './App.vue'
import Loading from './install/Loading'

import routes from './router.config.js'
// import './assets/css/animate.css';
// import './assets/css/1.css';
import Mint from 'mint-ui';
Vue.use(Mint);
// console.log(store);

Vue.use(VueRouter);

Vue.use(Loading);

// const router=new VueRouter(routerConfig);
// const router=new VueRouter({routerConfig});

// const scrollBehavior = (to, from, savedPosition) => {
//   if (savedPosition) {
//   	console.log(savedPosition)
//     return savedPosition
//   } else {
//     return { x: 0, y: 0 }
//   }
// }


//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('showLoading')  
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});


const router=new VueRouter({
	mode: 'history', //切换路径模式，变成history模式
  	scrollBehavior: () => ({x:0, y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	// linkActiveClass:'link-active',
  	// scrollBehavior,
	routes
});

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
