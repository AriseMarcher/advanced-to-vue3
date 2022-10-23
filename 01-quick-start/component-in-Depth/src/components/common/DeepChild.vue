<template>
  <div>
    Deep ChildVue -- {{message}}

    <button @click="update">{{ location }}</button>
  </div>
</template>

<script setup>
import { inject } from 'vue';
const message = inject('message');
console.log(`Provide提供的message值为：${message.value}`)

const {location, updateLocation} = inject('location');
const update = () => {
  updateLocation('the changed location')
}
const readonlyCount = inject('read-only-count')
console.log('the readonly count is' + readonlyCount.value)

</script>

<style scoped>
  
</style>