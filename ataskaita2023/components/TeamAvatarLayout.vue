<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
    <PersonAvatar :size="60" :src="member.avatar" v-for="member in members">
      <div class="flex flex-col leading-5">
        <strong class="text-md/4">{{ member.name }}</strong>
        <span class="text-xs">{{ member.title }}</span>
      </div>
    </PersonAvatar>
  </section>
</template>

<script setup lang="tsx">
import PersonAvatar from "./PersonAvatar.vue";

defineProps<{
  members: Record<"name" | "title" | "avatar", string>[];
}>();
</script>
