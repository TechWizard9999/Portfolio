<template>
  <nav aria-label="Main navigation" class="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-dark/80 px-3 py-3 backdrop-blur-xl sm:px-6">
    <div class="mx-auto w-full min-w-0 max-w-6xl">
      <ul class="nav-links flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 whitespace-nowrap font-display text-[10px] uppercase tracking-[0.1em] sm:gap-x-5 md:flex-nowrap md:gap-8 md:text-xs">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            :aria-current="activeSection === item.href.slice(1) ? 'location' : undefined"
            :class="[
              'relative transition-colors duration-200 group',
              activeSection === item.href.replace('#', '') 
                ? 'text-accent'
                : 'text-cool-gray hover:text-white'
            ]"
          >
            {{ item.label }}
            <span 
              :class="[
                'absolute -bottom-1 left-0 h-px bg-accent transition-all duration-200',
                activeSection === item.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
              ]"
            ></span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#principles' },
  { label: 'Open source', href: '#opensource' },
  { label: 'Contact', href: '#contact' }
]

const activeSection = ref('')

const handleScroll = () => {
  const sections = navItems.map(item => item.href.replace('#', ''))
  const scrollPosition = window.scrollY + 150

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i])
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = sections[i]
      return
    }
  }
  activeSection.value = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
