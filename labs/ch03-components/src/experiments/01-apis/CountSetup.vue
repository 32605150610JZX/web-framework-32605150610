<template>
  <div class="mini">
    <h3>组合式 API</h3>
    <p>计数器的值为：{{ count }}</p>
    <button @click="countFn">+1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const countFn = () => {
  count.value++
}
</script>

<style scoped>
.mini {
  border: 1px dashed var(--border);
  border-radius: 8px;
  padding: 10px 14px;
}
button {
  padding: 4px 12px;
  border: 1px solid var(--primary);
  border-radius: 6px;
  background: #fff;
  color: var(--primary-dark);
  cursor: pointer;
}
</style>
