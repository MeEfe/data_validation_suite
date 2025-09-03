<script setup lang="ts">
import { DropdownMenuCheckboxItem, DropdownMenuItemIndicator } from "radix-vue";
import { Check } from "lucide-vue-next";

defineProps<{
  class?: string;
  checked?: boolean;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:checked", value: boolean): void;
}>();
</script>

<template>
  <DropdownMenuCheckboxItem
    :checked="checked"
    :disabled="disabled"
    @update:checked="emit('update:checked', $event)"
    data-slot="dropdown-menu-checkbox-item"
    :class="[
      'relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      $props.class
    ]"
  >
    <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <Check class="w-4 h-4" />
      </DropdownMenuItemIndicator>
    </span>

    <slot />
  </DropdownMenuCheckboxItem>
</template>
