<script setup lang="ts">
import { SelectLabel } from "radix-vue";

defineProps<{ class?: string }>();
</script>

<template>
  <SelectLabel data-slot="select-label" :class="['px-2 py-1.5 text-xs text-muted-foreground', $props.class]">
    <slot />
  </SelectLabel>
</template>
