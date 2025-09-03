<script setup lang="ts">
import { DropdownMenuItem } from "radix-vue";

defineProps<{ inset?: boolean; variant?: "default" | "destructive"; class?: string }>();
</script>

<template>
  <DropdownMenuItem
    data-slot="dropdown-menu-item"
    :data-inset="inset"
    :data-variant="variant"
    :class="[
      'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10',
      $props.class
    ]"
  >
    <slot />
  </DropdownMenuItem>
</template>
