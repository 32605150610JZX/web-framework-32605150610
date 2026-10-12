<template>
  <div class="lab">
    <h2>实验 01 | 修饰符串联（2.5.3）</h2>
    <p class="muted">串联按从左到右依次执行：`.stop` 先剪断冒泡，`.prevent` 再拦下跳转。</p>

    <div class="bubble" @click="log('outer 触发（外层 @click）')">
      外层盒子 @click
      <button @click.stop="log('inner 触发（.stop：冒泡被阻止，外层不响）')">内层 .stop</button>
      <button @click="log('inner 触发（无 .stop：冒泡到外层）')">内层 无.stop</button>
      <a href="https://vuejs.org" @click.stop.prevent="log('串联 .stop.prevent：冒泡和跳转都被拦下，只出这一条')">（串联实验）.stop.prevent</a>
    </div>

    <ol class="logs">
      <li v-for="(item, index) in logs" :key="index">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'ModifierChainLab',
  data() {
    return { logs: [] }
  },
  methods: {
    log(msg) {
      this.logs.unshift(msg)
      console.log(msg)
    }
  }
}
</script>

<style scoped>
.lab {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-left: 4px solid #10b981;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  padding: 16px 20px;
}
.lab h2 {
  margin: 0 0 8px;
  font-size: 18px;
  color: #1f2937;
}
.muted {
  color: #6b7280;
  margin: 0 0 12px;
  font-size: 14px;
}

.bubble {
  border: 1.5px solid #10b981;
  background: #ecfdf5;
  padding: 8px 14px;
  border-radius: 8px;
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}
.bubble button {
  padding: 4px 14px;
  border: 1px solid #10b981;
  border-radius: 999px;
  background: #fff;
  color: #065f46;
  cursor: pointer;
  font-size: 14px;
}
.bubble a {
  color: #2563eb;
  font-size: 14px;
}

.logs {
  list-style: none;
  background: #1f2937;
  color: #d1fae5;
  font-family: Consolas, Monaco, monospace;
  font-size: 13px;
  border-radius: 8px;
  margin: 12px 0 0;
  padding: 10px 16px;
  min-height: 2em;
}
.logs li {
  line-height: 1.9;
}
</style>