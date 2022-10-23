<template>
  <div>
    <FancyBtn>
      Click me fancy btn
      <div style="color:red">我是一个小小的div标签</div>
    </FancyBtn>

    <br />
    <FancyBtn />

    <BaseLayout>
      <template v-slot:header>
        这是header
      </template>
    </BaseLayout>

    <BaseLayout>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>

      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template #footer>
        <p>Here's some contact info</p>
      </template>
    </BaseLayout>

    <MyComponent v-slot="aaa">
      {{ aaa.text }} -- {{ aaa.count }}
    </MyComponent>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import FancyBtn from './common/FancyButton.vue';
import BaseLayout from './common/BaseLayout.vue'
import MyComponent from './common/MyComponent.vue';

const slotProps = ref({
  text: 'the text',
  count: 99
});
console.log('11111111')
console.log(slotProps)
</script>

<style scoped>
  
</style>