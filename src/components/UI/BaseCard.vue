<template>
  <div class="row content d-flex justify-content-center bggray">
    <div class="col-12">
      <h2 class="text-center">{{ title }}</h2>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['title'])


</script>
<style scoped>
.content {
  box-shadow: 5px 5px 10px rgba(18, 54, 183, 0.5);
  margin-top: 30px;
  width: 100%;
  font-size: 1.6rem;
  font-weight: bolder;
  background-color: rgb(255, 255, 255);
}
h2 {
  width: 100%;
}
</style>
