<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="accent-box mt-6">
    <strong class="text-white">{{ title }}</strong>
    <p class="text-aside mt-1">
      <slot />
    </p>
  </div>
</template>
