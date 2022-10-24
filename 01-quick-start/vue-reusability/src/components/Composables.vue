<script setup>
import { useMouse } from '../helpers/mouse'
const { x, y } = useMouse()
</script>

<template>
  Mouse position is at: {{ x }}, {{ y }}
</template>
