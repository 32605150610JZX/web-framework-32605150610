<template>
  <div class="box">
    子组件 ScopedChild 的 .box（蓝色——没被父组件的绿色样式染到）
  </div>
</template>

<script>
export default {
  name: 'ScopedChild'
}
</script>

<style scoped>
.box.box {
  border: 2px solid #3b82f6;
  border-radius: 8px;
  padding: 10px;
  margin: 8px 0;
}
</style>
