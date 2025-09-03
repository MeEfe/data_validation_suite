<template>
  <thead data-slot="table-header" :class="['[&_tr]:border-b border-border', customClass]">
    <slot />
  </thead>
</template>

<script setup lang="ts">
defineProps<{ customClass?: string }>();
</script>
