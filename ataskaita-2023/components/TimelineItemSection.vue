<template>
  <div class="flex flex-col leading-5 w-full relative mt-4">
    <div class="relative group" v-for="(item, index) in items">
      <!-- Timeline -->
      <div class="absolute h-full left-0 mt-1 group w-8">
        <div
          class="w-4 h-4 rounded-full bg-white dark:bg-zinc-800"
          style="border: 2px solid"
          :style="{
            'border-color':
              item.type === 'default'
                ? '#d9d9d9'
                : item.type === 'success'
                ? '#52c41a'
                : item.type === 'warning'
                ? '#fbb01b'
                : '#f5222d',
          }"
        ></div>
        <div
          class="w-0.5 h-full absolute bg-zinc-300 dark:bg-zinc-700 group-last:hidden"
          style="left: 6.8px"
        ></div>
      </div>
      <!-- Content -->
      <div class="ml-8">
        <div class="text-sm/6 font-semibold dark:text-zinc-100">
          {{
            english
              ? computeEnTitle(item.type, index)
              : computeTitle(item.type, index)
          }}
        </div>
        <div class="text-xs mb-6">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NTimeline, NTimelineItem, type TimelineItemProps } from "naive-ui";

const props = defineProps<{
  items: {
    title: TimelineItemProps["title"];
    content?: TimelineItemProps["content"];
    // get type from NTImelineItem
    type: TimelineItemProps["type"];
  }[];
  english?: boolean;
}>();

const computeTitle = (type: TimelineItemProps["type"], index: number) => {
  let title = "";

  switch (type) {
    case "default":
      title = "bus vykdoma";
      break;
    case "success":
      title = "įvykdyta";
      break;
    case "warning":
      title = "vykdoma";
      break;
    case "error":
      title = "atsisakyta";
      break;
  }

  return `${index + 1} uždavinys: ${title}`;
};

const computeEnTitle = (type: TimelineItemProps["type"], index: number) => {
  let title = "";

  switch (type) {
    case "default":
      title = "in progress";
      break;
    case "success":
      title = "completed";
      break;
    case "warning":
      title = "in progress";
      break;
    case "error":
      title = "canceled";
      break;
  }

  return `Task ${index + 1}: ${title}`;
};
</script>
