<template>
  <div>
    <div class="text-lg font-semibold mb-2">Question {{ questionStatus }}</div>
    <div class="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
      <div
        class="bg-yellow-400 h-full transition-all duration-500"
        :style="{ width: barPercentage }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { questionStatus, barPercentage } = defineProps([
  "questionStatus",
  "barPercentage",
]);
</script>

<style scoped></style>
