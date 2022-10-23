<script setup>
import { ref } from 'vue'
// const props = defineProps(['foo']);
const props = defineProps({
  foo: String,
  likes: Number,
  greetingMessage: String
})
console.log(props)

// 计数器只是将 props.likes 作为初始值
// 像下面这样做就使 prop 和后续更新无关了
let newLikes = ref(props.likes);
console.log(newLikes)
newLikes = 256
console.log(props)

</script>

<template>
  这是A组件
  <p>父组件传递的props值为：{{ foo }}--{{likes}}--{{greetingMessage}}</p>
</template>

<style scoped>
</style>
