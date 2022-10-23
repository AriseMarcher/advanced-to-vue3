<script setup>
import { ref } from 'vue'
import ComponentA from './components/01-component-props.vue'

const fooMsg = ref('这是给组件传递的props值');
const likes = ref(123);
</script>

<template>
  深入组件
  <br />
  <GlobalComponent />
  <br />
  <ComponentA :foo="fooMsg" greeting-message="hello vue3.0" :likes="likes" />
</template>

<style scoped>
</style>
