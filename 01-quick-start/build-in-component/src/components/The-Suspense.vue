<script setup>
import Dashboard from './Dashboard.vue'
import Other from './Other.vue'
</script>

<template>
  <Suspense>
    <!-- <Dashboard /> -->
    <Other />
    <!-- <template #fallback>
      Loading...
    </template> -->
  </Suspense>
</template>

<style scoped>
</style>
