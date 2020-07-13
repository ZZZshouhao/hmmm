// 导入路由
import VueRouter from 'vue-router'
// 导入vue
import Vue from 'vue'
// 导入组件
import login from '../views/login/login.vue'
// 注册
Vue.use(VueRouter)
// 实例化
const router = new VueRouter({
  // 路由配置
  routes: [{
    path: '/',
    component: login
  }]
})

// 输出
export default router
