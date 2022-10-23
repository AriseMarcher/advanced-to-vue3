<template>
  <div>
    <BlogPost
      title="My journey with Vue"
      @get-child-message="showChildMessage"
    />
    <BlogPost title="Blogging with Vue" />
    <BlogPost title="Why Vue is so fun" />
  </div>
</template>

<script setup>
import BlogPost from './child-components/BlogPost.vue'

const showChildMessage = (message) => {
  console.log(`子组件传递过来的数据是：${message.value}`)
}
</script>

<style scoped>
  
</style>