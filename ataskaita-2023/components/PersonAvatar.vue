<template>
  <div class="grid grid-cols-[auto,1fr] gap-4 items-center">
    <img class="rounded-full w-16 h-16 object-cover" :src="src" />

    <div><slot /></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name?: string;
  src: string;
  size?: number;
}>();
</script>
