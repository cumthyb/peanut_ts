import Vue from 'vue'
import Router from 'vue-router'
import dynamicRoutes from './dynamicRouter'
Vue.use(Router)

const init: Array<any> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/mnt/c/Users/cumth/Desktop/peanut_ts/src/views/Home/index.vue')
  }
]

let router:any={}

router.routes = dynamicRoutes.routes.concat(init)
router.mode = process.env.VUE_APP_HISTORY_MODE === 'hash' ? 'hash' : 'history'

export default new Router(router)
