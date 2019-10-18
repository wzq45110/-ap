import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/font_02gqvn3xo4r/iconfont.css'
// 适配文件
import 'lib-flexible/flexible'
// 引入字体图标
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
