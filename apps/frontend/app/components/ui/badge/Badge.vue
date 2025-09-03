<script setup lang="ts">
interface Props {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default"
});

const variantClasses: Record<string, string> = {
  default: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  destructive: "bg-red-100 text-red-700",
  outline: "border border-input"
};
</script>

<template>
  <span
    :class="`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variantClasses[props.variant]}`"
  >
    <slot />
  </span>
</template>
