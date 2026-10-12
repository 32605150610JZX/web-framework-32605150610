<!-- ============================================================
     WatchLab.vue —— 小实验 03：侦听器（2.7）
     目录：experiments/03-watch/
============================================================ -->
<template>
  <div class="lab">
    <h2>实验 03 | 侦听器（2.7）</h2>
    <p class="muted">勾选/增删触发"自动保存"；改 name 两种侦听都响，改 city 只有 deep 响。</p>

    <div class="search-row">
      <input v-model="keyword" placeholder="输入搜索词，看 Console 新旧值" />
      <span v-if="savedTip" class="save-tip">{{ savedTip }}</span>
    </div>

    <ul class="notes">
      <li v-for="note in notes" :key="note.id">
        <input type="checkbox" v-model="note.done" />
        <span class="note-text">{{ note.text }}</span>
      </li>
    </ul>

    <button class="btn" @click="addNote">添加一条</button>

    <hr />

    <h3>👂 deep / 路径侦听对比</h3>
    <p class="user-info">user.name = {{ user.name }} | user.city = {{ user.city }}</p>
    <div class="btn-group">
      <button class="btn" @click="changeName">改 user.name（两种侦听都响）</button>
      <button class="btn" @click="changeCity">改 user.city（只有 deep 响）</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WatchLab',
  data() {
    return {
      keyword: '',
      savedTip: '',
      saveTimer: null,
      notes: [
        { id: 1, text: '侦听器自动保存演示', done: false },
        { id: 2, text: 'deep 深层侦听', done: false }
      ],
      user: { name: '张三', city: '乐山' }
    }
  },
  watch: {
    keyword(newVal, oldVal) {
      console.log(`搜索词从 "${oldVal}" 变为 "${newVal}"`)
    },
    notes: {
      deep: true,
      immediate: true,
      handler() {
        console.log('notes 发生变化，触发自动保存')
        this.savedTip = '正在保存…'
        clearTimeout(this.saveTimer)
        this.saveTimer = setTimeout(() => {
          this.savedTip = '已自动保存 ✓'
        }, 600)
      }
    },
    'user.name'(val) {
      console.log('[路径侦听] user.name：', val)
    },
    user: {
      deep: true,
      handler(val) {
        console.log('[deep 侦听] user 整体变化：', val.name, val.city)
      }
    }
  },
  methods: {
    addNote() {
      this.notes.push({
        id: Date.now(),
        text: '新增一条笔记',
        done: false
      })
    },
    changeName() {
      const names = ['张三', '李四', '王五']
      this.user.name = names[Math.floor(Math.random() * 3)]
    },
    changeCity() {
      const cities = ['乐山', '成都', '绵阳']
      this.user.city = cities[Math.floor(Math.random() * 3)]
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
  color: #111827;
  font-weight: 600;
}
.muted {
  color: #6b7280;
  margin: 0 0 16px;
  font-size: 14px;
}

/* 搜索行 */
.search-row {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
input {
  padding: 8px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 15px;
  width: 280px;
  outline: none;
  color: #374151;
}
input:focus {
  border-color: #10b981;
}

/* 保存标签：和参考图完全一致的浅绿胶囊 */
.save-tip {
  background: #d1fae5;
  border: 1px solid #10b981;
  border-radius: 999px;
  color: #065f46;
  padding: 6px 24px;
  font-size: 15px;
  font-weight: 500;
}

/* 待办列表：横线分隔 */
.notes {
  list-style: none;
  padding: 0;
  margin: 0 0 12px;
}
.notes li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 4px;
  border-bottom: 1px solid #e5e7eb;
  font-size: 15px;
}
.notes li input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #10b981;
  margin: 0;
}
.note-text {
  color: #6b7280;
  flex: 1;
}

.btn {
  padding: 6px 18px;
  border: 1px solid #10b981;
  border-radius: 999px;
  background: #ffffff;
  color: #065f46;
  cursor: pointer;
  font-size: 14px;
}
.btn:hover {
  background: #ecfdf5;
}

hr {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 20px 0;
}
h3 {
  font-size: 16px;
  margin: 0 0 10px;
  color: #111827;
}
.user-info {
  font-size: 15px;
  color: #374151;
  margin: 0 0 12px;
}
.btn-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
