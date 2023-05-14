<template>
  <transition name="loading">
    <div class="vs-loading" :class="[
      `vs-loading--${props.type || 'default'}`,
      { 'vs-loading--target': !!props.target },
      { 'vs-loading--background': !!props.background }
    ]" :style="`height: ${size}; width: ${size};`">
      <div class="vs-loading__load" :style="{ transform: `scale(${props.scale})` }">
        <div class="vs-loading__load__animation">
          <div class="vs-loading__load__percent">{{ props.percent }}</div>
          <div v-for="i in 3" :key="i" :class="`vs-loading__load__animation__${i}`"></div>
        </div>
        <div class="vs-loading__load__text" v-if="props.text"></div>
      </div>
      <div class="vs-loading__progress" v-if="props.progress">
        <div class="vs-loading__progress__bar" :style="{ width: `${props.progress}%` }"></div>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{
  text: string | null;
  type: string;
  color: string | null;
  background: string | null;
  opacity: string | null;
  percent: string | null;
  progress: string | null;
  scale: string | null;
  target: any;
  isVisible: boolean;
  size: string;
}>(), {
  size: "100%",
  text: null,
  type: 'default',
  color: null,
  background: null,
  opacity: null,
  percent: null,
  progress: null,
  scale: null,
  target: null,
  isVisible: true,
})

/* watch(() => props.isVisible, () => {
    nextTick(() => {
      setColor('color', props.color, props.$el)
      setColor('background', props.background, props.$el)
      if(props.opacity) {
        setVar('opacity', props.opacity, props.$el)
      }
    })
}) */
</script>