<script setup lang="ts">
defineProps<{
  number: number | string;
  title: string;
}>();
</script>

<template>
  <div class="step-row flex items-start gap-8">
    <div
      class="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center font-bold text-white mt-1 shrink-0"
    >
      {{ number }}
    </div>
    <div class="step-row-content">
      <h3 class="step-row-title text-2xl font-bold text-white">{{ title }}</h3>
      <div class="step-row-body text-lg text-slate-400">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.step-row-title {
  margin: 0 0 0.35rem;
  line-height: 1.15;
}

.step-row-body {
  line-height: 1.25;
}

.step-row-body :deep(p) {
  margin: 0;
  line-height: 1.25;
}

.step-row-body :deep(ul) {
  margin: 0;
  padding-left: 0;
}

.step-row-body :deep(li) {
  line-height: 1.22;
  padding: 0.08rem 0;
}

.step-row-body :deep(ul ul > li) {
  padding: 0.04rem 0;
}
</style>
