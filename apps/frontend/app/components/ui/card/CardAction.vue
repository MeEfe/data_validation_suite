<template>
  <div data-slot="card-action" :class="['col-start-2 row-span-2 row-start-1 self-start justify-self-end', customClass]">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ customClass?: string }>();
</script>
