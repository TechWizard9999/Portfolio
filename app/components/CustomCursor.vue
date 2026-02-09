<template>
  <!-- Custom Cursor -->
  <div
    ref="cursor"
    class="custom-cursor"
    :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M12 2C12 2 8 8 8 14C8 17.314 9.79 20 12 20C14.21 20 16 17.314 16 14C16 8 12 2 12 2Z" 
        fill="rgba(255, 255, 255, 0.8)"
        stroke="rgba(205, 127, 50, 0.5)"
        stroke-width="1"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cursor = ref<HTMLElement | null>(null)
const cursorX = ref(0)
const cursorY = ref(0)

const updateCursor = (e: MouseEvent) => {
  cursorX.value = e.clientX - 12
  cursorY.value = e.clientY - 12
}

onMounted(() => {
  window.addEventListener('mousemove', updateCursor)
  document.body.style.cursor = 'none'
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursor)
  document.body.style.cursor = 'auto'
})
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease-out;
  mix-blend-mode: difference;
}

.custom-cursor svg {
  filter: drop-shadow(0 0 4px rgba(205, 127, 50, 0.3));
}
</style>
