<template>
  <div class="event-lab">
    <h3>🎯 事件实验室（2.4 事件对象 · 2.5 事件修饰符）</h3>

    <!-- 事件对象基础实验 -->
    <button @click="showEvent">打印事件对象（不传参）</button>
    <button @click="showEventArg($event, 66)">showEventArg($event, 66)（传参版）</button>
    <a href="https://vuejs.org" @click="goVue">Vue 官网链接（手动 preventDefault）</a>

    <!-- 第1步：.stop 冒泡对比实验 -->
    <div class="bubble" @click="log('outer 触发（外层 @click）')">
      <button @click.stop="log('inner 触发（.stop：冒泡被阻止）')">内层 .stop</button>
      <button @click="log('inner 触发（无 .stop：冒泡到外层）')">内层 无.stop</button>
    </div>

    <!-- 第2步：.prevent / .once / .self 修饰符 -->
    <a href="https://vuejs.org" @click.prevent="log('.prevent 阻止了跳转')">Vue 官网（.prevent 版）</a>
    <button @click.once="log('`.once` 抽奖按钮：只触发这一次！')">抽奖按钮 .once</button>
    <div class="self-box" @click.self="log('.self：点到盒子本身才触发')">
      点盒子本身（.self） <button>我是子元素（点我没用）</button>
    </div>

    <!-- 第3步：键盘修饰符 .enter / .esc -->
    <input
      @keyup.enter="log('回车 .enter 触发')"
      @keyup.esc="log('Esc .esc 触发')"
      placeholder="这里按 Enter / Esc 试试"
    />

    <!-- 页面日志区 -->
    <ol class="logs">
      <li v-for="(item, index) in logs" :key="index">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'EventLab',
  data() {
    return {
      logs: []
    }
  },
  methods: {
    log(msg) {
      this.logs.unshift(msg)
      console.log(msg)
    },
    showEvent(e) {
      this.log(`type=${e.type} | target=<${e.target.tagName.toLowerCase()}> | timeStamp=${Math.round(e.timeStamp)}ms`)
      console.log('完整事件对象：', e)
    },
    showEventArg(e, number) {
      this.log(`传参版：target=<${e.target.tagName.toLowerCase()}> | number=${number}`)
    },
    goVue(e) {
      e.preventDefault()
      this.log('手动 preventDefault() 阻止了跳转')
    }
  }
}
</script>

<style scoped>
.event-lab {
  border: 1px dashed #b8860b;
  padding: 12px 16px;
  border-radius: 8px;
  line-height: 2;
}
.bubble {
  border: 2px solid #42b883;
  padding: 6px 10px;
  margin: 6px 0;
}
.self-box {
  border: 2px dotted #646cff;
  padding: 6px 10px;
  margin: 6px 0;
}
.logs {
  background: #fafafa;
  border-left: 3px solid #b8860b;
  margin: 8px 0 0;
  padding: 4px 8px 4px 28px;
  color: #555;
  min-height: 2em;
}
</style>