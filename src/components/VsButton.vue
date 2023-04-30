<template>
	<button :class="[{'primary': props.primary}]"><slot></slot></button>
</template>

<script setup lang="ts">
  import { defineProps, withDefaults } from "vue";

  interface Props {
  color?: string;
  danger?: boolean;
  success?: boolean;
  warn?: boolean;
  dark?: boolean;
  primary?: boolean;
  active?: boolean;
  ripple?: string | null;
  activeDisabled?: boolean;
  icon?: boolean;
  circle?: boolean;
  square?: boolean;
  loading?: boolean;
  upload?: boolean;
  block?: boolean;
  animate?: boolean;
  animationType?: string;
  animateInactive?: boolean;
  flat?: boolean;
  border?: boolean;
  gradient?: boolean;
  relief?: boolean;
  transparent?: boolean;
  shadow?: boolean;
  floating?: boolean;
  to?: Record<string, string> | string | null;
  href?: string | null;
  blank?: boolean;
}

	const props = withDefaults(defineProps<Props>(), {
    color: "default",
  danger: false,
  success: false,
  warn: false,
  dark: false,
  primary: false,
  ripple: "",
  active: false,
  activeDisabled: false,
  flat: false,
  border: false,
  gradient: false,
  relief: false,
  transparent: false,
  shadow: false,
  floating: false,
  icon: false,
  circle: false,
  square: false,
  loading: false,
  upload: false,
  block: false,
  animationType: "",
  animateInactive: false,
  to: null,
  href: null,
  blank: false,
  });
</script>