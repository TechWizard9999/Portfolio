<template>
  <section id="contact" class="section-dark py-24 relative">
    <!-- Greek Key Border Top -->
    <div class="greek-key-border"></div>
    
    <div class="max-w-2xl mx-auto px-6 text-center">
      <!-- Feather Icon -->
      <div class="mb-6">
        <svg class="w-12 h-12 mx-auto text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
          <line x1="16" y1="8" x2="2" y2="22"/>
          <line x1="17.5" y1="15" x2="9" y2="15"/>
        </svg>
      </div>

      <!-- Section Title -->
      <h2 
        ref="contactRef"
        class="font-cinzel-decorative text-4xl md:text-5xl tracking-wider text-white mb-4"
        :style="{ 
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease'
        }"
      >
        CONTACT ME
      </h2>
      <p class="text-cool-gray text-sm tracking-widest uppercase mb-12">
        Feel free to reach out
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
            <label class="block text-xs tracking-widest uppercase text-cool-gray mb-2">Your Name</label>
            <input 
              type="text" 
              v-model="form.name"
              class="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-bronze outline-none transition-colors"
            />
          </div>
          <div class="text-left">
            <label class="block text-xs tracking-widest uppercase text-cool-gray mb-2">Email Address</label>
            <input 
              type="email" 
              v-model="form.email"
              class="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-bronze outline-none transition-colors"
              placeholder="roopesh1724989@gmail.com"
            />
          </div>
        </div>

        <div class="text-left">
          <label class="block text-xs tracking-widest uppercase text-cool-gray mb-2">Subject</label>
          <input 
            type="text" 
            v-model="form.subject"
            class="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-bronze outline-none transition-colors"
          />
        </div>

        <div class="text-left">
          <label class="block text-xs tracking-widest uppercase text-cool-gray mb-2">Your Message</label>
          <textarea 
            v-model="form.message"
            rows="4"
            class="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-bronze outline-none transition-colors resize-none"
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
      <!-- Skull Icon -->
      <div class="mb-4">
        <svg class="w-10 h-10 mx-auto text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <circle cx="12" cy="10" r="8"/>
          <circle cx="9" cy="9" r="2"/>
          <circle cx="15" cy="9" r="2"/>
          <path d="M9 22v-6M15 22v-6M12 14v2"/>
        </svg>
      </div>
      
      <p class="text-xs tracking-[0.3em] uppercase text-cool-gray mb-6">Memento Mori</p>
      
      <!-- Social Links -->
      <div class="flex justify-center gap-6 mb-8">
        <a href="https://github.com/TechWizard9999" target="_blank" class="text-cool-gray hover:text-bronze transition-colors text-sm tracking-wider uppercase">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/s-roopesh-39934229a/" target="_blank" class="text-cool-gray hover:text-bronze transition-colors text-sm tracking-wider uppercase">
          LinkedIn
        </a>
        <a href="mailto:roopesh1724989@gmail.com" class="text-bronze hover:text-white transition-colors text-base tracking-wider uppercase font-bold border-b border-bronze/30 pb-1">
          roopesh1724989@gmail.com
        </a>
      </div>

      <p class="text-xs text-cool-gray/60 tracking-wider">
        Crafted with Stoic Discipline. © 2025
      </p>
      <p class="text-xs text-cool-gray/40 mt-2">
        Inspired by the inner citadel of the soul
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const contactRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

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

<style scoped>
.greek-key-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 24px;
  background-image: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 20px,
    rgba(205, 127, 50, 0.1) 20px,
    rgba(205, 127, 50, 0.1) 40px
  );
}
</style>
