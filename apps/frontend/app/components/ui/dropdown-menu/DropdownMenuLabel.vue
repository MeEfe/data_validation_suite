<script setup lang="ts">
import { DropdownMenuLabel } from "radix-vue";

defineProps<{ inset?: boolean; class?: string }>();
</script>

<template>
  <DropdownMenuLabel
    data-slot="dropdown-menu-label"
    :data-inset="inset"
    :class="['px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', $props.class]"
  >
    <slot />
  </DropdownMenuLabel>
</template>
