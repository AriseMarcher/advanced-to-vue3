<template>
  <input ref="input" v-model="inputValue">

  <ul>
    <li v-for="item in list" ref="itemRefs">
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref(null)

const inputValue = ref('');
const itemRefs = ref([])
onMounted(() => {
  input.value.focus()
  console.log(itemRefs.value[0])
});

const list = ref([1, 2, 3]);

const myFn = (message) => console.log(message);
// 宏显示暴露
defineExpose({
  myFn
});
</script>
<style scoped>
  
</style>