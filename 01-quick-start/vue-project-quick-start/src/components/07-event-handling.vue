<template>
  <!-- 使用特殊的 $event 变量 -->
  <button @click="warn('Form cannot be submitted yet.', $event)">
    Submit
  </button>

  <!-- 使用内联箭头函数 -->
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">
    Submit
  </button>
</template>

<script setup>
function warn(message, event) {
  // 这里可以访问原生事件
  if (event) {
    console.log(event)
    event.preventDefault()
  }
  alert(message)
};
// 事件修饰符
// @click.prevent.self 会阻止元素及其子元素的所有点击事件的默认行为而
// @click.self.prevent 则只会阻止对元素本身的点击事件的默认行为。
</script>

<style scoped>
  
</style>