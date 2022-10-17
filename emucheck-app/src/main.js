import './assets/css/main.css'
import './assets/font/font.css'
import './assets/iconfont/iconfont.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './util/rem'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false
// Vue.use(VueAwesomeSwiper)
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
