<template>
    <span>{{ numberRef }}</span>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ref } from "vue";

const props = defineProps<{
    endNumber: number;
}>();

const numberRef = ref(0);

gsap.to(numberRef, {
  value: props.endNumber,
  duration: 2,
  roundProps: "value",
});
</script>
