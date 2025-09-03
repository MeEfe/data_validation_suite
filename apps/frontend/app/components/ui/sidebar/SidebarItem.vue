<script setup lang="ts">
import { useRoute } from "vue-router";

defineProps<{
  to: string;
}>();

const route = useRoute();
</script>

<template>
  <NuxtLink
    :to="to"
    class="block rounded-lg px-3 py-2 transition-colors"
    :class="[route.path === to ? 'bg-accent text-foreground' : 'hover:bg-accent']"
  >
    <slot />
  </NuxtLink>
</template>
