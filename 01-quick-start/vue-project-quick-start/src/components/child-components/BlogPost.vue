<template>
  <h4>{{ title }}</h4>
  <button @click="postToParent">点我传递给父组件一些信息</button>
</template>

<script setup>
import { ref } from 'vue'
defineProps(['title']);
const emit = defineEmits(['get-child-message'])

const message = ref('这是一段信息')
const postToParent = () => {
  emit('get-child-message', message)
}
</script>

<style scoped>
  
</style>