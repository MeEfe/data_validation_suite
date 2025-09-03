<template>
  <caption data-slot="table-caption" :class="['text-muted-foreground mt-4 text-sm', customClass]">
    <slot />
  </caption>
</template>

<script setup lang="ts">
defineProps<{ customClass?: string }>();
</script>
