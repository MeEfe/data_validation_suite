<template>
  <tfoot
    data-slot="table-footer"
    :class="['bg-muted/50 border-t border-border font-medium [&>tr]:last:border-b-0', customClass]"
  >
    <slot />
  </tfoot>
</template>

<script setup lang="ts">
defineProps<{ customClass?: string }>();
</script>
