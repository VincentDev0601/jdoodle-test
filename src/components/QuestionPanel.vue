<template>
  <div class="p-8 min-h-screen">
    <div class="question-section bg-white mx-auto p-8 rounded-lg shadow-lg">
      <div class="flex justify-between items-center mb-8">
        <button @click="previousQuestion" class="question-btn">&larr;</button>
        <h1 class="text-xl font-bold">Question {{ currentIndex }}</h1>
        <button @click="nextQuestion" class="question-btn">&rarr;</button>
      </div>
      <hr class="my-6 border-b border-gray-300" />
      <div class="text-lg mb-4">{{ currentQuestion }}</div>
      <div class="font-semibold mb-2">Input Format:</div>
      <div class="mb-4">{{ currentQuesInputFormat }}</div>
      <div class="font-semibold mb-2">Output Format:</div>
      <div class="mb-4">{{ currentQuesOutputFormat }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const {
  currentIndex,
  currentQuestion,
  nextQuestion,
  previousQuestion,
  currentQuesInputFormat,
  currentQuesOutputFormat,
  questionStatus,
  barPercentage,
} = defineProps([
  "currentIndex",
  "currentQuestion",
  "nextQuestion",
  "previousQuestion",
  "currentQuesInputFormat",
  "currentQuesOutputFormat",
  "questionStatus",
  "barPercentage",
]);
</script>

<style scoped>
.question-section {
  max-width: 600px;
}

.question-btn {
  border-radius: 9999px;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  background-color: #eab308;
  color: #333;
  border: none;
  cursor: pointer;
}
</style>
