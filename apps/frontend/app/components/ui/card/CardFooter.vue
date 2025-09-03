<template>
  <div data-slot="card-footer" :class="['flex items-center px-6 [.border-t]:pt-6', customClass]">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ customClass?: string }>();
</script>
