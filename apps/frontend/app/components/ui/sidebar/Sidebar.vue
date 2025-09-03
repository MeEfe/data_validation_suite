<script setup lang="ts">
defineProps<{
  collapsed?: boolean;
}>();
</script>

<template>
  <aside
    class="fixed left-0 top-0 h-screen border-r border-border bg-background text-foreground flex flex-col transition-all duration-300"
    :class="collapsed ? 'w-15' : 'w-64'"
  >
    <slot />
  </aside>
</template>
