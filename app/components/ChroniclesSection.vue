<template>
  <section id="experience" class="section-dark relative py-24">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-block mb-4">
          <svg class="mx-auto h-12 w-12 text-accent/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        </div>
        <h2 
          class="mb-4 font-display text-4xl tracking-tight text-white md:text-5xl"
          :style="{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease'
          }"
        >
          EXPERIENCE
        </h2>
      </div>

      <div ref="chroniclesRef" class="relative">
        <div class="absolute bottom-0 left-6 top-0 hidden w-px bg-accent/20 md:block"></div>
        <div class="md:pl-24 space-y-16">
          <div 
            v-for="(exp, index) in experiences"
            :key="index"
            class="group relative"
            :style="{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: `all 0.6s ease ${index * 200}ms`
            }"
          >
            <span class="absolute -left-20 top-2 hidden h-3 w-3 rounded-full border-2 border-accent bg-dark md:block"></span>
            <div class="pointer-events-none absolute -inset-y-2 inset-x-0 -z-10 rounded-xl bg-accent/[0.035] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>

            <!-- Company & Date -->
            <div class="flex flex-wrap items-start justify-between mb-1">
              <h3 class="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {{ exp.company }}
              </h3>
              <span class="font-mono text-xs text-accent tracking-wide">
                {{ exp.date }}
              </span>
            </div>

            <!-- Role -->
            <p class="mb-6 font-mono text-xs uppercase tracking-[0.12em] text-cool-gray">
              {{ exp.title }}
            </p>

            <!-- Description Points -->
            <ul class="space-y-3 mb-6">
              <li 
                v-for="(point, pIndex) in exp.points"
                :key="pIndex"
                class="flex items-start gap-3 text-sm leading-relaxed text-[#c9d1d9]"
              >
                <span class="mt-1.5 text-[10px] text-accent">•</span>
                <span v-html="point"></span>
              </li>
            </ul>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in exp.tech"
                :key="tech"
                class="rounded-full border border-white/10 bg-dark-secondary px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-[#c9d1d9]"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Education -->
          <div 
            class="group relative border-t border-white/10 pt-8"
            :style="{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'all 0.6s ease 400ms'
            }"
          >
            <!-- Hover Highlight Background -->
            <div class="pointer-events-none absolute -inset-y-2 inset-x-0 -z-10 rounded-xl bg-accent/[0.035] opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>

            <div class="flex flex-wrap items-start justify-between mb-2">
              <h3 class="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                Education
              </h3>
              <span class="font-mono text-xs tracking-wide text-cool-gray">
                Nov 2022 — June 2026
              </span>
            </div>

            <div class="mb-4 flex flex-wrap items-center gap-2">
              <p class="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                Indian Institute of Information Technology, Lucknow
              </p>
              <span class="text-cool-gray">•</span>
              <p class="font-mono text-xs uppercase tracking-wide text-cool-gray">Uttar Pradesh, India</p>
            </div>

            <ul class="space-y-3 mb-6">
              <li class="flex items-start gap-3 text-sm leading-relaxed text-[#c9d1d9]">
                <span class="mt-1.5 text-[10px] text-accent">•</span>
                <span><strong>Bachelor of Technology</strong> — Computer Science and Business</span>
              </li>
              <li class="flex items-start gap-3 text-sm leading-relaxed text-[#c9d1d9]">
                <span class="mt-1.5 text-[10px] text-accent">•</span>
                <span><strong>CGPA: 8.5</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

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
    title: 'Software Engineer · Full-time',
    company: 'Microsoft',
    location: 'Noida, India',
    date: 'Aug 2026 — Present',
    points: [
      'Built <strong>TestIQ</strong>, an AI-powered natural-language testing framework using LangGraph, LangChain, and Playwright. It runs daily CI/CD tests across three productivity apps and reduced manual testing effort by <strong>80%</strong>.',
      'Developed <strong>BugPilot</strong>, an autonomous agent for reproducing, fixing, and validating UI bugs. Analyzed <strong>600+ bugs</strong>, delivered <strong>450+ merged PRs</strong>, and added video analysis for flicker and jitter detection.'
    ],
    tech: ['LangGraph', 'LangChain', 'Playwright', 'CI/CD']
  },
  {
    title: 'Software Engineering Intern',
    company: 'ACKO General Insurance',
    location: 'Bangalore, India',
    date: 'Dec 2025 — Jul 2026',
    points: [
      'Extended the claims workflow to support <strong>General Insurance</strong> and <strong>Life Insurance</strong>, and structured frontend state with Redux.',
      'Implemented rate limiting at the application level and <strong>KONG Gateway</strong> to prevent API abuse and improve system reliability.',
      'Developed a KYC and fraud-detection flow with the <strong>Spectra API</strong>, improving classification accuracy by <strong>27%</strong>.'
    ],
    tech: ['Node.js', 'Redux', 'KONG Gateway', 'Spectra API']
  },
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
]
</script>
