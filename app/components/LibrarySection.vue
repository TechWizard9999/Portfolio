<template>
  <section id="library" class="section-dark py-24 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Title with letter animation -->
      <h2 class="heading-section text-center mb-4">
        <span 
          v-for="(letter, index) in 'THE LIBRARY'.split('')"
          :key="index"
          class="inline-block"
          :style="{ 
            animationDelay: `${index * 50}ms`,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transition: `all 0.5s ease ${index * 50}ms`
          }"
        >{{ letter === ' ' ? '&nbsp;' : letter }}</span>
      </h2>
      <!-- Subtitle -->
      <p class="text-center text-bronze/80 font-cinzel text-sm tracking-[0.3em] uppercase mb-2">
        Books I Love
      </p>
      <div class="divider-bronze my-8"></div>
    </div>

    <!-- Horizontal Scroll Container -->
    <div 
      ref="libraryRef"
      class="flex gap-12 overflow-x-scroll overflow-y-visible no-scrollbar px-6 pb-12 snap-x snap-mandatory mt-16"
    >
      <div
        v-for="(book, index) in books"
        :key="index"
        class="flex-shrink-0 w-[280px] snap-start group pt-8"
        :style="{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
          transition: `all 0.6s ease ${index * 100 + 300}ms`
        }"
      >
        <!-- Book Card -->
        <div class="relative h-[400px] bg-[#1a1a1a] chiseled-border p-8 flex flex-col justify-between shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
          <!-- Left accent line -->
          <div class="border-l-4 border-bronze/50 h-full absolute left-2 top-0"></div>

          <!-- Book Title -->
          <h4 class="font-cinzel-decorative text-2xl text-white leading-tight" v-html="book.title"></h4>

          <!-- Author & Description -->
          <div>
            <p class="text-[10px] text-bronze tracking-[0.3em] uppercase mb-1">{{ book.author }}</p>
            <p class="text-[10px] text-gray-500 font-light">{{ book.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const libraryRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  useIntersectionObserver(
    libraryRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )
})

const books = [
  {
    title: 'MEDITATIONS',
    author: 'Marcus Aurelius',
    description: 'Timeless stoic wisdom.'
  },
  {
    title: 'LETTERS<br>FROM A STOIC',
    author: 'Seneca',
    description: 'Practical wisdom for daily life.'
  },
  {
    title: 'BOOK<br>OF FIVE RINGS',
    author: 'Miyamoto Musashi',
    description: 'Strategy, tactics, and philosophy.'
  },
  {
    title: 'ATOMIC<br>HABITS',
    author: 'James Clear',
    description: 'Tiny changes, remarkable results.'
  },
  {
    title: 'THE<br>ART OF WAR',
    author: 'Sun Tzu',
    description: 'Ancient strategy for modern conflict.'
  }
]
</script>

<style scoped>
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.chiseled-border {
  border: 1px solid rgba(205, 127, 50, 0.2);
  box-shadow: 
    inset 2px 2px 4px rgba(255, 255, 255, 0.05),
    inset -2px -2px 4px rgba(0, 0, 0, 0.3),
    0 10px 40px rgba(0, 0, 0, 0.5);
}
</style>
