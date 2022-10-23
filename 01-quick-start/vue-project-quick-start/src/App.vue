<script setup>
import TemplateSyntax from './components/01-template-syntax.vue';
import ReactiveFundamentals from './components/02-reactivity-fundamentals.vue';
import ComputedProperties from './components/03-computed-properties.vue'
import ClassAndStyleBinding from './components/04-class-and-style-binding.vue'
import ConditionalRendering from './components/05-conditional-rendering.vue'
import ListRendering from './components/06-list-rendering.vue'
import EventHandling from './components/07-event-handling.vue'
import FormInputBinding from './components/08-form-input-bindings.vue'
import LifecycleHooks from './components/09-lifecycle-hooks.vue'
import Watchers from './components/10-watchers.vue'
import TemplateRefs from './components/11-template-refs.vue'
import ComponentBasics from './components/12-components-basics.vue'

import { ref, onMounted } from 'vue'
// 我要拿 TemplateRefs 中的一些暴露值
const templateRefs = ref(null);

onMounted(() => {
  console.log(templateRefs.value)
  // console.log(templateRefs.value.myFn)
  templateRefs.value?.myFn('hello vue3.0')
});
</script>

<template>
  <!-- <TemplateSyntax /> -->
  <!-- <ReactiveFundamentals /> -->
  <!-- <ComputedProperties /> -->
  <!-- <ClassAndStyleBinding class="auto-class" /> -->
  <!-- <ConditionalRendering /> -->
  <!-- <ListRendering /> -->
  <!-- <EventHandling /> -->
  <!-- <FormInputBinding /> -->
  <!-- <LifecycleHooks /> -->
  <!-- <Watchers /> -->
  <!-- <TemplateRefs ref="templateRefs" /> -->
  <ComponentBasics />
</template>

<style scoped>
</style>
