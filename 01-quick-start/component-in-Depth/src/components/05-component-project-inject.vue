<template>
  <div>
    <BaseProvide />
    <button @click="addCount">点击增加message值</button>
  </div>
</template>

<script setup>
import { ref, provide, readonly } from 'vue'
import BaseProvide from './common/BaseProvide.vue'

const count = ref(0);
const location = ref('North Pole');

provide('read-only-count', readonly(count))

function updateLocation (newValue) {
  // location.value = 'South Pole'
  location.value = newValue
}
provide('message', count);
provide('location', {
  location,
  updateLocation
})

const addCount = () => {
  count.value++
}
</script>

<style scoped>
  
</style>