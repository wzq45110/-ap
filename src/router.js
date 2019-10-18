import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import Myme from './components/myme.vue'
import Attation from './components/attation.vue'
import Meinfo from './components/me/meinfo.vue'
import Metuij from './components/me/metuij.vue'
import Mebaqi from './components/me/mebaqi.vue'
import Mebaoz from './components/me/mebaoz.vue'
import Fenadd from './components/fen/fenadd.vue'
import Fensou from './components/fen/fensou.vue'
import Fendian from './components/fen/fendian.vue'
import Fenbaxa from './components/fen/fenbaxa.vue'
import Mezhu from './components/me/mezhu.vue'
import Fenshu from './components/fen/fenshu.vue'
import Activez from './components/active/activez.vue'
import Activew from './components/active/activew.vue'
import Activedui from './components/active/activedui.vue'
import Activedre from './components/active/activedre.vue'
import Mainac from './components/active/mainac.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/my',
      name: 'my',
      component: Myme
    },
    {
      path: '/attation',
      name: 'attation',
      component: Attation
    },
    {
      path: '/meinfo',
      name: 'meinfo',
      component: Meinfo
    },
    {
      path: '/metuij',
      name: 'metuij',
      component: Metuij
    },
    {
      path: '/mebaqi',
      name: 'mebaqi',
      component: Mebaqi
    },
    {
      path: '/mebaoz',
      name: 'mebaoz',
      component: Mebaoz
    },
    {
      path: '/fenadd',
      name: 'fenadd',
      component: Fenadd
    },
    {
      path: '/fensou',
      name: 'fensou',
      component: Fensou
    },
    {
      path: '/fendian',
      name: 'fendian',
      component: Fendian
    },
    {
      path: '/fenbaxa',
      name: 'fenbaxa',
      component: Fenbaxa
    },
    {
      path: '/mezhu',
      name: 'mezhu',
      component: Mezhu
    },
    {
      path: '/fenshu',
      name: 'fenshu',
      component: Fenshu
    },
    {
      path: '/activez',
      name: 'activez',
      component: Activez
    },
    {
      path: '/activew',
      name: 'activew',
      component: Activew
    },
    {
      path: '/activedre',
      name: 'activedre',
      component: Activedre
    },
    {
      path: '/activedui',
      name: 'activedui',
      component: Activedui
    },
    {
      path: '/mainc',
      name: 'mainac',
      component: Mainac
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
