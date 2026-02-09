<template>
  <transition name="fade">
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-content">
        <!-- Decorative top line -->
        <div class="loading-line loading-line-top" :class="{ 'animate': animateIn }"></div>
        
        <!-- Subtitle -->
        <p class="loading-subtitle">
          <span 
            v-for="(letter, index) in 'THE INNER'.split('')"
            :key="'sub-' + index"
            class="loading-letter"
            :style="{ animationDelay: `${index * 60}ms` }"
            :class="{ 'animate': animateIn }"
          >{{ letter === ' ' ? '\u00A0' : letter }}</span>
        </p>

        <!-- Main Title -->
        <h1 class="loading-title">
          <span 
            v-for="(letter, index) in 'CITADEL'.split('')"
            :key="'title-' + index"
            class="loading-letter"
            :style="{ animationDelay: `${index * 80 + 400}ms` }"
            :class="{ 'animate': animateIn }"
          >{{ letter }}</span>
        </h1>

        <!-- Bronze divider -->
        <div class="loading-divider" :class="{ 'animate': animateIn }"></div>

        <!-- Loading indicator -->
        <div class="loading-dots">
          <span class="dot" :style="{ animationDelay: '0ms' }"></span>
          <span class="dot" :style="{ animationDelay: '200ms' }"></span>
          <span class="dot" :style="{ animationDelay: '400ms' }"></span>
        </div>

        <!-- Decorative bottom line -->
        <div class="loading-line loading-line-bottom" :class="{ 'animate': animateIn }"></div>
      </div>

      <!-- Floating particles -->
      <div class="particles">
        <div v-for="i in 6" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)
const animateIn = ref(false)

const emit = defineEmits(['loaded'])

onMounted(() => {
  setTimeout(() => {
    animateIn.value = true
  }, 100)

  setTimeout(() => {
    isLoading.value = false
    emit('loaded')
  }, 2500)
})

const getParticleStyle = (index: number) => {
  const positions = [
    { top: '20%', left: '15%' },
    { top: '30%', right: '20%' },
    { top: '60%', left: '25%' },
    { top: '70%', right: '15%' },
    { top: '40%', left: '10%' },
    { top: '80%', right: '30%' }
  ]
  return {
    ...positions[index - 1],
    animationDelay: `${index * 200}ms`
  }
}
</script>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: #101010;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.loading-content {
  text-align: center;
  position: relative;
}

.loading-subtitle {
  font-family: 'Cinzel', serif;
  font-size: 0.75rem;
  letter-spacing: 0.5em;
  color: #9CA3AF;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.loading-title {
  font-family: 'Cinzel Decorative', serif;
  font-size: 3rem;
  letter-spacing: 0.3em;
  color: white;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .loading-title {
    font-size: 5rem;
  }
}

.loading-letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(-30px);
  transition: all 0.5s ease;
}

.loading-letter.animate {
  opacity: 1;
  transform: translateY(0);
}

.loading-divider {
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #CD7F32, transparent);
  margin: 0 auto 2rem;
  transition: width 1s ease 0.8s;
}

.loading-divider.animate {
  width: 8rem;
}

.loading-line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 0;
  width: 1px;
  background: linear-gradient(180deg, transparent, rgba(205, 127, 50, 0.3), transparent);
  transition: height 1s ease 0.5s;
}

.loading-line-top {
  bottom: 100%;
  margin-bottom: 3rem;
}

.loading-line-bottom {
  top: 100%;
  margin-top: 3rem;
}

.loading-line.animate {
  height: 100px;
}

.loading-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.dot {
  width: 6px;
  height: 6px;
  background: #CD7F32;
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
  opacity: 0.3;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(205, 127, 50, 0.4);
  border-radius: 50%;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-20px) scale(1.2);
    opacity: 0.8;
  }
}

.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
}
</style>
