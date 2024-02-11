<template>
  <div class="p-8 min-h-screen flex justify-center items-center">
    <div class="modal bg-white">
      <div class="modal_title text-xl font-semibold mb-8">Your Score</div>
      <div class="modal_text text-6xl font-bold mb-12">
        {{ result.score }}/25
      </div>
      <div class="text-lg mb-8">
        {{ result.score }} testcases passed out of 25
      </div>
      <router-link to="/">
        <button class="modal_btn">Go Back &rarr;</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const result = defineProps(["score"]);
</script>

<style scoped>
.modal_btn {
  @apply text-black bg-white border border-black rounded-full px-8 py-4 font-semibold transition duration-300 ease-in-out;
}

.modal_btn:hover {
  @apply shadow-md;
}

.modal {
  @apply p-8 border-2 border-black rounded-lg shadow-lg text-center;
  max-width: 400px;
}

.modal_title {
  margin-bottom: 2rem;
}

.modal_text {
  margin-bottom: 3rem;
}
</style>
