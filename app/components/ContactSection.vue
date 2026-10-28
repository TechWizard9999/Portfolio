<template>
  <section id="contact" class="section-dark relative py-24">
    <div aria-hidden="true" class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
    
    <div class="max-w-2xl mx-auto px-6 text-center">
      <!-- Feather Icon -->
      <div class="mb-6">
        <svg class="mx-auto h-12 w-12 text-accent/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
          <line x1="16" y1="8" x2="2" y2="22"/>
          <line x1="17.5" y1="15" x2="9" y2="15"/>
        </svg>
      </div>

      <!-- Section Title -->
      <h2 
        ref="contactRef"
        class="mb-4 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl"
        :style="{ 
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease'
        }"
      >
        LET'S CONNECT
      </h2>
      <p class="mb-12 text-sm text-cool-gray">
        Have a project or idea in mind? I’d be glad to hear from you.
      </p>

      <!-- Contact Form -->
      <form 
        class="space-y-8"
        :style="{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease 200ms'
        }"
        @submit.prevent="handleSubmit"
      >
        <div class="grid md:grid-cols-2 gap-8">
          <div class="text-left">
            <label for="contact-name" class="mb-2 block text-left font-mono text-xs uppercase tracking-wider text-cool-gray">Your Name</label>
            <input 
              id="contact-name"
              type="text" 
              v-model="form.name"
              autocomplete="name"
              class="w-full border-b border-white/15 bg-transparent py-3 text-white outline-none transition-colors placeholder:text-cool-gray/60 focus:border-accent"
            />
          </div>
          <div class="text-left">
            <label for="contact-email" class="mb-2 block text-left font-mono text-xs uppercase tracking-wider text-cool-gray">Email Address</label>
            <input 
              id="contact-email"
              type="email" 
              v-model="form.email"
              autocomplete="email"
              class="w-full border-b border-white/15 bg-transparent py-3 text-white outline-none transition-colors placeholder:text-cool-gray/60 focus:border-accent"
              placeholder="roopesh1724989@gmail.com"
            />
          </div>
        </div>

        <div class="text-left">
          <label for="contact-subject" class="mb-2 block text-left font-mono text-xs uppercase tracking-wider text-cool-gray">Subject</label>
          <input 
            id="contact-subject"
            type="text" 
            v-model="form.subject"
            class="w-full border-b border-white/15 bg-transparent py-3 text-white outline-none transition-colors placeholder:text-cool-gray/60 focus:border-accent"
          />
        </div>

        <div class="text-left">
          <label for="contact-message" class="mb-2 block text-left font-mono text-xs uppercase tracking-wider text-cool-gray">Your Message</label>
          <textarea 
            id="contact-message"
            v-model="form.message"
            rows="4"
            class="w-full resize-none border-b border-white/15 bg-transparent py-3 text-white outline-none transition-colors placeholder:text-cool-gray/60 focus:border-accent"
          ></textarea>
        </div>

        <button 
          type="submit"
          class="btn-primary mt-8"
        >
          Send Message
        </button>
      </form>
    </div>

    <!-- Footer -->
    <div class="max-w-4xl mx-auto px-6 mt-24 text-center">
      <p class="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-cool-gray">Building with curiosity</p>
      
      <!-- Social Links -->
      <div class="mb-8 flex flex-wrap justify-center gap-x-5 gap-y-3">
        <a href="https://github.com/TechWizard9999" target="_blank" rel="noopener noreferrer" class="text-cool-gray transition-colors duration-200 hover:text-accent text-sm tracking-wider uppercase">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/s-roopesh-39934229a/" target="_blank" rel="noopener noreferrer" class="text-cool-gray transition-colors duration-200 hover:text-accent text-sm tracking-wider uppercase">
          LinkedIn
        </a>
        <a href="mailto:roopesh1724989@gmail.com" class="break-all border-b border-accent/30 pb-1 text-sm font-semibold uppercase tracking-wide text-accent transition-colors duration-200 hover:text-white">
          roopesh1724989@gmail.com
        </a>
      </div>

      <p class="text-xs text-cool-gray/60 tracking-wider">
        © {{ currentYear }} Roopesh S · Built with Nuxt
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const contactRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const currentYear = new Date().getFullYear()

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

onMounted(() => {
  useIntersectionObserver(
    contactRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )
})

const handleSubmit = () => {
  const mailtoLink = `mailto:roopesh1724989@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
  window.open(mailtoLink)
}
</script>
