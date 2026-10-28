<template>
  <section id="projects" class="section-dark relative py-24 md:py-28">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Pinned on GitHub</p>
          <h2
            ref="titleRef"
            class="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl"
            :style="{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.45s ease, transform 0.45s ease'
            }"
          >
            Featured work<span class="text-accent">.</span>
          </h2>
        </div>
        <a
          href="https://github.com/TechWizard9999?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          class="link-accent inline-flex w-fit items-center gap-2 text-sm"
        >
          Browse all repositories
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div ref="projectsRef" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="project-card group overflow-hidden rounded-2xl border border-white/10 bg-dark-secondary"
          :class="{ 'is-visible': isVisible }"
          :style="{ '--project-accent': project.accent, '--project-delay': `${index * 90}ms` }"
        >
          <div class="project-cover relative flex h-52 flex-col justify-between overflow-hidden p-5 md:h-56">
            <div class="project-cover-grid pointer-events-none absolute inset-0"></div>
            <div class="relative z-10 flex items-center justify-between gap-3">
              <span class="rounded-full border border-white/10 bg-dark/70 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#c9d1d9]">
                {{ project.kind }}
              </span>
              <span class="font-mono text-xs text-cool-gray">{{ project.language }}</span>
            </div>
            <div class="relative z-10 flex items-end justify-between gap-4">
              <span class="project-mark font-display text-5xl font-semibold tracking-tight md:text-6xl">{{ project.mark }}</span>
              <span class="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-cool-gray">{{ project.category }}</span>
            </div>
          </div>

          <div class="p-6 md:p-7">
            <h3 class="mb-3 font-display text-xl font-semibold text-white md:text-2xl">
              {{ project.title }}
            </h3>
            <p class="mb-5 text-sm leading-relaxed text-cool-gray">
              {{ project.description }}
            </p>

            <div class="mb-6 flex flex-wrap gap-2">
              <span
                v-for="technology in project.technologies"
                :key="technology"
                class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] tracking-wide text-[#c9d1d9]"
              >
                {{ technology }}
              </span>
            </div>

            <a
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Open ${project.title} on GitHub`"
              class="inline-flex items-center gap-2 border-t border-white/10 pt-4 text-sm font-semibold text-accent transition-colors duration-200 hover:text-accent-light"
            >
              View on GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
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
    { threshold: 0.08 }
  )
})

const projects = [
  {
    title: 'NVIDIA DSX · NICo',
    mark: 'NICo',
    kind: 'Open-source contribution',
    category: 'AI infrastructure',
    language: 'Rust',
    accent: '#79C0FF',
    description: 'Shipped CLI features and API fixes for NVIDIA DSX’s hardware lifecycle and multitenant networking controller.',
    technologies: ['Rust', 'CLI', 'Infrastructure'],
    github: 'https://github.com/TechWizard9999/infra-controller'
  },
  {
    title: 'Jarvis',
    mark: 'J.',
    kind: 'Personal project',
    category: 'Developer automation',
    language: 'TypeScript',
    accent: '#58A6FF',
    description: 'A local workflow that investigates RTK issues, reproduces them, verifies fixes, and prepares draft pull requests.',
    technologies: ['TypeScript', 'AI agents', 'Automation'],
    github: 'https://github.com/TechWizard9999/Jarvis'
  },
  {
    title: 'PinchTab',
    mark: 'PT',
    kind: 'Open-source fork',
    category: 'Browser automation',
    language: 'Go',
    accent: '#A5D6FF',
    description: 'Contributed to a browser automation bridge for AI agents, with a Go HTTP API and multi-instance orchestration.',
    technologies: ['Go', 'HTTP API', 'Browser automation'],
    github: 'https://github.com/TechWizard9999/pinchtab'
  },
  {
    title: 'RTK',
    mark: 'RTK',
    kind: 'Open-source fork',
    category: 'Agent tooling',
    language: 'Rust',
    accent: '#388BFD',
    description: 'Resolved CLI proxy and agent-hook issues in a developer tool that reduces LLM token usage by 60–90%.',
    technologies: ['Rust', 'CLI', 'Agent hooks'],
    github: 'https://github.com/TechWizard9999/rtk'
  },
  {
    title: 'ConnectExpress',
    mark: 'CX',
    kind: 'Personal project',
    category: 'Route planning',
    language: 'C++ · JavaScript',
    accent: '#79C0FF',
    description: 'Built a multi-leg railway route finder with a two-pass C++ connection matcher, delay prediction at ~85% accuracy, and Redis caching that cut peak response time by ~40%.',
    technologies: ['Next.js', 'Node.js', 'C++', 'Python', 'Redis'],
    github: 'https://github.com/TechWizard9999/Connect-Express'
  },
  {
    title: 'Meta EDU',
    mark: 'EDU',
    kind: 'Hackathon project',
    category: 'AR / VR education',
    language: 'JavaScript',
    accent: '#A5D6FF',
    description: 'An AR/VR education project built on Aptos and developed for the SuperMove Tour DAppathon.',
    technologies: ['Aptos', 'AR / VR', 'JavaScript'],
    github: 'https://github.com/TechWizard9999/Meta-Edu-Aptos'
  }
]
</script>

<style scoped>
.project-card {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 450ms ease var(--project-delay),
    transform 450ms ease var(--project-delay),
    border-color 220ms ease,
    box-shadow 220ms ease;
}

.project-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.project-card.is-visible:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--project-accent) 42%, transparent);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.24);
}

.project-cover {
  background:
    radial-gradient(ellipse at 75% 15%, color-mix(in srgb, var(--project-accent) 18%, transparent), transparent 55%),
    linear-gradient(135deg, #161b22, #0d1117);
}

.project-cover-grid {
  background-image:
    linear-gradient(rgba(139, 148, 158, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 148, 158, 0.08) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: linear-gradient(to bottom, black, transparent 100%);
}

.project-mark {
  color: var(--project-accent);
  filter: drop-shadow(0 0 18px color-mix(in srgb, var(--project-accent) 35%, transparent));
}

@media (prefers-reduced-motion: reduce) {
  .project-card {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
