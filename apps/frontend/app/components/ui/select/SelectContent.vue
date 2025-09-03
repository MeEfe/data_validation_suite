<script setup lang="ts">
import { SelectContent, SelectViewport, SelectPortal } from "radix-vue";

defineProps<{ position?: "popper" | "item-aligned"; class?: string }>();
</script>

<template>
  <SelectPortal>
    <SelectContent
      data-slot="select-content"
      :position="position ?? 'popper'"
      :class="[
        'bg-popover text-popover-foreground z-50 min-w-[8rem] rounded-md border border-border shadow-md',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=top]:slide-in-from-bottom-2',
        $props.class
      ]"
    >
      <SelectViewport class="p-1 w-[var(--radix-select-trigger-width)] min-w-[var(--radix-select-trigger-width)]">
        <slot />
      </SelectViewport>
    </SelectContent>
  </SelectPortal>
</template>
