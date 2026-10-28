<template>
  <section id="opensource" class="section-dark py-24 md:py-28">
    <div class="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p class="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">Community</p>
        <h2 class="mb-5 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Open source<span class="text-accent">.</span>
        </h2>
        <p class="mb-8 max-w-xl leading-relaxed text-cool-gray">
          I contribute fixes and features to developer tools, infrastructure projects, and language ecosystems.
        </p>
        <a
          href="https://github.com/TechWizard9999?tab=overview"
          target="_blank"
          rel="noopener noreferrer"
          class="link-accent inline-flex items-center gap-2 text-sm"
        >
          Explore my GitHub activity
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="open-source-card rounded-2xl border border-white/10 bg-dark-secondary p-6 md:p-8">
        <div class="mb-7 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p class="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-cool-gray">Public contributions</p>
            <p class="font-display text-5xl font-semibold tracking-tight text-accent md:text-6xl">50<span class="text-white">+</span></p>
          </div>
          <p class="max-w-[13rem] text-sm leading-relaxed text-cool-gray">
            Pull requests across projects I use and learn from.
          </p>
        </div>

        <div class="border-t border-white/10 pt-6">
          <p class="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-cool-gray">Communities</p>
          <ul class="flex flex-wrap gap-2" aria-label="Open-source communities">
            <li v-for="community in communities" :key="community">
              <span class="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-[#c9d1d9]">
                {{ community }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const communities = [
  'NVIDIA DSX',
  'RTK-AI',
  'Carbon Language',
  'LibreFang',
  'OpenWork',
  'PinchTab'
]
</script>

<style scoped>
.open-source-card {
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.18);
  transition: border-color 220ms ease, transform 220ms ease;
}

.open-source-card:hover {
  transform: translateY(-3px);
  border-color: rgba(88, 166, 255, 0.3);
}

@media (prefers-reduced-motion: reduce) {
  .open-source-card {
    transition: none;
  }
}
</style>
