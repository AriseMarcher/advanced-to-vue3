<script setup>
import { ref } from 'vue';

const answer = ref('')
const res = await fetch('https://yesno.wtf/api')
answer.value = (await res.json()).answer
</script>

<template>
  The answer is {{ answer }}
</template>

<style scoped>
</style>
