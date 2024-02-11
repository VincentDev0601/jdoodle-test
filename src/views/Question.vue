<script setup>
import { reactive, ref, computed } from "vue";
import { questionBank } from "../data/questionBank.js";
import QuestionPanel from "../components/QuestionPanel.vue";
import CodeEditor from "../components/CodeEditor.vue";
import Result from "../components/Result.vue";
import Progressbar from "../components/Progressbar.vue";

const questions = reactive(questionBank);
const currentId = ref(0);
const showResult = ref(false);
let score = 0;
const currentQuesInputFormat = computed(
  () => questions[currentId.value].input_format
);
const currentQuesOutputFormat = computed(
  () => questions[currentId.value].output_format
);
const currentIndex = computed(() => questions[currentId.value].id);
const currentQuestion = computed(() => questions[currentId.value].question);

const questionStatus = computed(() => `${currentId.value + 1}/5`);
const barPercentage = computed(() => `${((currentId.value + 1) / 5) * 100}%`);

const nextQuestion = () => {
  if (currentId.value < questions.length - 1) {
    currentId.value++;
  }
};

const previousQuestion = () => {
  if (currentId.value > 0) {
    currentId.value--;
  }
};

const showResultFunction = (totalScore) => {
  score = totalScore;
  showResult.value = true;
};
</script>

<template>
  <div>
    <div class="text-white w-full bg-gray-900">
      <Progressbar
        :questionStatus="questionStatus"
        :barPercentage="barPercentage"
      />

    </div>
    <div class="relative flex justify-center items-center min-h-screen">
      <div v-if="!showResult" class="w-1/2 min-h-screen">
        <QuestionPanel
          :currentIndex="currentIndex"
          :currentQuestion="currentQuestion"
          :nextQuestion="nextQuestion"
          :previousQuestion="previousQuestion"
          :currentQuesInputFormat="currentQuesInputFormat"
          :currentQuesOutputFormat="currentQuesOutputFormat"
          :questionStatus="questionStatus"
          :barPercentage="barPercentage"
        />
      </div>
      <div v-if="!showResult" class="w-1/2 min-h-screen">
        <CodeEditor
          :currentIndex="currentIndex"
          @totalScoreEmit="showResultFunction"
        />
      </div>
      <div v-if="showResult" class="w-1/2 min-h-screen">
        <Result :score="score" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
