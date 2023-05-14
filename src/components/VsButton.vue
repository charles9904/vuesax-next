<template>
  <vs-component is="button">
    <template #default="attrs">
      <button
        :ref="vsButton"
        :style="attrs.style"
        class="vs-button"
        :class="[
          attrs.class,
          { [`vs-button--size-${props.size}`] : !!props.size},
          { [`vs-button--active`] : !!props.active },
          { [`vs-button--active-disabled`] : !!props.activeDisabled },
          { [`vs-button--icon`] : !!props.icon },
          { [`vs-button--circle`] : !!props.circle },
          { [`vs-button--square`] : !!props.square },
          { [`vs-button--loading`] : !!props.loading },
          { [`vs-button--upload`] : !!props.upload },
          { [`vs-button--block`] : !!props.block },
          { [`vs-button--animate`] : !!$slots.animate },
          { [`vs-button--animate-${props.animationType}`] : !!props.animationType },
          { [`vs-button--animate-inactive`] : !!props.animateInactive },
          { [`vs-button--flat`] : !!props.flat },
          { [`vs-button--border`] : !!props.border },
          { [`vs-button--gradient`] : !!props.gradient },
          { [`vs-button--relief`] : !!props.relief },
          { [`vs-button--transparent`] : !!props.transparent },
          { [`vs-button--shadow`] : !!props.shadow },
          { [`vs-button--floating`] : !!props.floating },
          { [`vs-button--default`] :
            !props.flat &&
            !props.border &&
            !props.gradient &&
            !props.relief &&
            !props.transparent &&
            !props.shadow &&
            !props.floating
          },
        ]"
        :click="onClick"
        :on-mousedown="(e) => onMouseDown(e, attrs.props.color)"
      >
        <div class="vs-button__content">
          <slot />
        </div>
        <div v-if="$slots.animate" class="vs-button__animate" :class="`vs-button__animate--${props.animationType}`" />
        <div v-if="props.loading" class="vs-button__loading" />
      </button>
    </template>
  </vs-component>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, ref, defineEmits } from 'vue'
import { useRouter } from 'vue-router'
import VsComponent from './baseComponent.vue'
import ripple, { rippleCut, rippleReverse } from '@/utils/ripple'

const emit = defineEmits(['click'])

const router = useRouter()
const props = withDefaults(defineProps<{
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
  size?: string | null;
  to?: Record<string, string> | string | null;
  href?: string | null;
  blank?: boolean;
}>(), {
  ripple: '',
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
  animationType: '',
  animateInactive: false,
  to: null,
  href: null,
  blank: false,
  size: null
})
const vsButton = ref()

const onMouseDown = (evt: MouseEvent, color: string) => {
  if (props.ripple === 'reverse') {
    rippleReverse(evt)
  } else if (props.ripple === 'cut') {
    rippleCut(evt)
  } else if (props.flat) {
    ripple(
      evt,
      (color || 'primary') &&
                !props.active &&
                document.activeElement !== vsButton.value
        ? 'inherit'
        : null,
      props.flat && !props.active && document.activeElement !== vsButton.value
    )
  } else {
    ripple(
      evt,
      null,
      false
    )
  }
}

const onClick = (evt: EventTarget) => {
  if (props.to) {
    router.push(props.to)
  } else if (props.href) {
    window.open(props.href, (props.blank && '_blank') || '_self')
    console.log(props.blank && '_self')
  }

  emit('click', evt)
}
</script>
