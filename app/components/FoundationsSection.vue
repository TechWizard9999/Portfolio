<template>
  <section id="skills" class="section-dark py-24 relative">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-8">
        <div class="mb-4 inline-flex h-10 items-center justify-center rounded-lg border border-accent/20 bg-accent/5 px-4 font-mono text-sm text-accent">
          &lt;/&gt;
        </div>
        <h2 
          ref="foundationsRef"
          class="mb-8 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl"
          :style="{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease'
          }"
        >
          SKILLS
        </h2>
        <p class="mx-auto max-w-2xl text-sm text-cool-gray">
          A practical toolkit for building products, backend services, and AI-powered workflows.
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="mt-12 space-y-12">
        
        <!-- Languages -->
        <div 
          :style="{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease 200ms'
          }"
        >
          <h3 class="mb-6 border-b border-white/10 pb-3 font-display text-lg font-semibold uppercase tracking-wide text-accent">Programming Languages</h3>
          <div class="flex flex-wrap gap-3">
            <span class="skill-tag">Java</span>
            <span class="skill-tag">C++</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">Rust</span>
            <span class="skill-tag">TypeScript</span>
            <span class="skill-tag">JavaScript</span>
          </div>
        </div>

        <!-- Backend & Web -->
        <div 
          :style="{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease 400ms'
          }"
        >
          <h3 class="mb-6 border-b border-white/10 pb-3 font-display text-lg font-semibold uppercase tracking-wide text-accent">Backend & Frontend</h3>
          <div class="flex flex-wrap gap-3">
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">ExpressJS</span>
            <span class="skill-tag">Java (Spring Boot)</span>
            <span class="skill-tag">ReactJS</span>
            <span class="skill-tag">Redux</span>
            <span class="skill-tag">Next.js</span>
          </div>
        </div>

        <!-- Databases & DevOps -->
        <div 
          :style="{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease 600ms'
          }"
        >
          <h3 class="mb-6 border-b border-white/10 pb-3 font-display text-lg font-semibold uppercase tracking-wide text-accent">Databases & Cache</h3>
          <div class="flex flex-wrap gap-3">
            <span class="skill-tag">MongoDB</span>
            <span class="skill-tag">MySQL</span>
            <span class="skill-tag">Redis</span>
          </div>
        </div>

        <!-- AI & Agentic Workflows -->
        <div
          :style="{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease 800ms'
          }"
        >
          <h3 class="mb-6 border-b border-white/10 pb-3 font-display text-lg font-semibold uppercase tracking-wide text-accent">AI & Agentic Workflows</h3>
          <div class="flex flex-wrap gap-3">
            <span class="skill-tag">LangGraph</span>
            <span class="skill-tag">LangChain</span>
            <span class="skill-tag">AI Agents</span>
            <span class="skill-tag">LLM Orchestration</span>
            <span class="skill-tag">Playwright</span>
          </div>
        </div>

        <!-- Tools & Platforms -->
        <div
          :style="{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease 1s'
          }"
        >
          <h3 class="mb-6 border-b border-white/10 pb-3 font-display text-lg font-semibold uppercase tracking-wide text-accent">Tools & Platforms</h3>
          <div class="flex flex-wrap gap-3">
            <span class="skill-tag">Linux</span>
            <span class="skill-tag">Git</span>
            <span class="skill-tag">CI/CD</span>
            <span class="skill-tag">KONG Gateway</span>
            <span class="skill-tag">Kibana</span>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const foundationsRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  useIntersectionObserver(
    foundationsRef,
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
.skill-tag {
  display: inline-block;
  padding: 0.55rem 1rem;
  background: rgba(22, 27, 34, 0.85);
  border: 1px solid rgba(139, 148, 158, 0.2);
  border-radius: 9999px;
  color: #c9d1d9;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  transition: border-color 180ms ease, color 180ms ease, transform 180ms ease;
}

.skill-tag:hover {
  border-color: rgba(88, 166, 255, 0.6);
  color: #79c0ff;
  transform: translateY(-2px);
}
</style>
