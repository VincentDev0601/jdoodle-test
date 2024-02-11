<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <router-link
      to="/question"
      class="inline-block py-3 px-6 bg-white border-3 border-black rounded-full font-bold text-lg shadow-md hover:border-white hover:bg-black hover:text-white"
      >Start Test</router-link
    >
  </div>
</template>
