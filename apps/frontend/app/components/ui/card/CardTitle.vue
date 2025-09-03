<template>
  <div data-slot="card-title" :class="['leading-none font-semibold', customClass]">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ customClass?: string }>();
</script>
