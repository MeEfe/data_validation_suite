<template>
  <tbody data-slot="table-body" :class="['[&_tr:last-child]:border-0', customClass]">
    <slot />
  </tbody>
</template>

<script setup lang="ts">
defineProps<{ customClass?: string }>();
</script>
