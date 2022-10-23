<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
  <p>{{ calculateBooksMessage() }}</p>
  <button @click="changeBooks">Change books</button>
  <p>{{fullName}}</p>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
});

const publishedBooksMessage = computed(() => {
  console.log('计算属性触发了')
  return author.books.length > 0 ? 'Yes' : 'No';
})

// 组件中
function calculateBooksMessage() {
  console.log('方法触发了')
  return author.books.length > 0 ? 'Yes' : 'No'
}

const changeBooks = () => {
  author.books[3] = '123'
}

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    console.log(newValue)
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ')
  }
});

setTimeout(() => {
  firstName.value = 'Steven'
  console.log(fullName)
}, 2000)

</script>

<style scoped>
  
</style>