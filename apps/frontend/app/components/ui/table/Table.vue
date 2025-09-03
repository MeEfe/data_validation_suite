<template>
  <div data-slot="table-container" class="relative w-full overflow-x-auto border border-border">
    <table data-slot="table" :class="['w-full caption-bottom text-sm', customClass]">
      <slot />
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps<{ customClass?: string }>();
</script>
