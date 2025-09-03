<script setup lang="ts">
import { SelectTrigger, SelectIcon } from "radix-vue";
import { ChevronDown } from "lucide-vue-next";

defineProps<{ size?: "sm" | "default"; class?: string }>();
</script>

<template>
  <SelectTrigger
    data-slot="select-trigger"
    :data-size="size ?? 'default'"
    :class="[
      'border-input data-[placeholder]:text-muted-foreground flex items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-colors outline-none',
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      'disabled:cursor-not-allowed disabled:opacity-50',
      size === 'default' ? 'h-9' : 'h-8',
      $props.class
    ]"
  >
    <slot />
    <SelectIcon>
      <ChevronDown class="w-4 h-4 opacity-50" />
    </SelectIcon>
  </SelectTrigger>
</template>
