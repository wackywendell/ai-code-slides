<script setup lang="ts">
defineProps<{
  number: number | string
  title: string
}>()
</script>

<template>
  <div class="flex items-center gap-8">
    <div
      class="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center font-bold text-white shrink-0"
    >
      {{ number }}
    </div>
    <div>
      <h3 class="text-2xl font-bold text-white">{{ title }}</h3>
      <p class="text-lg text-slate-400">
        <slot />
      </p>
    </div>
  </div>
</template>
