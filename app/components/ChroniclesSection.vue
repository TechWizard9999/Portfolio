<template>
  <section id="experience" class="section-light py-24 relative">
    <!-- Greek Key Border Top -->
    <div class="greek-key-border-top"></div>

    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-block mb-4">
          <svg class="w-12 h-12 mx-auto text-bronze/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        </div>
        <h2 
          class="font-cinzel-decorative text-4xl md:text-5xl tracking-wider text-dark mb-4"
          :style="{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease'
          }"
        >
          CHRONICLES
        </h2>
      </div>

      <!-- Timeline Container -->
      <div ref="chroniclesRef" class="relative">
        <!-- Roman Column on Left -->
        <div class="absolute left-0 top-0 bottom-0 w-16 hidden md:block">
          <div class="roman-column h-full"></div>
        </div>

        <!-- Experience Items -->
        <div class="md:pl-24 space-y-16">
          <div 
            v-for="(exp, index) in experiences"
            :key="index"
            class="relative group"
            :style="{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: `all 0.6s ease ${index * 200}ms`
            }"
          >
             <!-- Hover Highlight Background -->
            <div class="absolute -inset-6 bg-bronze/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

            <!-- Company & Date -->
            <div class="flex flex-wrap items-start justify-between mb-1">
              <h3 class="font-cinzel text-2xl md:text-3xl tracking-wide text-[#1a1a1a] uppercase font-bold">
                {{ exp.company }}
              </h3>
              <span class="font-inter text-sm text-bronze tracking-wider font-medium">
                {{ exp.date }}
              </span>
            </div>

            <!-- Role -->
            <p class="font-inter text-sm tracking-[0.15em] text-[#555] uppercase mb-6">
              {{ exp.title }}
            </p>

            <!-- Description Points -->
            <ul class="space-y-3 mb-6">
              <li 
                v-for="(point, pIndex) in exp.points"
                :key="pIndex"
                class="flex items-start gap-3 text-[#333] text-sm leading-relaxed"
              >
                <span class="text-bronze mt-1.5 text-[10px]">♦</span>
                <span v-html="point"></span>
              </li>
            </ul>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in exp.tech"
                :key="tech"
                class="px-3 py-1 text-[10px] tracking-wider uppercase border border-dark/20 text-[#333] bg-white/80 font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Education -->
          <div 
            class="relative pt-8 border-t border-bronze/20"
            :style="{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'all 0.6s ease 400ms'
            }"
          >
            <!-- Hover Highlight Background -->
            <div class="absolute -inset-6 bg-bronze/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

            <div class="flex flex-wrap items-start justify-between mb-2">
              <h3 class="font-cinzel text-xl md:text-2xl tracking-wide text-[#1a1a1a] uppercase font-semibold">
                Education
              </h3>
              <span class="font-inter text-sm text-[#4a4a4a] tracking-wider">
                Nov 2022 — Present
              </span>
            </div>

            <div class="flex items-center gap-2 mb-4">
              <p class="font-inter text-xs tracking-[0.2em] text-bronze uppercase font-bold">
                Indian Institute of Information Technology, Lucknow
              </p>
              <span class="text-[#666]">•</span>
              <p class="font-inter text-xs tracking-wider text-[#4a4a4a] uppercase">Uttar Pradesh, India</p>
            </div>

            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-3 text-[#333] text-sm leading-relaxed">
                <span class="text-bronze mt-1.5 text-[10px]">♦</span>
                <span><strong>Bachelor of Technology</strong> — Computer Science and Business</span>
              </li>
              <li class="flex items-start gap-3 text-[#333] text-sm leading-relaxed">
                <span class="text-bronze mt-1.5 text-[10px]">♦</span>
                <span><strong>CGPA: 8.40</strong></span>
              </li>
              <li class="flex items-start gap-3 text-[#333] text-sm leading-relaxed">
                <span class="text-bronze mt-1.5 text-[10px]">♦</span>
                <span>Coursework: Database Management System, Operating System, Object-Oriented Programming, Data Structures</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 text-[10px] tracking-wider uppercase border border-dark/20 text-[#333] bg-white/80 font-medium">OOPs</span>
              <span class="px-3 py-1 text-[10px] tracking-wider uppercase border border-dark/20 text-[#333] bg-white/80 font-medium">Data Structures</span>
              <span class="px-3 py-1 text-[10px] tracking-wider uppercase border border-dark/20 text-[#333] bg-white/80 font-medium">DBMS</span>
              <span class="px-3 py-1 text-[10px] tracking-wider uppercase border border-dark/20 text-[#333] bg-white/80 font-medium">Operating Systems</span>
            </div>
          </div>

          <!-- Started Journey -->
          <div 
            class="relative pt-8 border-t border-bronze/20"
            :style="{
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.6s ease 600ms'
            }"
          >
            <h3 class="font-cinzel text-xl tracking-wide text-[#1a1a1a] uppercase mb-2 font-semibold">
              Started Coding Journey
            </h3>
            <span class="font-inter text-sm text-[#4a4a4a] tracking-wider">
              NOV 2022
            </span>
            <p class="mt-4 italic text-[#444] text-sm">
              "If one does not know to which port one is sailing, no wind is favorable." — Seneca
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Greek Key Border Bottom -->
    <div class="greek-key-border-bottom"></div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const chroniclesRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  useIntersectionObserver(
    chroniclesRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )
})

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Microsoft',
    location: 'Noida, India',
    date: 'Jun 2025 — Aug 2025',
    points: [
      'Built <strong>Visualize as Table</strong> feature in PowerPoint Copilot web, enabling structured table generation from rewritten content and improving document authoring workflows.',
      'Enhanced <strong>backend services</strong> supporting Copilot rewrite flows by fixing production issues and improving request handling, contributing to a <strong>3.8% increase</strong> in rewrite feature adoption.'
    ],
    tech: ['Azure', 'C#', '.NET', 'React', 'TypeScript']
  },
  {
    title: 'Software Engineering Intern',
    company: 'ACKO General Insurance',
    location: 'Bangalore, India',
    date: 'Dec 2025 — Present',
    points: [
      'Implemented <strong>rate limiting</strong> at both <strong>application level</strong> and <strong>KONG Gateway</strong> to optimize the claims processing pipeline, prevent API abuse, and improve system reliability.',
      'Worked on the <strong>customer claims page</strong>, fixing production bugs and designing <strong>state machines</strong> for insurance workflows to automate approval-stage transitions and improve end-user experience.'
    ],
    tech: ['Node.js', 'KONG', 'State Machines', 'React']
  }
]
</script>

<style scoped>
.roman-column {
  background: linear-gradient(90deg, 
    #d4d4d4 0%, 
    #f5f5f5 20%, 
    #e8e8e8 40%, 
    #d4d4d4 60%, 
    #c4c4c4 80%, 
    #d4d4d4 100%
  );
  border-radius: 4px 4px 0 0;
  position: relative;
  box-shadow: 5px 0 15px rgba(0,0,0,0.1);
}

.roman-column::before,
.roman-column::after {
  content: '';
  position: absolute;
  left: -8px;
  right: -8px;
  height: 24px;
  background: linear-gradient(90deg, #b4b4b4 0%, #e8e8e8 20%, #d4d4d4 50%, #e8e8e8 80%, #b4b4b4 100%);
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.roman-column::before { top: 0; }
.roman-column::after { bottom: 0; }

.greek-key-border-top,
.greek-key-border-bottom {
  height: 24px;
  background-image: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 20px,
    rgba(0,0,0,0.05) 20px,
    rgba(0,0,0,0.05) 40px
  );
  position: absolute;
  left: 0;
  right: 0;
}
.greek-key-border-top { top: 0; }
.greek-key-border-bottom { bottom: 0; }
</style>
