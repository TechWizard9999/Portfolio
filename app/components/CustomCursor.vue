<template>
  <div
    v-if="enabled && hasMoved"
    class="custom-cursor"
    :style="{ transform: `translate3d(${cursorX}px, ${cursorY}px, 0)` }"
    aria-hidden="true"
  >
    <span class="cursor-ring"></span>
    <span class="cursor-dot"></span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const enabled = ref(false)
const hasMoved = ref(false)
const cursorX = ref(0)
const cursorY = ref(0)

const updateCursor = (event: PointerEvent) => {
  cursorX.value = event.clientX
  cursorY.value = event.clientY
  hasMoved.value = true
}

onMounted(() => {
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!hasFinePointer || prefersReducedMotion) {
    return
  }

  enabled.value = true
  document.body.classList.add('has-custom-cursor')
  window.addEventListener('pointermove', updateCursor, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('pointermove', updateCursor)
  document.body.classList.remove('has-custom-cursor')
})
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 32px;
  height: 32px;
  margin: -16px 0 0 -16px;
  pointer-events: none;
  will-change: transform;
}

.cursor-ring {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(121, 192, 255, 0.8);
  border-radius: 50%;
  box-shadow: 0 0 18px rgba(88, 166, 255, 0.16);
}

.cursor-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #79c0ff;
  transform: translate(-50%, -50%);
}
</style>
