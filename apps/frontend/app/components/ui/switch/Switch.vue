<script setup lang="ts">
import { computed } from "vue";

interface Props {
  modelValue?: boolean;
  disabled?: boolean;
  customClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  disabled: false,
  customClass: ""
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const toggle = () => {
  if (!props.disabled) {
    emit("update:modelValue", !props.modelValue);
  }
};

const rootClasses = computed(() => [
  "inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50",
  props.modelValue ? "bg-primary" : "bg-input",
  props.customClass
]);

const thumbClasses = computed(() => [
  "pointer-events-none block size-4 rounded-full ring-0 transition-transform",
  props.modelValue ? "translate-x-[calc(100%-2px)] bg-primary-foreground" : "translate-x-0 bg-background"
]);
</script>

<template>
  <button
    role="switch"
    :aria-checked="props.modelValue"
    :disabled="props.disabled"
    :class="rootClasses"
    @click="toggle"
  >
    <span :class="thumbClasses" />
  </button>
</template>
