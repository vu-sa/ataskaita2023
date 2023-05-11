<template>
  <section class="lg:px-2 px-1.5 isolate">
    <div class="md:max-w-6xl sm:py-8 py-6 max-w-2xl mx-auto">
      <figure class="flex flex-col md:flex-row items-center gap-8">
        <div class="p-8">
          <img class="shadow-md" :src="imgSrc" alt="" />
        </div>
        <div class="relative p-8">
          <svg
            class="absolute w-36 h-36 text-zinc-500/10 dark:text-zinc-100/20 right-8 -bottom-8"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 15h15"></path>
              <path d="M21 19H6"></path>
              <path d="M15 11h6"></path>
              <path d="M21 7h-6"></path>
              <path d="M9 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2"></path>
              <path d="M3 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2"></path>
            </g>
          </svg>
          <blockquote>
            <p class="font-bold text-xl/8 tracking-normal italic">
              <slot />
            </p>
          </blockquote>
          <figcaption class="leading-4 my-8">
            <div class="text-lg font-bold">{{ personName }}</div>
            <div class="opacity-80 text-sm">{{ personPosition }}</div>
          </figcaption>
          <VPButton :href="href" :text="buttonText"></VPButton>
        </div>
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue";

defineProps<{
  imgSrc: string;
  href: string;
  buttonText: string;
  personName: string;
  personPosition: string;
}>();
</script>
