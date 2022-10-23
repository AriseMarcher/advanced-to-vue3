<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>

  <input v-model.number="x" />
  <input v-model.number="y" />

</template>

<script setup>
import { ref, watch, watchEffect, watchPostEffect } from 'vue';

const question = ref('');
const answer = ref('Questions usually contain a question mark; ;-)');

// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! could not reach the API.' + error
    }
  }
});

const x = ref(0)
const y = ref(1)

// 单个 ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// getter 函数
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`)
  }
)

// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
});

const url = ref('');
const data = ref(null);
watchEffect(async () => {
  // const response = await fetch(url.value)
  const changedValue = Math.random(0,10)
  data.value = await changedValue
  console.log(`the data is ${data.value}`)
});

watchPostEffect(() => {
  /* 在 Vue 更新后执行 */
})

// 它会自动停止
watchEffect(() => {})

// ...这个则不会！
setTimeout(() => {
  watchEffect(() => {})
}, 100);

const unwatch = watchEffect(() => {})

// ...当该侦听器不再需要时
unwatch();
</script>

<style scoped>
  
</style>