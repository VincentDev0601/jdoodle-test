<template>
  <div class="p-8 min-h-screen">
    <div class="code-section bg-gray-100 rounded-lg shadow-lg p-8">
      <select
        v-model="selectedLanguage"
        class="select-lang bg-yellow-500 text-black border-2 border-black rounded px-4 py-2 mb-4"
      >
        <option
          v-for="language in languages"
          :key="language.id"
          :value="language"
        >
          {{ language.name }}
        </option>
      </select>

      <div class="code-heading text-2xl font-bold text-center mb-4">
        Your Solution
      </div>

      <codemirror
        v-model="codeFromBox"
        :value="codeFromBox"
        placeholder="Code goes here..."
        :style="{
          height: '300px',
          color: 'white',
          fontSize: '15px',
          fontFamily: 'monospace',
          backgroundColor: 'black',
        }"
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
      />

      <div class="run-code-user-input my-4 flex items-center">
        <label for="user-input" class="mr-2 font-semibold"
          >Provide Input:</label
        >
        <input
          id="user-input"
          v-model="userInput"
          class="input-user w-64 bg-white text-black border-2 border-black px-4 py-2 rounded mr-2"
          type="text"
        />
        <button
          @click="runCodeForUserInput"
          class="btn-run-code bg-yellow-500 text-black px-4 py-2 rounded font-semibold"
        >
          Run
        </button>
      </div>
      <div class="run-code-user-input mb-4 flex items-center">
        <label for="user-input" class="mr-2 font-semibold">Output:</label>
        <span class="output text-green-600">{{ userOutput }}</span>
      </div>

      <div
        v-if="showTestcaseResult"
        class="count-passing-testcase mb-4 font-semibold text-red-600"
      >
        {{ count }} / 5 Testcases passed for this question!
      </div>

      <div class="run-n-submit flex justify-between">
        <button
          @click="runCodeForTestcaseInput"
          class="code-sectn-btn bg-yellow-500 text-black px-6 py-3 rounded font-semibold"
        >
          Run Tests
        </button>
        <button
          @click="submit"
          class="code-sectn-btn bg-yellow-500 text-black px-6 py-3 rounded font-semibold"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import runCodeonCompilerAPI from "../utils/code_executor";
import { languageMetadata } from "../data/languageMetadata.js";
import { questionBank } from "../data/questionBank.js";
import { Codemirror } from "vue-codemirror";

const i = defineProps(["currentIndex"]);
const emit = defineEmits(["totalScoreEmit"]);

const codeFromBox = ref("");
const output = ref(null);
const userInput = ref("");
const userOutput = ref(null);
const totalScore = ref(0);
const showTestcaseResult = ref(false);
const test = ref(questionBank);
const count = ref(0);

const testList = computed(() => test.value[i.currentIndex - 1].testcase);
const languages = ref(languageMetadata);
const selectedLanguage = ref({
  id: 62,
  name: "Java (OpenJDK 13.0.1)",
  language_code: "java",
  version_index: 4,
});

const submit = () => {
  totalScore.value = 0;
  codeFromBox.value = "";
  count.value = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (test.value[i].testcase[j].testResult === null)
        return alert(`Run testcases for question number ${i + 1}`);
      if (test.value[i].testcase[j].testResult === 1) totalScore.value++;
    }
  }
  emit("totalScoreEmit", totalScore.value);
};

const runCodeForUserInput = () => {
  runCodeonCompilerAPI(
    codeFromBox.value,
    userInput.value,
    selectedLanguage.value
  )
    .then((result) => {
      userOutput.value = result.output;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
};

const runCodeForTestcaseInput = async () => {
  count.value = 0;
  for (let i = 0; i < 5; i++) {
    try {
      const result = await runCodeonCompilerAPI(
        codeFromBox.value,
        testList.value[i].input,
        selectedLanguage.value
      );
      output.value = result.output;
      if (output.value === testList.value[i].output) {
        testList.value[i].testResult = 1;
        count.value++;
      } else testList.value[i].testResult = 1;
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  showTestcaseResult.value = true;
};
</script>

<style scoped>
.select-lang {
  border-radius: 0.375rem;
}

.code-section {
  max-width: 600px;
}

.code-heading {
  color: #333;
}

.textarea-code {
  resize: vertical;
}

.run-code-user-input .output {
  font-weight: bold;
}

.count-passing-testcase {
  font-weight: bold;
}
</style>
