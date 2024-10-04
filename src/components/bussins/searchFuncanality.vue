<template>
  <div class="search d-flex flex-column py-5 mx-4">
    <div class="d-flex">
      <div class="keyword d-flex mx-1" v-for="word in words" :key="word">
        <p v-if="word">{{ word }}</p>
        <button @click.prevent="removeWord(word)" class="span">
          <font-awesome-icon
            :icon="['fas', 'circle-xmark']"
            class="icon"
            v-if="word"
          />
        </button>
      </div>
    </div>

    <div class="searchItem mt-5">
      <input
        type="text"
        class="searchInput"
        id="search"
        placeholder="ابحث عن موهبة لتنفيذ عملك"
        v-model="searchWord[0]"
      />
      <button @click.prevent="search" for="" class="label py-2">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </button>
    </div>
    <div class="searchItem mt-5">
      <select name="" id="optiosn" class="searchInput" v-model="searchWord[1]">
        <option :value="searchWord[1]" disabled hidden selected>
          ابحث باستخدام المهارة
        </option>

        <option :value="skill" v-for="skill in skills" :key="skill.id">
          {{ skill }}
        </option>
      </select>
    </div>
    <div class="searchItem mt-5">
      <select name="" id="option" class="searchInput" v-model="searchWord[2]">
        <option :value="searchWord[2]" selected disabled hidden>
          ابحث باستخدام المهارة
        </option>

        <option v-for="skill in skills" :key="skill.value" :value="skill">
          {{ skill }}
        </option>
      </select>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const emit = defineEmits("search");
const words = ref([]);
const searchWord = ref([]);
const skills = ref([
  "تصميم المواقع",
  "التسويق الالكتروني",
  "تصميم الجرافيك",
  "برمجة تطبيقات الموبايل",
  "مدخل البيانات",
  "التعليق الصوتي",
]);

const search = () => {
  words.value = [...searchWord.value];
 
  console.log(...searchWord.value);
  emit('search',...searchWord.value)
  searchWord.value = [];
};
const removeWord = (word) => {
  console.log(word);
  const index = words.value.indexOf(word);
  console.log(index);
  console.log(words.value);
  words.value.splice(index, 1);
};
</script>
<style scoped>

.searchInput {
  width: 80%;
  height: 40px;
}
.label {
  cursor: pointer;
  text-align: center;
  background-color: rgb(86, 223, 7);
  width: 30px;
  height: 40px;
  font-size: medium;
  list-style-type: none;
  border: 0;
}
.keyword {
  display: flex;
  flex-direction: row;
  background-color: rgb(220, 221, 223);
  color: rgb(8, 70, 240);
  text-align: center;
}

.keyword p {
  font-size: 1.2rem;
  margin: 0 4px;
  width: fit-content;
}
.keyword .span {
  display: flex;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: auto;
  text-align: center;
  background-color: gray;
  color: black;
  border: 0;
  padding-top: 2px;
}
</style>
