<template>
  <div>
    {{ props.pageIndex }}
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({ pageIndex: Number });
const loadData = () => {
  console.log("pageIndex");
  console.log(props.pageIndex);
};
loadData();
</script>
