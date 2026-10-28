<template>
  <section id="principles" class="section-dark relative overflow-hidden py-24">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 
          class="mb-4 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl"
          :style="{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease'
          }"
        >
          ACHIEVEMENTS
        </h2>
        <p class="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          Engineering · Open source · Competition
        </p>
      </div>

      <!-- Achievements Grid -->
      <div ref="principlesRef" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        <!-- CodeForces -->
        <div 
          class="achievement-card group"
          :style="{ animationDelay: '0ms' }"
          :class="{ 'animate-in': isVisible }"
        >
          <div class="absolute right-4 top-4 text-4xl text-accent/20 transition-transform group-hover:scale-110">
            <svg class="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M9.5 3h5v18h-5V3zm-7 8h5v10h-5V11zm14-4h5v14h-5V7z"/></svg>
          </div>
          <h3 class="mb-2 font-display text-lg font-semibold text-white">CodeForces Specialist</h3>
          <p class="mb-2 text-xl font-semibold text-accent">Max Rating: 1518</p>
          <p class="text-cool-gray text-sm">Rated Specialist in competitive programming.</p>
        </div>

        <!-- CodeChef -->
        <div 
          class="achievement-card group"
          :style="{ animationDelay: '100ms' }"
          :class="{ 'animate-in': isVisible }"
        >
          <div class="absolute right-4 top-4 text-4xl text-accent/20 transition-transform group-hover:scale-110">
            <svg class="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <h3 class="mb-2 font-display text-lg font-semibold text-white">CodeChef 4-Star</h3>
          <p class="mb-2 text-xl font-semibold text-accent">Max Rating: 1852</p>
          <p class="text-sm text-cool-gray">Four-star competitive programming rating.</p>
        </div>

        <!-- Amazon ML -->
        <div 
          class="achievement-card group"
          :style="{ animationDelay: '200ms' }"
          :class="{ 'animate-in': isVisible }"
        >
          <div class="absolute right-4 top-4 text-4xl text-accent/20 transition-transform group-hover:scale-110">
            <svg class="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          </div>
          <h3 class="mb-2 font-display text-lg font-semibold text-white">Amazon ML School</h3>
          <p class="mb-2 text-xl font-semibold text-accent">Selected Mentee</p>
          <p class="text-sm text-cool-gray">Selected for the Amazon ML Summer School in consecutive years: 2024 and 2025.</p>
        </div>

        <!-- Hackathons -->
        <div 
          class="achievement-card group md:col-span-2 lg:col-span-3"
          :style="{ animationDelay: '300ms' }"
          :class="{ 'animate-in': isVisible }"
        >
          <h3 class="mb-6 border-b border-white/10 pb-4 text-center font-display text-lg font-semibold text-white">Hackathon Victories</h3>
          <div class="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            <div>
              <p class="mb-1 text-xs font-semibold uppercase text-accent">SuperMove Tour DAppathon</p>
              <p class="font-display text-sm text-white">Winner · Meta EDU on Aptos</p>
            </div>
            <div>
              <p class="mb-1 text-xs font-semibold uppercase text-accent">HackOdisha 3.0</p>
              <p class="font-display text-sm text-white">Runner-up</p>
            </div>
            <div>
              <p class="mb-1 text-xs font-semibold uppercase text-accent">Hack-O-Fiesta V4.0</p>
              <p class="font-display text-sm text-white">Second Runner-up</p>
            </div>
            <div>
              <p class="mb-1 text-xs font-semibold uppercase text-accent">Dapp-Thon</p>
              <p class="font-display text-sm text-white">Finalist · 1,000+ participants</p>
            </div>
            <div>
              <p class="mb-1 text-xs font-semibold uppercase text-accent">Flipkart Grid 6.0</p>
              <p class="font-display text-sm text-white">Semi-finalist</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const principlesRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  useIntersectionObserver(
    principlesRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )
})
</script>

<style scoped>
.achievement-card {
  background: rgba(22, 27, 34, 0.8);
  border: 1px solid rgba(139, 148, 158, 0.14);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
  opacity: 0;
  transform: translateY(30px);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.16);
}

.achievement-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.28);
  border-color: rgba(88, 166, 255, 0.35);
}

.animate-in {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .achievement-card {
    transition: none;
  }
}
</style>
