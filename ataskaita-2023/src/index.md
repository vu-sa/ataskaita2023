---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "VU SA ataskaita"
  text: "už 2022-2023 m."
  tagline: "VU SA ataskaita už 2022-2023 m."
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples
---

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
</script>

<section class="lg:px-2 px-1.5 isolate">
  <div class="max-w-6xl mx-auto">
    <Carousel>
      <Slide class="bg-red-400 h-80" v-for="slide in 10" :key="slide">1</Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</section>
