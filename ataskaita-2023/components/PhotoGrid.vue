<template>
    <div class="grid grid-cols-2 gap-8 mt-16">
        <div v-for="photo in teamPhotos" class="flex flex-col items-center gap-3">
            <a :href="photo.href">
                <img class="rounded-md shadow-sm hover:shadow-xl transition-shadow" :src="photo.link" />
            </a>
            <strong class="tracking-tight text-lg/5 text-center">{{ photo.title }}</strong>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    teamPhotos: {
        href: string;
        link: string;
        title: string;
    }[];
}>();
</script>