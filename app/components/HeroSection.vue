<template>
  <section id="home" class="section-dark relative flex min-h-[92vh] items-center overflow-hidden px-6 pb-24 pt-32">
    <div class="hero-grid absolute inset-0 pointer-events-none"></div>
    <div class="hero-glow absolute inset-0 pointer-events-none"></div>

    <div class="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p class="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-dark-secondary/80 px-4 py-2 font-mono text-xs tracking-wide text-cool-gray">
          <span class="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(88,166,255,0.8)]"></span>
          SOFTWARE ENGINEER
          <span class="text-white/20">/</span>
          <span class="text-accent">MICROSOFT</span>
        </p>

        <h1 class="mb-6 font-display text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-8xl">
          Roopesh S<span class="text-accent">.</span>
        </h1>

        <p class="mb-4 max-w-2xl font-display text-xl leading-relaxed text-[#c9d1d9] md:text-2xl">
          I build developer tools, automation, and reliable software.
        </p>
        <p class="body-text mb-9 max-w-xl">
          Coding my way through the weekends.
        </p>

        <div class="mb-8 flex flex-wrap gap-3">
          <a href="#projects" class="btn-primary">
            Explore my work
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="https://github.com/TechWizard9999"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-accent/60 hover:text-accent"
          >
            GitHub profile
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="flex flex-wrap gap-x-6 gap-y-3 text-sm text-cool-gray">
          <a
            href="https://www.linkedin.com/in/s-roopesh-39934229a/"
            target="_blank"
            rel="noopener noreferrer"
            class="link-accent"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/doplGngr08/"
            target="_blank"
            rel="noopener noreferrer"
            class="link-accent"
          >
            LeetCode
          </a>
          <a href="/resume.pdf" download="Roopesh_S_Resume.pdf" class="link-accent">
            Download resume
          </a>
        </div>
      </div>

      <aside
        class="profile-card relative overflow-hidden rounded-2xl border border-white/10 bg-dark-secondary/90 p-6 shadow-2xl shadow-black/20 md:p-8"
        aria-label="Profile highlights"
      >
        <div class="profile-card-glow pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full"></div>

        <div class="relative">
          <div class="mb-7 flex items-start justify-between gap-4">
            <div>
              <p class="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-cool-gray">Currently</p>
              <h2 class="font-display text-2xl font-semibold text-white">Microsoft</h2>
            </div>
            <span class="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
              Full-time
            </span>
          </div>

          <p class="mb-6 text-sm leading-relaxed text-cool-gray">
            Since August 2026
          </p>

          <div class="border-t border-white/10 pt-6">
            <p class="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-cool-gray">Focused on</p>
            <ul class="space-y-3">
              <li v-for="area in focusAreas" :key="area" class="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span class="h-1.5 w-1.5 rounded-full bg-accent"></span>
                {{ area }}
              </li>
            </ul>
          </div>

          <a
            href="https://github.com/TechWizard9999"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-8 inline-flex items-center gap-2 border-t border-white/10 pt-5 font-mono text-xs text-cool-gray transition-colors hover:text-accent"
          >
            github.com/TechWizard9999
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
const focusAreas = ['Developer tooling', 'Automation systems', 'AI infrastructure']
</script>

<style scoped>
.hero-grid {
  background-image:
    linear-gradient(rgba(139, 148, 158, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 148, 158, 0.045) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: linear-gradient(to bottom, black, transparent 86%);
}

.hero-glow {
  background: radial-gradient(ellipse at 68% 42%, rgba(88, 166, 255, 0.13), transparent 58%);
}

.profile-card-glow {
  background: radial-gradient(circle, rgba(88, 166, 255, 0.2), transparent 70%);
  filter: blur(12px);
}
</style>
