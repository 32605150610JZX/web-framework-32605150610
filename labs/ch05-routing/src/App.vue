<template>
  <div id="app">
    <h1>ch05-routing｜第 5 章实验台</h1>
    <p class="muted">第 05 课（5.1—5.6）：路由——地址栏变，组件换，页面不刷新</p>
    <nav class="top-nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
    </nav>
    <p class="muted addr">当前地址：<code>{{ $route.fullPath }}</code>｜登录态：<b>{{ $route.path === '/login' || isLogin() ? '已登录' : '未登录' }}</b>（守卫看 token）</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    isLogin() {
      return !!localStorage.getItem('token')
    }
  }
}
</script>

<style scoped>
.top-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 0 8px;
}
.top-nav a {
  color: var(--primary-dark);
  text-decoration: none;
  border: 1px solid var(--primary);
  border-radius: 999px;
  padding: 3px 14px;
  font-size: 14px;
}
.top-nav a:hover {
  background: var(--primary-bg);
}
.top-nav a.router-link-active {
  background: var(--primary);
  color: #fff;
}
.addr {
  font-size: 13px;
}
code {
  background: var(--primary-bg);
  border-radius: 4px;
  padding: 0 6px;
  font-family: Consolas, Monaco, monospace;
}
.muted {
  color: var(--muted);
  margin-top: 0;
}
</style>
