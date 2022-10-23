<template>
  <div :class="{ active: isActive, 'text-danger': hasError }">class binding</div>
  <div :class="$attrs.class">父组件的class</div>
  <div :style="styleObject">style 绑定1</div>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">style 绑定2</div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const isActive = ref(true);
const hasError = ref(true);
const error = ref(null)
const classObject = reactive({
  active: true,
  'text-danger': false
});

const computedClassObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}));

const activeColor = ref('red')
const fontSize = ref(30)

const styleObject = reactive({
  color: 'red',
  fontSize: '13px'
});

</script>

<style scoped>
.active {
  color: #eb261a;
}
.text-danger {
  background-color: aqua;
}
</style>