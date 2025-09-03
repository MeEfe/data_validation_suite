<template>
  <div data-slot="card-content" :class="['px-6', customClass]">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ customClass?: string }>();
</script>
