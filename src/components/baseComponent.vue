<template>
  <slot
    :class="[
      { [`vs-${is}--fff`] : props.color === '#fff' },
      { [`vs-${is}--primary`] : props.primary || !props.danger && !props.success && !props.warn && !props.dark && !props.color },
      { [`vs-${is}--danger`] : !!props.danger },
      { [`vs-${is}--warn`] : !!props.warn },
      { [`vs-${is}--success`] : !!props.success },
      { [`vs-${is}--dark`] : !!props.dark },
    ]"
    :style="{['--vs-color']: color}"
    :props="props"
  />
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue"
import { getColor } from "@/utils"

const color = ref<string>()

const props = withDefaults(defineProps<{
  color?: string;
  danger?: boolean;
  success?: boolean;
  warn?: boolean;
  dark?: boolean;
  primary?: boolean;
  active?: boolean;
  is: string;
}>(), {
  color: "default",
  danger: false,
  success: false,
  warn: false,
  dark: false,
  primary: false,
  active: false
})

// const isColorDark = computed(() => props.color === 'dark' || props.dark || componentColor.value === 'dark')
// const isColor = computed(() => !!props.color || !!props.primary || !!props.success || !!props.warn || !!props.danger || !!props.dark)

onBeforeMount(() => {
  color.value = getColor(props.color)
  console.log(
    props.danger,
    props.success,
    props.warn,
    props.dark,
    props.color,
    "!props.danger && !props.success && !props.warn && !props.dark && !props.color"
  )
})
</script>
