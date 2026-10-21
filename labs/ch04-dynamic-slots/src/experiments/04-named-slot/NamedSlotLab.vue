<template>
  <div class="lab">
    <h2>实验 04｜具名插槽（4.3.3）</h2>
    <p class="muted">同一张 InfoCard 打三个孔：#header 标题、默认正文、#footer 操作。</p>

    <div class="row">
      <InfoCard>
        <template v-slot:header>
          <span>📖 课程通知（v-slot:header）</span>
        </template>
        <p>本周四晚 19:00 腾讯课堂直播：第 4 章组件基础（下）答疑。</p>
        <p>请提前把 ch04-dynamic-slots 项目跑起来。</p>
        <template v-slot:footer>
          <button>知道了</button>
          <button>稍后提醒</button>
        </template>
      </InfoCard>

      <InfoCard>
        <template #header>
          <span>⏰ 倒计时（#header 缩写）</span>
        </template>
        <p>距离期末作品提交还有 <b>{{ days }}</b> 天。</p>
        <template #footer>
          <button>查看要求</button>
        </template>
      </InfoCard>

      <InfoCard>
        <template #footer>
          <button>来填内容</button>
        </template>
      </InfoCard>
    </div>
  </div>
</template>

<script>
import InfoCard from './InfoCard.vue'

export default {
  name: 'NamedSlotLab',
  components: { InfoCard },
  data() {
    return { days: 66 }
  }
}
</script>

<style scoped>
.lab {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--primary);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

button {
  padding: 4px 12px;
  border: 1px solid var(--primary);
  border-radius: 6px;
  background: #fff;
  color: var(--primary-dark);
  font-size: 13px;
}

.muted {
  color: var(--muted);
}
</style>
