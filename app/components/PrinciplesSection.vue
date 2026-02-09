<template>
  <section id="principles" class="section-light py-24 relative overflow-hidden">
    <!-- Marble Texture Background -->
    <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/white-marble.png')]"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 
          class="font-cinzel-decorative text-4xl md:text-5xl tracking-wider text-dark mb-4"
          :style="{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease'
          }"
        >
          ACHIEVEMENTS
        </h2>
        <p class="font-cinzel text-sm text-bronze tracking-[0.3em] uppercase">
          AMOR FATI — Love of Fate
        </p>
      </div>

      <!-- Achievements Grid -->
      <div ref="principlesRef" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- CodeForces -->
        <div 
          class="achievement-card group"
          :style="{ animationDelay: '0ms' }"
          :class="{ 'animate-in': isVisible }"
        >
          <div class="text-4xl text-bronze/20 absolute top-4 right-4 group-hover:scale-110 transition-transform">
            <svg class="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M9.5 3h5v18h-5V3zm-7 8h5v10h-5V11zm14-4h5v14h-5V7z"/></svg>
          </div>
          <h3 class="font-cinzel text-lg font-bold text-dark mb-2">CodeForces Specialist</h3>
          <p class="text-bronze font-bold text-xl mb-2">Max Rating: 1494</p>
          <p class="text-cool-gray text-sm">Consistent competitive programmer tackling complex algorithmic challenges.</p>
        </div>

        <!-- CodeChef -->
        <div 
          class="achievement-card group"
          :style="{ animationDelay: '100ms' }"
          :class="{ 'animate-in': isVisible }"
        >
          <div class="text-4xl text-bronze/20 absolute top-4 right-4 group-hover:scale-110 transition-transform">
            <svg class="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <h3 class="font-cinzel text-lg font-bold text-dark mb-2">CodeChef 4-Star</h3>
          <p class="text-bronze font-bold text-xl mb-2">Max Rating: 1819</p>
          <p class="text-cool-gray text-sm">Ranked among top competitors globally. Global Rank 12 & 239 in Starters.</p>
        </div>

        <!-- Amazon ML -->
        <div 
          class="achievement-card group"
          :style="{ animationDelay: '200ms' }"
          :class="{ 'animate-in': isVisible }"
        >
          <div class="text-4xl text-bronze/20 absolute top-4 right-4 group-hover:scale-110 transition-transform">
            <svg class="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          </div>
          <h3 class="font-cinzel text-lg font-bold text-dark mb-2">Amazon ML School</h3>
          <p class="text-bronze font-bold text-xl mb-2">Selected Mentee</p>
          <p class="text-cool-gray text-sm">Selected for Amazon ML Summer School (Jul 2024), selected again in 2025.</p>
        </div>

        <!-- Hackathons -->
        <div 
          class="achievement-card group md:col-span-2 lg:col-span-3"
          :style="{ animationDelay: '300ms' }"
          :class="{ 'animate-in': isVisible }"
        >
          <h3 class="font-cinzel text-lg font-bold text-dark mb-6 text-center border-b border-dark/10 pb-4">Hackathon Victories</h3>
          <div class="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div>
              <p class="text-bronze font-bold text-xs uppercase mb-1">DU Hacks</p>
              <p class="text-dark font-cinzel text-sm">Winner 🏆</p>
            </div>
            <div>
              <p class="text-bronze font-bold text-xs uppercase mb-1">Rise In</p>
              <p class="text-dark font-cinzel text-sm">Winner 🏆</p>
            </div>
            <div>
              <p class="text-bronze font-bold text-xs uppercase mb-1">SuperMove DAppathon</p>
              <p class="text-dark font-cinzel text-sm">Winner</p>
            </div>
            <div>
              <p class="text-bronze font-bold text-xs uppercase mb-1">Hack-O-Fiesta V4.0</p>
              <p class="text-dark font-cinzel text-sm">2nd Place</p>
            </div>
            <div>
              <p class="text-bronze font-bold text-xs uppercase mb-1">Dapp-Thon</p>
              <p class="text-dark font-cinzel text-sm">Finalist</p>
            </div>
            <div>
              <p class="text-bronze font-bold text-xs uppercase mb-1">Flipkart Grid 6.0</p>
              <p class="text-dark font-cinzel text-sm">Semi-Finalist</p>
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
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(30px);
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.05), 
    0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

.achievement-card:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.05), 
    0 10px 10px -5px rgba(0, 0, 0, 0.02);
  border-color: rgba(205, 127, 50, 0.3);
}

.animate-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
