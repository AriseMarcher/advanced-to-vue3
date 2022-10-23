<script setup>
import { ref, watchEffect } from 'vue'
import ComponentA from './components/01-component-props.vue'
import ComponentB from './components/02-component-event.vue'
import ComponentC from './components/03-component-fallthrough-attributes.vue'
import ComponentD from './components/04-component-slots.vue'
import ComponentE from './components/05-component-project-inject.vue'
import ComponentF from './components/06-component-async.vue'

const fooMsg = ref('这是给组件传递的props值');
const likes = ref(123);

const count = ref(0)
const callback = () => console.log('他点击了这个按钮');
const increaseCount = n => {
  count.value+= n;
  console.log(count.value);
};
const searchText = ref('');
const firstName = ref('')
const lastName = ref('')
const fooValue = ref('')
watchEffect(() => {
  console.log(searchText.value)
  console.log(`firstName--${firstName.value}`)
  console.log(`lastName--${lastName.value}`)
  console.log(`fooValue--${fooValue.value}`)
});
const handleClick = () => {
  console.log('这是通过透传挂载的事件')
}
</script>

<template>
  深入组件
  <br />
  <GlobalComponent />
  <br />
  <ComponentA :foo="fooMsg" greeting-message="hello vue3.0" :likes="likes" />
  <ComponentB
    v-model="searchText"
    v-model:firstName="firstName"
    v-model:lastName="lastName"
    v-model:foo.aaa="fooValue"
    @some-event="callback"
    @increase-by="increaseCount"
  />
  <br />
  <ComponentC @click="handleClick" class="large foo" id="999" />
  <br />
  <ComponentD />
  <br />
  <ComponentE />
  <br />
  <ComponentF />
</template>

<style scoped>
</style>
