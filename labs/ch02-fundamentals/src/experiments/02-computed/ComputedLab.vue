<template>
  <div class="lab">
    <h2>实验 02 | 计算属性（2.6）</h2>
    <p class="muted">搜索过滤 + 统计 + <b>缓存验证</b>（打开 F12 Console 看打印次数）。</p>

    <input v-model="keyword" placeholder="搜索笔记…" />

    <p class="stats">
      共 {{ notes.length }} 条 | 筛选后 {{ filteredNotes.length }} 条 | 总字数 {{ totalChars }} | 完成率 {{ donePercent }}%
    </p>

    <ul class="notes">
      <li v-for="(note, index) in filteredNotes" :key="note.id" :class="['', { done: note.done }]">
        <label><input type="checkbox" v-model="note.done" /></label>
        {{ index + 1 }}. {{ note.text }}【{{ note.priority }}】
      </li>
    </ul>

    <p v-if="filteredNotes.length === 0" class="empty">没有匹配「{{ keyword }}」的笔记</p>

    <hr />

    <h3>📝 缓存验证: computed vs methods</h3>
    <p>totalChars 写 3 遍: {{ totalChars }} | {{ totalChars }} | {{ totalChars }}</p>
    <p>getTotalChars() 调 3 遍: {{ getTotalChars() }} | {{ getTotalChars() }} | {{ getTotalChars() }}</p>
    <button @click="refreshTick++">触发重渲染（已点 {{ refreshTick }} 次，改的是无关数据）</button>
  </div>
</template>

<script>
export default {
  name: 'ComputedLab',
  data() {
    return {
      keyword: '',
      refreshTick: 0,
      notes: [
        { id: 1, text: '学习单文件组件三段结构', priority: '高', done: false },
        { id: 2, text: 'v-model 表单三件套跑通', priority: '中', done: false },
        { id: 3, text: '给记事本加上删除功能', priority: '低', done: false }
      ]
    }
  },
  computed: {
    filteredNotes() {
      return this.notes.filter(n => n.text.includes(this.keyword))
    },
    totalChars() {
      console.log('[computed] totalChars 计算了 1 次')
      return this.notes.reduce((sum, n) => sum + n.text.length, 0)
    },
    donePercent() {
      if (this.notes.length === 0) return 0
      const done = this.notes.filter(n => n.done).length
      return Math.round((done / this.notes.length) * 100)
    }
  },
  methods: {
    getTotalChars() {
      console.log('[methods] getTotalChars 执行了 1 次')
      return this.notes.reduce((sum, n) => sum + n.text.length, 0)
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

input {
  width: 220px;
  padding: 6px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  background: #fff;
  color: #1f2937;
  outline: none;
}
input:focus {
  border-color: #10b981;
}

.stats {
  color: #059669;
  font-weight: 600;
  margin: 10px 0;
  font-size: 14px;
}

.notes {
  list-style: none;
  margin: 10px 0;
  padding: 0;
  display: grid;
  gap: 8px;
}
.notes li {
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 14px;
  background: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
}
.notes li.done {
  color: #9ca3af;
  text-decoration: line-through;
}
.notes li input[type="checkbox"] {
  width: auto;
  margin: 0;
}

.empty {
  text-align: center;
  color: #9ca3af;
  border: 1px dashed #d1d5db;
  border-radius: 6px;
  padding: 14px;
  font-size: 14px;
}

hr {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 16px 0;
}
h3 {
  font-size: 15px;
  margin: 0 0 8px;
  color: #1f2937;
}
button {
  padding: 5px 16px;
  border: 1px solid #10b981;
  border-radius: 999px;
  background: #fff;
  color: #065f46;
  cursor: pointer;
  font-size: 14px;
}
button:hover {
  background: #ecfdf5;
}
</style>