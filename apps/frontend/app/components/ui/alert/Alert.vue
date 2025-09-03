<script setup lang="ts">
interface Props {
  variant?: "default" | "destructive";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default"
});

const variantClasses: Record<string, string> = {
  default: "bg-muted text-foreground",
  destructive: "bg-destructive/15 text-destructive border border-destructive/50"
};
</script>

<template>
  <div :class="`rounded-md p-4 text-sm ${variantClasses[props.variant]}`">
    <slot />
  </div>
</template>
