<template>
  <div class="info-card">
    <header class="hole-header">
      <slot name="header"><span>默认标题</span></slot>
    </header>

    <main class="hole-body">
      <slot>
        <p>（正文没填，走后备内容）</p>
      </slot>
    </main>

    <footer class="hole-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'InfoCard'
}
</script>

<style scoped>
.info-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: #fff;
  box-shadow: var(--shadow);
  width: 300px;
  overflow: hidden;
}

.hole-header {
  background: var(--primary-bg);
  border-bottom: 1px solid var(--border);
  padding: 10px 16px;
  font-weight: 600;
}

.hole-body {
  padding: 12px 16px;
  min-height: 60px;
}

.hole-footer {
  border-top: 1px dashed var(--border);
  padding: 8px 16px;
  display: flex;
  gap: 8px;
}
</style>
