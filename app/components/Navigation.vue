<template>
  <nav class="fixed top-0 left-0 right-0 z-30 py-6 px-8">
    <div class="max-w-7xl mx-auto flex justify-center">
      <ul class="flex items-center gap-8 md:gap-12 font-cinzel text-sm tracking-widest uppercase">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            :class="[
              'transition-colors duration-300 relative group',
              activeSection === item.href.replace('#', '') 
                ? 'text-bronze' 
                : 'text-cool-gray hover:text-bronze'
            ]"
          >
            {{ item.label }}
            <span 
              :class="[
                'absolute -bottom-1 left-0 h-px bg-bronze transition-all duration-300',
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
  { label: 'Library', href: '#library' },
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
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
