<template>
  <section id="skills" class="section-dark py-24 relative">
    <!-- Greek Key Border -->
    <div class="greek-key-border"></div>

    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-8">
        <div class="inline-block mb-4">
          <svg class="w-16 h-10 mx-auto text-white/40" viewBox="0 0 64 40" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M8 36h48M12 36V16M52 36V16M8 16h48M12 16L32 4L52 16"/>
            <path d="M24 36V20M40 36V20"/>
          </svg>
        </div>
        <h2 
          ref="foundationsRef"
          class="font-cinzel-decorative text-4xl md:text-5xl tracking-wider text-white mb-8"
          :style="{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease'
          }"
        >
          SKILLS
        </h2>
        <p class="text-cool-gray text-sm max-w-2xl mx-auto italic">
          "The strength of the structure lies in the integrity of its base. Mastery is but logic applied with discipline."
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
          <h3 class="font-cinzel text-lg tracking-[0.2em] text-bronze uppercase mb-6 border-b border-white/10 pb-3">Programming Languages</h3>
          <div class="flex flex-wrap gap-3">
            <span class="skill-tag">Java</span>
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">Python</span>
            <span class="skill-tag">C++</span>
            <span class="skill-tag">C</span>
            <span class="skill-tag">Solidity</span>
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
          <h3 class="font-cinzel text-lg tracking-[0.2em] text-bronze uppercase mb-6 border-b border-white/10 pb-3">Backend & Web</h3>
          <div class="flex flex-wrap gap-3">
            <span class="skill-tag">Spring Boot</span>
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">Express.js</span>
            <span class="skill-tag">Next.js</span>
            <span class="skill-tag">React</span>
            <span class="skill-tag">GraphQL</span>
            <span class="skill-tag">Kafka</span>
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
          <h3 class="font-cinzel text-lg tracking-[0.2em] text-bronze uppercase mb-6 border-b border-white/10 pb-3">Databases & DevOps</h3>
          <div class="flex flex-wrap gap-3">
            <span class="skill-tag">MongoDB</span>
            <span class="skill-tag">MySQL</span>
            <span class="skill-tag">Redis</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">Kubernetes</span>
            <span class="skill-tag">Linux</span>
          </div>
        </div>

        <!-- Blockchain & ML -->
        <div 
          :style="{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease 800ms'
          }"
        >
          <h3 class="font-cinzel text-lg tracking-[0.2em] text-bronze uppercase mb-6 border-b border-white/10 pb-3">Blockchain & ML</h3>
          <div class="flex flex-wrap gap-3">
            <span class="skill-tag">Web3.js</span>
            <span class="skill-tag">Ethers.js</span>
            <span class="skill-tag">Hardhat</span>
            <span class="skill-tag">IPFS</span>
            <span class="skill-tag">Polygon</span>
            <span class="skill-tag">TensorFlow</span>
            <span class="skill-tag">Scikit-learn</span>
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
.greek-key-border,
.greek-key-border-bottom {
  position: absolute;
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
.greek-key-border { top: 0; }
.greek-key-border-bottom { bottom: 0; }

.skill-tag {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(205, 127, 50, 0.3);
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: rgba(205, 127, 50, 0.15);
  border-color: rgba(205, 127, 50, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(205, 127, 50, 0.2);
}
</style>
