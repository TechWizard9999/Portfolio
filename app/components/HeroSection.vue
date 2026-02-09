<template>
  <section class="section-dark min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 flex items-center justify-center opacity-10">
      <div class="w-96 h-96 border border-bronze/30 rounded-full"></div>
      <div class="absolute w-72 h-72 border border-bronze/20 rounded-full"></div>
      <div class="absolute w-48 h-48 border border-bronze/10 rounded-full"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center max-w-4xl">
      <!-- Decorative subtitle with letter animation -->
      <p class="font-cinzel text-xs md:text-sm tracking-super-wide text-cool-gray mb-8 opacity-70">
        <span 
          v-for="(letter, index) in 'THE INNER'.split('')"
          :key="'inner-' + index"
          class="inline-block"
          :style="{ 
            animationDelay: `${index * 80}ms`,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(-30px)',
            transition: `all 0.6s ease ${index * 80}ms`
          }"
        >{{ letter === ' ' ? '\u00A0' : letter }}</span>
      </p>

      <!-- Main Title with letter animation -->
      <h2 class="heading-decorative text-white mb-4">
        <span 
          v-for="(letter, index) in 'CITADEL'.split('')"
          :key="'citadel-' + index"
          class="inline-block"
          :style="{ 
            animationDelay: `${index * 100 + 500}ms`,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(-40px)',
            transition: `all 0.7s ease ${index * 100 + 500}ms`
          }"
        >{{ letter }}</span>
      </h2>

      <div 
        class="divider-bronze my-8"
        :style="{ 
          opacity: loaded ? 1 : 0,
          width: loaded ? '6rem' : '0',
          transition: 'all 0.8s ease 1.2s'
        }"
      ></div>

      <!-- Name with letter animation -->
      <h1 class="font-cinzel-decorative text-5xl md:text-7xl lg:text-8xl tracking-wide text-white mb-4">
        <span 
          v-for="(letter, index) in 'Roopesh S'.split('')"
          :key="'name-' + index"
          class="inline-block"
          :style="{ 
            animationDelay: `${index * 60 + 1400}ms`,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: `all 0.5s ease ${index * 60 + 1400}ms`
          }"
        >{{ letter === ' ' ? '\u00A0' : letter }}</span>
      </h1>

      <!-- Role -->
      <p 
        class="font-cinzel text-lg md:text-xl tracking-widest text-bronze uppercase mb-12"
        :style="{ 
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease 2s'
        }"
      >
        Software Engineer
      </p>

      <!-- Social Links -->
      <div 
        class="flex items-center justify-center gap-8 mb-16"
        :style="{ 
          opacity: loaded ? 1 : 0,
          transition: 'all 0.6s ease 2.2s'
        }"
      >
        <a
          href="https://github.com/TechWizard9999"
          target="_blank"
          rel="noopener noreferrer"
          class="link-bronze font-cinzel text-sm tracking-wider flex items-center gap-2"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/s-roopesh-39934229a/"
          target="_blank"
          rel="noopener noreferrer"
          class="link-bronze font-cinzel text-sm tracking-wider flex items-center gap-2"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
        <a
          href="https://leetcode.com/u/doplGngr08/"
          target="_blank"
          rel="noopener noreferrer"
          class="link-bronze font-cinzel text-sm tracking-wider flex items-center gap-2"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.12 1.632l4.293 4.589a1.001 1.001 0 0 0 1.449-.043l4.29-4.589a5.88 5.88 0 0 0 1.12-1.632 5.828 5.828 0 0 0 .349-1.017 5.6 5.6 0 0 0-.063-2.362 5.35 5.35 0 0 0-.125-.513 5.266 5.266 0 0 0-1.209-2.104l-3.854-4.126-5.406-5.788A1.374 1.374 0 0 0 13.483 0zm2.612 12.627a2.82 2.82 0 0 1-.623.817l-2.988 3.195-2.988-3.195a2.82 2.82 0 0 1-.623-.817 2.72 2.72 0 0 1-.164-.494 2.628 2.628 0 0 1 .03-1.112 2.508 2.508 0 0 1 .574-1 2.528 2.528 0 0 1 .964-.653l2.207-.91 2.207.91c.372.154.7.378.964.653.264.275.462.606.574 1 .092.358.108.737.03 1.112a2.72 2.72 0 0 1-.164.494z"/>
          </svg>
          LeetCode
        </a>
        <a
          href="/resume.pdf"
          download="Roopesh_S_Resume.pdf"
          class="link-bronze font-cinzel text-sm tracking-wider flex items-center gap-2"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM6 20V4h6v6h6v10H6z"/>
            <path d="M12 18l4-4h-3v-4h-2v4H8l4 4z"/>
          </svg>
          Resume
        </a>
      </div>

      <!-- Descend Button -->
      <a
        href="#experience"
        class="btn-primary inline-block"
        :style="{ 
          opacity: loaded ? 1 : 0,
          transition: 'all 0.6s ease 2.4s'
        }"
      >
        Descend
      </a>
    </div>

    <!-- Floating particles decoration -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-1 h-1 bg-bronze/40 rounded-full animate-float"></div>
      <div class="absolute top-1/3 right-1/4 w-2 h-2 bg-bronze/30 rounded-full animate-float animate-delay-200"></div>
      <div class="absolute bottom-1/4 left-1/3 w-1 h-1 bg-bronze/50 rounded-full animate-float animate-delay-400"></div>
      <div class="absolute top-1/2 right-1/3 w-1 h-1 bg-bronze/20 rounded-full animate-float animate-delay-600"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  contentLoaded: boolean
}>()

const loaded = ref(false)

watch(() => props.contentLoaded, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      loaded.value = true
    }, 100)
  }
})
</script>
