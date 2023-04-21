<template>
  <div
    class="relative w-40 h-56 bg-cover bg-center rounded-xl cursor-pointer"
    :style="{ backgroundImage: `url(${card.image})` }"
  >
    <h3 class="text-sm font-medium absolute bottom-6 left-2">
      {{ card.title }}
    </h3>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  card: { title: string; image: string };
}>();
</script>
