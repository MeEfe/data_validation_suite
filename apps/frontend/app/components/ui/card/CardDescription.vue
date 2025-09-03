<template>
  <div data-slot="card-description" :class="['text-muted-foreground text-sm', customClass]">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ customClass?: string }>();
</script>
