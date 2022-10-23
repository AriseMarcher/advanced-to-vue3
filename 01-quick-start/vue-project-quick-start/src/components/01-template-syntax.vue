<template>
  <div>
    <span>Message: {{ msg }}</span>
    <div :id="dynamicId">dynamicId</div>
    <button :disabled="isButtonDisabled">Button</button>
    <div v-bind="objectOfAttrs">动态绑定多个值</div>

    {{ number + 1 }}

    {{ ok ? 'YES' : 'NO' }}

    {{ message.split('').reverse().join('') }}

    <div :id="`list-${id}`">List</div>

    <a :[attributeName]="url">动态参数</a>
    <div @[eventName]="doSomething">做些什么吧</div>

    <form @submit.prevent="onSubmit">...</form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const msg = ref('hello vue3.0');
const dynamicId = ref('100');
const isButtonDisabled = ref(true);

const message = ref("hello vue3.0 & vite");
const number = ref(88);
const ok = ref(true);
const id = ref('001');

const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}

const attributeName = ref('href');
const url = "http://www.baidu.com";

const eventName = ref(null);

const doSomething = () => console.log('doSomething');

const onSubmit = () => console.log('onSubmit');

</script>

<style scoped>
  
</style>