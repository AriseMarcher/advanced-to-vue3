<template>
  <button @click="increment">
    {{ state.count }}
  </button>
  <div>
    {{ foo + 1 }}
    {{ object.foo }}
  </div>
</template>

<script setup>
import { ref, reactive, nextTick } from 'vue';

const state = reactive({ count: 0 });

function increment() {
  state.count++
  nextTick(() => {
    // Get new DOM
  })
}

// n 是一个局部变量，同 state.count
// 失去响应性连接
let n = state.count;
// 不影响原始的 state
n++;

// count 也和 state.count 失去了响应性连接
let { count } = state;
// 不会影响原始的 state
count++;

// 该函数接收一个普通数字，并且
// 将无法跟踪 state.count 的变化
const callSomeFunction = count => console.log(count)
callSomeFunction(state.count);

const object = { foo: ref(1) }
const { foo } = object

const books = reactive([ref('Vue 3 Guide')])
// 这里需要 .value
console.log(books)
console.log(books[0].value)

const map = reactive(new Map([['count', ref(9)]]))
// 这里需要 .value
console.log(map.get('count').value);
</script>

<style scoped>
  
</style>