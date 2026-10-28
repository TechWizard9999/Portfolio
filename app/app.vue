<template>
  <div class="min-h-screen bg-dark text-white">
    <!-- Global Overlays -->
    <ViewportFrame />
    <CustomCursor />

    <!-- Navigation -->
    <Navigation />

    <!-- Main Content -->
    <main>
      <HeroSection />
      <ChroniclesSection />
      <FoundationsSection />
      <SelectedWorks />
      <PrinciplesSection />
      <OpenSourceSection />
      <ContactSection />
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s',
  title: 'Roopesh S | Software Engineer at Microsoft'
})
</script>
