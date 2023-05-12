<template>
    <div class="flex flex-col items-center">
        <div class="text-6xl font-bold text-[#fbb01b] mb-1">
            <NumberCounter :end-number="endNumber"></NumberCounter>
        </div>
        <div class="w-60 text-center"><slot /></div>
    </div>
</template>

<script setup lang="ts">
import NumberCounter from "./NumberCounter.vue";

defineProps<{
    endNumber: number;
}>();
</script>