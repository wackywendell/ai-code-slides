<script setup lang="ts">
defineProps<{
  emoji?: string
}>()
</script>

<template>
  <div class="slidev-layout default">
    <div class="grid grid-cols-[auto_1fr] gap-12 items-center h-full">
      <div v-if="emoji" class="text-[10rem] leading-none">{{ emoji }}</div>
      <div class="min-w-0">
        <slot />
      </div>
    </div>
  </div>
</template>
