// router/index.js —— ch05-routing 路由表（全章唯一，逐实验长大）
// 创建：createRouter + createWebHashHistory（hash 模式，地址带 #）
// 挂载：main.js 里 app.use(router) 之后，全项目才有 router-link/router-view
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/01-basic/Home.vue'
import About from '../views/01-basic/About.vue'
import NotFound from '../views/02-redirect/NotFound.vue'
import Users from '../views/03-dynamic/Users.vue'
import User from '../views/03-dynamic/User.vue'
import Center from '../views/04-nested/Center.vue'
import CenterProfile from '../views/04-nested/CenterProfile.vue'
import CenterOrders from '../views/04-nested/CenterOrders.vue'
import NamedDemo from '../views/05-named/NamedDemo.vue'
import ProgramDemo from '../views/06-programmatic/ProgramDemo.vue'
import Search from '../views/06-programmatic/Search.vue'
import Login from '../views/07-guard/Login.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // 根路径重定向：打开 / 自动跳 /home（放最前，第一时间接管）
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    // 动态路由：:id 是占位符；name:'user' 供命名路由按名跳转
    { path: '/users', component: Users },
    { path: '/user/:id', name: 'user', component: User },
    // 嵌套路由：外壳 + children（子 path 不带开头斜杠，自动拼成 /center/profile）
    {
      path: '/center',
      component: Center,
      children: [
        // 空路径重定向：访问 /center 本身时跳到默认子页
        { path: '', redirect: '/center/profile' },
        { path: 'profile', component: CenterProfile },
        { path: 'orders', component: CenterOrders }
      ]
    },
    // 命名路由对照台
    { path: '/named', component: NamedDemo },
    // 编程式导航驾驶舱 + query 搜索页
    { path: '/program', component: ProgramDemo },
    { path: '/search', component: Search },
    // 登录页（守卫的拦截目的地）
    { path: '/login', component: Login },
    // 404 兜底：通配符必须放最后——从上往下匹配，先到先得
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})

// 实验 07：全局前置守卫——/center 是会员区，没 token 一律拦去 /login
// to=去哪 from=从哪来 next=放行函数（每个分支都必须调，忘了就整站卡住）
router.beforeEach((to, from, next) => {
  // 目标是 /center 本身、或 /center/ 开头的子路由
  if (to.path === '/center' || to.path.startsWith('/center/')) {
    if (localStorage.getItem('token')) {
      next() // 验明正身，放行
    } else {
      next('/login') // 拦下，改道去登录页
    }
  } else {
    next() // 非会员区，直接放行
  }
})

export default router
