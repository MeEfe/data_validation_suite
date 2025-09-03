<script setup lang="ts">
import { SelectItem, SelectItemText, SelectItemIndicator } from "radix-vue";
import { Check } from "lucide-vue-next";

defineProps<{ class?: string }>();
</script>

<template>
  <SelectItem
    data-slot="select-item"
    :class="[
      'relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      $props.class
    ]"
  >
    <SelectItemText>
      <slot />
    </SelectItemText>
    <span class="absolute right-2 flex size-3.5 items-center justify-center">
      <SelectItemIndicator>
        <Check class="w-4 h-4" />
      </SelectItemIndicator>
    </span>
  </SelectItem>
</template>
