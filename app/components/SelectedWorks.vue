<template>
  <section id="projects" class="section-light py-24 relative">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-block mb-4">
          <!-- Temple Icon -->
          <svg class="w-16 h-12 mx-auto text-dark/60" viewBox="0 0 64 48" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M8 44h48M12 44V20M52 44V20M8 20h48M12 20L32 8L52 20"/>
            <rect x="20" y="28" width="8" height="16" fill="none"/>
            <rect x="36" y="28" width="8" height="16" fill="none"/>
          </svg>
        </div>
        <h2 
          ref="titleRef"
          class="font-cinzel-decorative text-4xl md:text-5xl tracking-wider text-dark mb-4"
          :style="{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease'
          }"
        >
          SELECTED WORKS
        </h2>
      </div>

      <!-- Projects Grid -->
      <div ref="projectsRef" class="grid md:grid-cols-2 gap-12">
        <div 
          v-for="(project, index) in projects"
          :key="index"
          class="group"
          :style="{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: `all 0.6s ease ${index * 200}ms`
          }"
        >
          <!-- Project Image -->
          <div class="relative overflow-hidden rounded-lg mb-6 bg-gradient-to-br aspect-video border border-dark/5 shadow-inner" :class="project.gradientClass">
            <div class="absolute inset-0 flex items-center justify-center">
              <!-- Project Visual -->
              <img 
                v-if="project.useImage" 
                :src="project.imageSrc" 
                :alt="project.title"
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div v-else class="project-visual" v-html="project.visual"></div>
            </div>
            <!-- Overlay Info on Hover -->
            <div class="absolute inset-0 bg-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
              <p class="text-white/80 font-cinzel text-sm leading-relaxed">
                {{ project.hoverInfo }}
              </p>
            </div>
          </div>

          <!-- Project Info -->
          <div class="flex items-center justify-between mb-3">
             <h3 class="font-cinzel text-xl tracking-wide text-dark uppercase font-bold">
              {{ project.title }}
            </h3>
            <span class="text-[10px] text-cool-gray/80 tracking-widest uppercase border border-cool-gray/20 px-2 py-1">{{ project.dates }}</span>
          </div>
         
          <p class="text-sm text-cool-gray mb-4 leading-relaxed font-light">
             <span class="text-bronze font-bold mr-1">✦</span>
             <span v-html="project.description"></span>
          </p>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span 
              v-for="tech in project.tech"
              :key="tech"
              class="px-2 py-1 text-[10px] tracking-wider uppercase border border-dark/10 text-dark/60 bg-white"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Links -->
          <div class="flex gap-4 pt-4 border-t border-dark/5">
            <a 
              v-if="project.github"
              :href="project.github" 
              target="_blank"
              class="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-bronze hover:text-dark transition-colors font-bold"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub <span>→</span>
            </a>
            <a 
              v-if="project.live"
              :href="project.live" 
              target="_blank"
              class="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-dark/60 hover:text-bronze transition-colors font-bold"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo <span>→</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const projectsRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  useIntersectionObserver(
    projectsRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )
})

const projects = [
  {
    title: 'ConnectExpress',
    gradientClass: 'from-[#1a2a3a] to-[#0d1520]',
    useImage: true,
    imageSrc: '/images/connect-express-graph.png',
    visual: '',
    dates: 'Oct 2024 - Dec 2024',
    description: 'Designed a <strong>smart railway route finder</strong> using <strong>machine learning</strong>. Implemented <strong>risk assessment</strong> with <strong>85% accuracy</strong> and a <strong>scalable Redis caching</strong> system handling <strong>10k+ concurrent queries</strong>.',
    hoverInfo: 'Smart railway route finder using ML & path optimization algorithms.',
    tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Python (ML)'],
    github: 'https://github.com/TechWizard9999/Connect-Express',
    live: null
  },
  {
    title: 'FarmChain',
    gradientClass: 'from-[#1a2a1a] to-[#0d150d]',
    useImage: true,
    imageSrc: '/images/farmchain-screenshot.jpg',
    visual: '',
    dates: 'Dec 2024 - Jan 2025',
    description: 'Architected a <strong>blockchain supply-chain platform</strong> with <strong>GPS tracking</strong> and <strong>on-chain verification</strong>. Designed a <strong>distributed traceability system</strong> using <strong>GraphQL</strong> and <strong>Bull (Redis queues)</strong>.',
    hoverInfo: 'Blockchain-based supply chain management with real-time verification.',
    tech: ['Next.js', 'GraphQL', 'Solidity', 'IPFS', 'Polygon', 'Redis'],
    github: 'https://github.com/TechWizard9999/Farm-Chain',
    live: 'https://farm-chain-myrepo.vercel.app/'
  }
]
</script>

<style scoped>
.project-visual {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
