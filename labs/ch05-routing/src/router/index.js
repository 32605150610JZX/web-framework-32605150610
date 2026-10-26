// router/index.js —— ch05-routing 路由表（全章唯一，逐实验长大）
// 创建：createRouter + createWebHashHistory（hash 模式，地址带 #）
// 挂载：main.js 里 app.use(router) 之后，全项目才有 router-link/router-view
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/01-basic/Home.vue'
import About from '../views/01-basic/About.vue'
import NotFound from '../views/02-redirect/NotFound.vue'
import Users from '../views/03-dynamic/Users.vue'
import User from '../views/03-dynamic/User.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // 根路径重定向：打开 / 自动跳 /home（放最前，第一时间接管）
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    // 动态路由：:id 是占位符，一条规则匹配 /user/1、/user/2、/user/9527…
    { path: '/users', component: Users },
    { path: '/user/:id', component: User },
    // 404 兜底：通配符必须放最后——从上往下匹配，先到先得
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})

export default router
