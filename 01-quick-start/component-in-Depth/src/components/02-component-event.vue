<template>
  <button @click="$emit('someEvent')">click me</button>
  <button @click="increaseBy">点我 +1</button>

  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />

  <input
    type="text"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  />
  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
  <br />
  <input
    type="text"
    :value="foo"
    @input="fooInput"
  />
</template>

<script setup>
// const emit = defineEmits(['increaseBy']);
const props = defineProps({
  modelValue: String,
  firstName: String,
  lastName: String,
  foo: String,
  fooModifiers: { default: () => ({}) }
})
const emit = defineEmits([
  'update:modelValue',
  'increaseBy',
  'someEvent',
  'update:firstName',
  'update:lastName',
  'update:foo'
])
function increaseBy () {
  emit('increaseBy', 1)
};
function fooInput (e) {
  let value = e.target.value
  if (props.fooModifiers.aaa) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
    console.log(value)
  }
  emit('update:foo', value)
}
</script>

<style scoped>
  
</style>