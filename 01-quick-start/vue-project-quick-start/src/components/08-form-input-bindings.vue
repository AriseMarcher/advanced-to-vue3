<template>
  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="edit me" />

  <br />
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>

  <div>Checked names: {{ checkedNames }}</div>

  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>

  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>

</template>

<script setup>
import { ref } from 'vue';

const message = ref("");
const checked = ref(false);
const checkedNames = ref([]);
</script>

<style scoped>
  
</style>