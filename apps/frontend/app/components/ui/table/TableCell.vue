<template>
  <td
    data-slot="table-cell"
    :class="[
      'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
      customClass
    ]"
  >
    <slot />
  </td>
</template>

<script setup lang="ts">
defineProps<{ customClass?: string }>();
</script>
