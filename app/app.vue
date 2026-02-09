<template>
  <div class="min-h-screen">
    <!-- Loading Screen -->
    <LoadingScreen @loaded="onLoaded" />

    <!-- Global Overlays -->
    <GrainOverlay />
    <ViewportFrame />
    <CustomCursor />

    <!-- Navigation -->
    <Navigation />

    <!-- Main Content -->
    <main :style="{ opacity: contentLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }">
      <HeroSection :content-loaded="contentLoaded" />
      <ChroniclesSection />
      <FoundationsSection />
      <SelectedWorks />
      <PrinciplesSection />
      <LibrarySection />
      <ContactSection />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const contentLoaded = ref(false)

const onLoaded = () => {
  contentLoaded.value = true
}

useHead({
  titleTemplate: '%s',
  title: 'Roopesh S | Software Engineer'
})
</script>
