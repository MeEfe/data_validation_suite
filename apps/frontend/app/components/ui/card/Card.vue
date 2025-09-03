<template>
  <div
    data-slot="card"
    :class="['bg-card text-card-foreground flex flex-col rounded-xl border border-border py-6 shadow-sm', customClass]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ customClass?: string }>();
</script>
