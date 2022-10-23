<template>
  <button @click="childClick">Click me 一层且是最外层才会接受到哦</button>
  <!-- <div>这是其他的</div> -->
  <span>Fallthrough attribute: {{ $attrs }}</span>

</template>

<script>
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false
}
</script>

<script setup>
import { useAttrs } from 'vue'
const childClick = () => console.log('childClick');

const attrs = useAttrs()
console.log(attrs.onClick)
</script>

<style scoped>
  
</style>