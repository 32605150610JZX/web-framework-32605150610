<!-- ============================================================
     StyleBindingLab.vue —— 小实验 04：样式绑定（2.8）
     目录：experiments/04-style-binding/
============================================================ -->
<template>
  <div class="lab" :class="{ dark: isDark }">
    <h2>实验 04 | 样式绑定（2.8）</h2>
    <button class="btn" @click="isDark = !isDark">
      {{ isDark ? '🌞 本卡片切回日间' : '🌙 本卡片切夜间' }}
    </button>

    <h3>① 对象语法：条件挂类</h3>
    <p :class="{ active: count > 0 }">count &gt; 0 时这行变绿加粗（count = {{ count }}）</p>
    <button class="btn" @click="count++">count +1</button>

    <h3>② 数组语法：三选一切换</h3>
    <p :class="[sizeClass]">字号随按钮切换（{{ sizeClass }}）</p>
    <button class="btn" @click="toggleSize">循环切换 S→M→L</button>

    <h3>③ 数组嵌对象：固定类 + 条件类（最常用）</h3>
    <p :class="['badge', { done: isDone }]">{{ isDone ? '已完成' : '进行中' }}</p>
    <button class="btn" @click="isDone = !isDone">切换完成态</button>

    <h3>④ :style 对象绑定：色板滑块</h3>
    <p :style="{ color: themeColor, fontSize: fontSize + 'px' }">
      颜色 {{ themeColor }} | 字号 {{ fontSize }}px
    </p>
    <div class="control-row">
      <label>颜色 <input type="color" v-model="themeColor" /></label>
      <label>字号 <input class="range" type="range" min="12" max="32" v-model.number="fontSize" /></label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StyleBindingLab',
  data() {
    return {
      isDark: false,
      count: 0,
      sizeClass: 'size-m',
      isDone: false,
      themeColor: '#42b883',
      fontSize: 18
    }
  },
  methods: {
    toggleSize() {
      this.sizeClass =
        this.sizeClass === 'size-s'
          ? 'size-m'
          : this.sizeClass === 'size-m'
          ? 'size-l'
          : 'size-s'
    }
  }
}
</script>

<style scoped>
.lab {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-left: 4px solid #10b981;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 16px 20px;
  transition: background 0.2s, color 0.2s;
  text-align: left;
  color: #1f2937;
}

.lab h2 {
  margin: 0 0 12px;
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  text-align: left;
}

.lab h3 {
  font-size: 15px;
  margin: 16px 0 6px;
  font-weight: 600;
  color: #1f2937;
  text-align: left;
}

.lab p {
  margin: 6px 0;
  font-size: 14px;
  text-align: left;
}

/* 统一按钮：绿色描边胶囊 */
.btn {
  display: inline-block;
  padding: 5px 18px;
  margin: 4px 0;
  border: 1px solid #10b981;
  border-radius: 999px;
  background: #ffffff;
  color: #065f46;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
}
.btn:hover {
  background: #ecfdf5;
}

/* 对象语法激活态 */
.active {
  color: #059669 !important;
  font-weight: bold;
}

/* 数组语法三档字号 */
.size-s { font-size: 12px; }
.size-m { font-size: 16px; }
.size-l { font-size: 22px; }

/* 徽章 */
.badge {
  display: inline-block;
  border: 1px solid #10b981;
  border-radius: 999px;
  padding: 2px 16px;
  font-size: 14px;
  color: #065f46;
  background: #ecfdf5;
}
.badge.done {
  color: #9ca3af;
  border-color: #d1d5db;
  background: #f9fafb;
  text-decoration: line-through;
}

/* 滑块行 */
.control-row {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 8px;
  font-size: 14px;
}
.control-row input[type="color"] {
  width: 44px;
  height: 28px;
  padding: 0;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  vertical-align: middle;
}
.range {
  width: 140px;
  accent-color: #10b981;
  vertical-align: middle;
}

/* ========== 夜间模式：只影响本卡片 ========== */
.lab.dark {
  background: #1f2937;
  border-color: #374151;
  border-left-color: #10b981;
  color: #e5e7eb;
}
.lab.dark h2,
.lab.dark h3 {
  color: #e5e7eb;
}
.lab.dark p {
  color: #d1d5db;
}
.lab.dark .btn {
  background: transparent;
  border-color: #10b981;
  color: #6ee7b7;
}
.lab.dark .btn:hover {
  background: rgba(16, 185, 129, 0.12);
}
.lab.dark .badge {
  background: rgba(16, 185, 129, 0.15);
  border-color: #10b981;
  color: #6ee7b7;
}
.lab.dark .badge.done {
  background: rgba(156, 163, 175, 0.12);
  border-color: #4b5563;
  color: #9ca3af;
}
.lab.dark .active {
  color: #34d399 !important;
}
.lab.dark .control-row {
  color: #d1d5db;
}
.lab.dark input[type="color"] {
  background: #374151;
  border-color: #4b5563;
}
</style>