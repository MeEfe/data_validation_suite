<template>
  <tr
    data-slot="table-row"
    :class="['hover:bg-muted/50 data-[state=selected]:bg-muted border-b border-border transition-colors', customClass]"
  >
    <slot />
  </tr>
</template>

<script setup lang="ts">
defineProps<{ customClass?: string }>();
</script>
